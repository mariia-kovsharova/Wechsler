import { Subtest } from '@entities';
import { TableCell, TableRow } from '@mui/material';
import { formatClassNames } from '@utils';
import { useTranslation } from 'react-i18next';

export interface IScaledTestItemProps {
    subtest: Subtest;
}

const buildTranslateKey = (name: string): string => `subtest.${name}`;

export const ScaledTestItem = (props: IScaledTestItemProps): JSX.Element => {
    const { t } = useTranslation();
    const { subtest } = props;

    const name = buildTranslateKey(subtest.name);
    
    const classNames = formatClassNames({
        'field': true,
        'field-cell': true,
    });

    return (
        <TableRow key={subtest.name}>
            <TableCell key={`${name}-label`} component="th" scope="row" className={classNames}>{t(name)}</TableCell>
            <TableCell width="20%" key={`${name}-raw`} align="right" className={classNames}>
                <div>{ subtest.rawPoints }</div>
            </TableCell>
            <TableCell width="20%" key={`${name}-scale`} align="right" className={classNames}>
                <div>{ subtest.scalePoints }</div>
            </TableCell>
        </TableRow>
    );
};