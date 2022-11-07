import { Container } from '@mui/material';
import './i18n';
import { HeaderButtons } from './ui/components/HeaderButtons';
import { HeaderDetails } from './ui/components/HeaderDetails';
import { StudentSection } from './ui/components/Student';
import { TabsSection } from './ui/components/Tabs';

function App(): JSX.Element {

    return (
        <Container maxWidth="md">
            <header>
                <HeaderButtons/>
                <HeaderDetails/>
            </header>
            <main>
                <StudentSection></StudentSection>
                <TabsSection></TabsSection>
            </main>
        </Container>
    );
}

export default App;
