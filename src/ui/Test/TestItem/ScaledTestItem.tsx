import { TableCell, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Subtest } from '../../../domain/entities/subtests';
import { formatClassNames } from '../../../lib/utils';

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
    });

    return (
        <TableRow key={subtest.name}>
            <TableCell key={`${name}-label`} component="th" scope="row">{t(name)}</TableCell>
            <TableCell width="100px" key={`${name}-raw`} align="right" className={classNames}>
                <div>{ subtest.rawPoints }</div>
            </TableCell>
            <TableCell width="100px" key={`${name}-scale`} align="right" className={classNames}>
                <div>{ subtest.scalePoints }</div>
            </TableCell>
        </TableRow>
    );
};