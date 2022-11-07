import { Student } from '@entities';
import { getCurrentDate } from '@utils';
import React, { useContext, useState } from 'react';

const StoreContext = React.createContext<unknown>({});

export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
    const [student, setStudent] = useState(new Student());
    const [date, setDate] = useState(getCurrentDate());
    const [period, setPeriod] = useState(null);
    const [conclusion, setConclusion] = useState('');

    const value = {
        student,
        date,
        period,
        conclusion,
        updateStudent: setStudent,
        updateDate: setDate,
        updatePeriod: setPeriod,
        updateConclusion: setConclusion,
    };

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};