import { useTranslation } from 'react-i18next';
import { usePeriodStorage } from '../../repository/storageAdapter';

export const TabsSection = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();

    return (<div>{ period?.description ?? 'Периода нетути'  }</div>);

};