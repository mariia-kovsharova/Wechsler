import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RawTestTable } from '../Test';

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
    const [state, setState] = useState<TabUiState>(INITIAL_STATE);

    const handleTabChange = (_event: React.ChangeEvent<unknown>, selectedTab: TabId): void => {
        setState({ selectedTab });
    };

    return (
        <React.Fragment>
            <TabContext value={state.selectedTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleTabChange} aria-label="tabs">
                        <Tab label={t('tabs.points.title')} value={TabId.RawTest} />
                        <Tab label={t('tabs.results.title')} value={TabId.Result} />
                    </TabList>
                </Box>
                <TabPanel id="points" value={TabId.RawTest}>
                    <RawTestTable></RawTestTable>
                </TabPanel>
                <TabPanel id="results" value={TabId.Result}>Item Two</TabPanel>
            </TabContext>
        </React.Fragment>
    );
};
