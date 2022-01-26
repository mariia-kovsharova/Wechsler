import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePeriodStorage } from '../../../repository/storageAdapter';

// const renderTableBlock = (
//     t: TFunction<'translation'>,
//     type: string,
//     tests: AbstractTest[],
//     invalidFields: TestError[],
//     onChange: RawTestsChangeHandler,
// ): JSX.Element => {
//     const pairs = tests.map<TestPair>((test: AbstractTest) => [test.getName(), test.getRawPoints()]);

//     return (
//         <TableContainer>
//             <Table className="subtests-table" stickyHeader aria-label="sticky caption table">
//                 <caption>{t(`table.header.${type}`)}</caption>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>{t('table.header.name')}</TableCell>
//                         <TableCell align="right">{t('table.header.points')}</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {pairs.map(([name, points]: TestPair) => {
//                         const handler = onChange(name);
//                         const isInvalid = !!invalidFields.find((error: TestError) => error.name === name);
//                         const classNames = {
//                             points: true,
//                             'points-invalid': isInvalid,
//                         };
//                         return (
//                             <TableRow key={name}>
//                                 <TableCell component="th" scope="row">
//                                     {t(`test.${name}`)}
//                                 </TableCell>
//                                 <TableCell align="right" className={formatClassNames(classNames)}>
//                                     <input onChange={(e) => handler(e)} value={`${points ?? ''}`} />
//                                 </TableCell>
//                             </TableRow>
//                         );
//                     })}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

export const RawTestsTable = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();

    // const orderedVerbalTests = [...period.verbalTests].sort(testComparator);
    // const orderedInverbalTests = [...period.inverbalTests].sort(testComparator);

    // const verbalTestsTable = renderTableBlock(t, 'verbal', orderedVerbalTests, invalidFields, onChange);
    // const inverbalTestsTable = renderTableBlock(t, 'inverbal', orderedInverbalTests, invalidFields, onChange);

    return (
        <React.Fragment>
            { period ? t(period.description) : 'А нетути'}
        </React.Fragment>
    );
};

