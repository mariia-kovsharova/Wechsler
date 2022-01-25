import React from 'react';
import { Header } from './ui/Header';
import { StudentSection } from './ui/Student/Student';
import './main.scss';
import './i18n';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <main>
                <section className="student_container">
                    <StudentSection></StudentSection>
                </section>
                <section className="tabs_container"></section>
            </main>
        </React.Fragment>
    );
}

export default App;
