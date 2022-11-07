import { Period, Subtest } from '@entities';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { formatClassNames, isNil } from '@utils';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScaledTestItem } from '../index';

type ScaledTestTableProps = {
    period: Period;
};

export const ScaledTestTable = (props: ScaledTestTableProps): JSX.Element => {
    const { t } = useTranslation();
    const { period } = props;

    const verbals = period.verbalSubtests;
    const nonverbals = period.nonverbalSubtests;

    const verbalScaleSum = verbals.reduce((acc, current) => acc + (current.scalePoints ?? 0), 0);
    const nonverbalScaleSum = nonverbals.reduce((acc, current) => acc + (current.scalePoints ?? 0), 0);

    const verbal = Period.getTruePoints(verbals, verbalScaleSum);
    const nonverbal = Period.getTruePoints(nonverbals, nonverbalScaleSum);
    const common = Number(verbal) + Number(nonverbal);

    const { verbalIQ, nonverbalIQ, commonIQ } = Period.getIQPoints({ verbal, nonverbal, common });

    const getResultRow = (key: string, value: number, secondValue?: number): JSX.Element => {
        const classNames = formatClassNames({
            'field': true,
            'field-cell': true,
            'field-cell__marked': true,
        });

        return (
            <TableRow key={`${key}-result`}>
                <TableCell colSpan={2} key={`${key}-label`} component="th" scope="row" className={classNames}>
                    {t(`common.tabs.results.subtests.${key}`)}
                </TableCell>
                <TableCell key="verbal-value" align="right" className={classNames}>
                    <span>{ value }</span>
                    {
                        isNil(secondValue)
                            ? null
                            : <span>/{ secondValue }</span>
                    }
                </TableCell>
            </TableRow>
        );
    };

    const verbalSumRow = getResultRow('verbal', verbalScaleSum, verbal);
    const nonverbalSumRow = getResultRow('nonverbal', nonverbalScaleSum, nonverbal);

    const commonSumRow = getResultRow('common', common);

    const iqVerbalRow = getResultRow('iq-verbal', verbalIQ);
    const iqNonverbalRow = getResultRow('iq-nonverbal', nonverbalIQ);
    const iqCommonRow = getResultRow('iq-common', commonIQ);
   
    return (
        <React.Fragment>
            <div className="table-container">
                <TableContainer className="table-container__table">
                    <Table className="table-container__table-content" aria-label="Verbal subtest result table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="table-container__table-content-header">
                                    {t('subtest.table.header.name')}
                                </TableCell>
                                <TableCell className="table-container__table-content-header"
                                    width="23%" 
                                    align="right">
                                    {t('subtest.table.header.points')}
                                </TableCell>
                                <TableCell className="table-container__table-content-header"
                                    width="23%"
                                    align="right">
                                    {t('subtest.table.header.scaledPoints')}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                verbals.map((subtest: Subtest) => 
                                    <ScaledTestItem key={subtest.name} subtest={subtest}/>)
                            }
                            { verbalSumRow }
                        </TableBody>
                    
                    </Table>

                    <Table className="table-container__table-content" aria-label="Nonverbal subtest result table">
                        <TableBody>
                            {
                                nonverbals.map((subtest: Subtest) => 
                                    <ScaledTestItem key={subtest.name} subtest={subtest}/>)
                            }
                            { nonverbalSumRow }
                        </TableBody>
                    </Table>

                    <Table className="table-container__table-content" aria-label="Common subtest result table">
                        <TableBody>
                            { commonSumRow }
                            { iqVerbalRow }
                            { iqNonverbalRow }
                            { iqCommonRow }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    );
};

