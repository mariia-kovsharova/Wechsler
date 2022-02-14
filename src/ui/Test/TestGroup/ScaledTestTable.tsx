import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Period } from '../../../domain/entities/period';
import { ScaledTestItem } from '../index';

type ScaledTestTableProps = {
    period: Period;
};

export const ScaledTestTable = (props: ScaledTestTableProps): JSX.Element => {
    const { t } = useTranslation();
    const { period } = props;

    const verbals = period.verbalSubtests;
    const inverbals = period.inverbalSubtests;

    const verbalScaleSum = verbals.reduce((acc, current) => acc + (current.scalePoints ?? 0), 0);
    const inverbalScaleSum = inverbals.reduce((acc, current) => acc + (current.scalePoints ?? 0), 0);

    const verbal = Period.getTruePoints(verbals, verbalScaleSum);
    const inverbal = Period.getTruePoints(inverbals, inverbalScaleSum);
    const common = Number(verbal) + Number(inverbal);

    const iqResult = Period.getIQPoints({ verbal, inverbal, common });

    const verbalSumRow = (
        <TableRow key="verbal-result" className="scaled-table__marked">
            <TableCell colSpan={2} key="verbal-label" component="th" scope="row">
                {t('common.tabs.results.subtests.verbalSum')}
            </TableCell>
            <TableCell key="verbal-value" align="right">
                <div>{ verbalScaleSum}/{ verbal }</div>
            </TableCell>
        </TableRow>
    );

    const inverbalSumRow = (
        <TableRow key="inverbal-result"  className="scaled-table__marked">
            <TableCell colSpan={2} key="inverbal-label" component="th" scope="row">
                {t('common.tabs.results.subtests.inverbalSum')}
            </TableCell>
            <TableCell key="inverbal-value" align="right">
                <div>{ inverbalScaleSum}/{ inverbal }</div>
            </TableCell>
        </TableRow>
    );
   
    return (
        <React.Fragment>
            <TableContainer>
                <Table className="subtest-table" stickyHeader aria-label="sticky caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('subtest.table.header.name')}</TableCell>
                            <TableCell width="100px" align="right">{t('subtest.table.header.points')}</TableCell>
                            <TableCell width="100px" align="right">{t('subtest.table.header.scaledPoints')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            verbals.map(subtest => <ScaledTestItem subtest={subtest}></ScaledTestItem>)
                        }
                        { verbalSumRow }
                    </TableBody>
                    
                </Table>

                <Table className="subtest-table" stickyHeader aria-label="sticky caption table">
                    <TableBody>
                        {
                            inverbals.map(subtest => <ScaledTestItem subtest={subtest}></ScaledTestItem>)
                        }
                        { inverbalSumRow }
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
};

