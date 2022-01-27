import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePeriodStorage } from '../../../repository/storageAdapter';
import { RawTestItem } from '../index';

export const RawTestTable = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();

    if (!period) {
        return <div className="tabs-container__period-title">{ t('common.period.empty') }</div>;
    }

    const verbal = period.verbalSubtests;
    const inverbal = period.inverbalSubtests;

    return (
        <React.Fragment>
            <div className="tabs-container__period-title">{ t(period.description) }</div>
            <TableContainer>
                <Table className="subtest-table" stickyHeader aria-label="sticky caption table">
                    <caption>{t('subtest.table.header.verbal')}</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t('subtest.table.header.name')}</TableCell>
                            <TableCell align="right">{t('subtest.table.header.points')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            verbal.map(subtest => <RawTestItem subtest={subtest}></RawTestItem>)
                        }
                    </TableBody>
                </Table>

                <Table className="subtest-table" stickyHeader aria-label="sticky caption table">
                    <caption>{t('subtest.table.header.inverbal')}</caption>
                    <TableBody>
                        {
                            inverbal.map(subtest => <RawTestItem subtest={subtest}></RawTestItem>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
};

