import { LineChart, CartesianGrid, XAxis, YAxis, Line, Label, Legend } from 'recharts';
import { useTranslation } from 'react-i18next';
import { IChartData } from './contracts';
import React from 'react';

type ResultPointsChartProps = {
    data: Array<IChartData>;
};

const MIN_Y_AXIS_VALUE = 0;
const MAX_Y_AXIS_VALUE = 20;

const POINTS_COLOR = '#8884d8';
const NORMAL_POINTS_COLOR = '#82ca9d';

export const ResultPointsChart = (props: ResultPointsChartProps): JSX.Element => {
    const { data } = props;
    const { t } = useTranslation();

    const pointsLabel = t('chart.points');
    const scale = t('chart.scalePoints');
    const normal = t('chart.normalPoints');

    const domain = [MIN_Y_AXIS_VALUE, MAX_Y_AXIS_VALUE];

    // TODO: fix all magic numbers and chairs
    return (
        <React.Fragment>
            <LineChart width={600} height={800} data={data} margin={{
                top: 50, right: 20, bottom: 0, left: 20,
            }}>
                <Legend verticalAlign="top" height={36}/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" interval={0} angle={-90} textAnchor="end" height={300} />
                <YAxis interval={0} tickCount={MAX_Y_AXIS_VALUE} domain={domain}>
                    <Label angle={-90} value={pointsLabel} position='insideLeft' style={{ textAnchor: 'middle' }} />
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
                    strokeDasharray="5 5" />
            </LineChart>
        </React.Fragment>
    );
};
