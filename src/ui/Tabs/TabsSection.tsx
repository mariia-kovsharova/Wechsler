import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RawTestTable } from '../Test';
import { ResultSection } from '.';
import { usePeriodStorage } from '../../repository/storageAdapter';
import { PrintTemplate } from '../PrintTemplate';

enum TabId {
    RawTest = 'raw-test',
    Result = 'result',
}

type TabUiState = {
    selectedTab: TabId;
};

const INITIAL_STATE: TabUiState = {
    selectedTab: TabId.RawTest,
};

export const TabsSection = (): JSX.Element => {
    const { t } = useTranslation();
    const { period } = usePeriodStorage();

    const [state, setState] = useState<TabUiState>(INITIAL_STATE);

    const handleTabChange = (_event: React.ChangeEvent<unknown>, selectedTab: TabId): void => {
        setState({ selectedTab });
    };

    if (!period) {
        return <div className="tabs-container__period-title">{ t('common.warning') }</div>;
    }

    return (
        <React.Fragment>
            <TabContext value={state.selectedTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} aria-label="tabs">
                        <Tab label={t('common.tabs.points.title')} value={TabId.RawTest} />
                        <Tab label={t('common.tabs.results.title')} 
                            value={TabId.Result} 
                            disabled={!period.isTestCountValid()}/>
                    </TabList>
                </Box>
                <TabPanel id="points" value={TabId.RawTest} className="tabs-container__content">
                    <div className="tabs-container__period-title">
                        <span>{ t('student.period') + ': ' }</span>
                        <span>{ t(period.description) }</span>
                    </div>
                    <RawTestTable period={period}></RawTestTable>
                </TabPanel>
                <PrintTemplate alwaysVisible={true}>
                    <TabPanel id="results" value={TabId.Result} className="tabs-container__content" >
                        <ResultSection></ResultSection>              
                    </TabPanel>
                </PrintTemplate>
            </TabContext>
        </React.Fragment>
    );
};
