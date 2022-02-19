import { LineChart, CartesianGrid, XAxis, YAxis, Line, Label, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';
import { IChartData } from './contracts';

type ResultPointsChartProps = {
    data: Array<IChartData>;
};

const MIN_Y_AXIS_VALUE = 0;
const MAX_Y_AXIS_VALUE = 20;

const POINTS_COLOR = '#8884d8';
const NORMAL_POINTS_COLOR = '#82ca9d';

const STROKE_DASHES = '5 5';
const ANGLE = -90;
const INTERVAL = 0;

export const ResultPointsChart = (props: ResultPointsChartProps): JSX.Element => {
    const { data } = props;
    const { t } = useTranslation();

    const pointsLabel = t('chart.points');
    const scale = t('chart.scalePoints');
    const normal = t('chart.normalPoints');

    const domain = [MIN_Y_AXIS_VALUE, MAX_Y_AXIS_VALUE];

    return (     
        <ResponsiveContainer width="92%" height="80%">
            <LineChart data={data} margin={{
                top: 50, right: 20, bottom: 0, left: 20,
            }}>
                <Legend verticalAlign="top" height={19}/>
                <CartesianGrid stroke="#ccc" strokeDasharray={STROKE_DASHES} />
                <XAxis interval={INTERVAL} dataKey="name" textAnchor="end" angle={ANGLE} />
                <YAxis interval={INTERVAL} tickCount={MAX_Y_AXIS_VALUE} domain={domain}>
                    <Label angle={ANGLE} value={pointsLabel} position='insideLeft' style={{ textAnchor: 'middle' }} />
                </YAxis>
                <Line name={scale} 
                    type="monotone" 
                    dataKey="value" 
                    stroke={POINTS_COLOR}
                    connectNulls={true}
                    strokeWidth={3}  />
                <Line name={normal}
                    type="monotone" 
                    dataKey="normal" 
                    stroke={NORMAL_POINTS_COLOR}
                    connectNulls={true} 
                    strokeWidth={2} 
                    strokeDasharray={STROKE_DASHES} />
            </LineChart>
        </ResponsiveContainer>
    );
};
