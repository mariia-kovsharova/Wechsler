import { Container } from '@mui/material';
import './i18n';
import { HeaderButtons } from './ui/components/HeaderButtons';
import { HeaderDetails } from './ui/components/HeaderDetails';
import { StudentSection } from './ui/components/Student';
import { TabsSection } from './ui/components/Tabs';
import { LocaleProvider, LocaleToggle } from './ui/components/Locale';

function App(): JSX.Element {
    return (
        <LocaleProvider>
            <Container maxWidth="md">
                <header>
                    <LocaleToggle />
                    <HeaderButtons />
                    <HeaderDetails />
                </header>
                <main>
                    <StudentSection></StudentSection>
                    <TabsSection></TabsSection>
                </main>
            </Container>
        </LocaleProvider>
    );
}

export default App;
