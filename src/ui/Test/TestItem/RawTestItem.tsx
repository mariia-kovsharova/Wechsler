import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material';
import WarningIcon from '@mui/icons-material/WarningRounded';
import { useTranslation } from 'react-i18next';
import { Subtest } from '../../../domain/entities/subtests';
import { formatClassNames } from '../../../lib/utils';
import { useUpdatePeriod } from '../../../services/useUpdatePeriod';

export interface IRawTestItemProps {
    subtest: Subtest;
}

const buildTranslateKey = (name: string): string => `subtest.${name}`;

const getTooltip = (title: string): JSX.Element => {
    return (
        <Tooltip title={title}>
            <IconButton>
                <WarningIcon />
            </IconButton>
        </Tooltip>
    );
};

export const RawTestItem = (props: IRawTestItemProps): JSX.Element => {
    const { t } = useTranslation();
    const updatePeriod = useUpdatePeriod();

    const { subtest } = props;

    const name = buildTranslateKey(subtest.name);
    const classNames = formatClassNames({
        'field': true,
        'field__invalid': subtest.isInvalid,
    });

    const handlePointChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value ?? null;
        updatePeriod(subtest.name, value);
    };

    // console.log(subtest);

    return (
        <TableRow key={subtest.name}>
            <TableCell key={`${name}-label`} component="th" scope="row">{t(name)}</TableCell>
            <TableCell key={name} align="right" className={classNames}>
                <input type="text" onChange={handlePointChange} value={subtest.rawPoints ?? ''} />
                { subtest.isInvalid
                    ? getTooltip(t('subtest.maxPointsOverflow', { value: subtest.maxAvaiableValue }))
                    : <div className="tooltip-container__empty"></div>
                }
            </TableCell>
        </TableRow>
    );
};