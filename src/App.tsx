import './i18n';
import { Container } from '@mui/material';
import { HeaderDetails } from './ui/HeaderDetails';
import { StudentSection } from './ui/Student';
import { TabsSection } from './ui/Tabs';
import { HeaderButtons } from './ui/HeaderButtons';

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
