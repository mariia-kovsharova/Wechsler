import './i18n';
import React from 'react';
import { Container } from '@mui/material';
import { Header } from './ui/Header';
import { StudentSection } from './ui/Student';
import { TabsSection } from './ui/Tabs';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <main>
                <Container className="student_container">
                    <StudentSection></StudentSection>
                </Container>
                <Container className="tabs_container">
                    <TabsSection></TabsSection>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default App;
