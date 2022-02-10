import React from 'react';
import { useTranslation } from 'react-i18next';
import { buildSubtestTranslateKey, isNil } from '../../lib/utils';
import { usePeriodStorage } from '../../repository/storageAdapter';
import { ResultPointsChart } from '../Chart';
import { Conclusion } from '../Conclusion';
import { ScaledTestTable } from '../Test/TestGroup/ScaledTestTable';

export const ResultSection = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();

    if (isNil(period)) {
        return (<div></div>);
    }

    const chartData = period.verbalSubtests
        .concat(period.inverbalSubtests)
        .map(subtest => {
            const name = buildSubtestTranslateKey(subtest.name);
            return { name: t(name), value: subtest.scalePoints };
        });
    
    const pointsTitle = t('common.tabs.results.scalePoints');
    const chartTitle = t('common.tabs.results.profile');
    const conclusionTitle = t('common.tabs.results.conclusion');
    const doctor = t('common.tabs.results.Anna');

    return (
        <React.Fragment>
            <div className="result-container">
                <div className="result-container__table">
                    <div className="result-container__title">{ pointsTitle }</div>
                    <ScaledTestTable></ScaledTestTable>
                </div>
                <div className="result-container__chart">
                    <div className="result-container__title">{ chartTitle }</div>
                    <ResultPointsChart data={chartData}></ResultPointsChart>
                </div>
               
            </div>
            <div className="conclusion-container">
                <div className="result-container__title">{ conclusionTitle }</div>
                <Conclusion></Conclusion>
                <div className="result-container__footer">{ doctor }</div>
            </div>
        </React.Fragment>        
    );
};

