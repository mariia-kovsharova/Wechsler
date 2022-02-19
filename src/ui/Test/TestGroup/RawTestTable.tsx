import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Period } from '../../../domain/entities/period';
import { RawTestItem } from '../index';

type RawTestTableProps = {
    period: Period;
};

export const RawTestTable = (props: RawTestTableProps): JSX.Element => {
    const { t } = useTranslation();
    const { period } = props;

    const verbal = period.verbalSubtests;
    const inverbal = period.inverbalSubtests;

    return (
        <React.Fragment>
            <div className="table-container">
                <TableContainer className="table-container__table">
                    <div className="table-container__table-header">
                        <h3>{t('subtest.table.header.verbal')}</h3>
                    </div>
                    <Table className="table-container__table-content" aria-label="Verbal subtests table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t('subtest.table.header.name')}</TableCell>
                                <TableCell width="20px" align="right"></TableCell>
                                <TableCell width="150px" align="right">{t('subtest.table.header.points')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                verbal.map(subtest => <RawTestItem subtest={subtest}></RawTestItem>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer className="table-container__table">
                    <div className="table-container__table-header">
                        <h3>{t('subtest.table.header.inverbal')}</h3>
                    </div>
                    <Table className="table-container__table-content" stickyHeader aria-label="Inverbal subtest table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{t('subtest.table.header.name')}</TableCell>
                                <TableCell width="20px" align="right"></TableCell>
                                <TableCell width="150px" align="right">{t('subtest.table.header.points')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                inverbal.map(subtest => <RawTestItem subtest={subtest}></RawTestItem>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    );
};

