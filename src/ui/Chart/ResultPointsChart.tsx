import { LineChart, CartesianGrid, XAxis, YAxis, Line, Label } from 'recharts';
import { useTranslation } from 'react-i18next';
import { IChartData } from './contracts';
import React from 'react';

type ResultPointsChartProps = {
    data: Array<IChartData>;
};

const MIN_Y_AXIS_VALUE = 0;
const MAX_Y_AXIS_VALUE = 20;

export const ResultPointsChart = (props: ResultPointsChartProps): JSX.Element => {
    const { data } = props;
    const { t } = useTranslation();

    const pointsLabel = t('chart.points');
    const domain = [MIN_Y_AXIS_VALUE, MAX_Y_AXIS_VALUE];

    return (
        <React.Fragment>
            <LineChart width={600} height={600} data={data} margin={{
                top: 50, right: 20, bottom: 280, left: 20,
            }}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" connectNulls={true} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" interval={0} angle={-90} textAnchor="end" />
                <YAxis interval={0} tickCount={MAX_Y_AXIS_VALUE} domain={domain}>
                    <Label angle={-90} value={pointsLabel} position='insideLeft' style={{ textAnchor: 'middle' }} />
                </YAxis>
            </LineChart>
        </React.Fragment>
    );
};
