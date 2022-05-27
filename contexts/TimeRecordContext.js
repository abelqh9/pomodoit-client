import React, { useState, useEffect, useContext, useCallback } from 'react'
import { incrementRecord } from '../functions/incrementRecord';
import { useDBContext } from './DBContext';
import { getNewRecord } from '../functions/getNewRecord';

const TimeRecordContext = React.createContext();

export function TimeRecordProvider ({children}){

    const { userData, updateDoc } = useDBContext();

    const [timeRecord, setTimeRecord] = useState(getNewRecord());

    useEffect(() => {
        setTimeRecord(userData ? userData.timeRecord : getNewRecord());
    }, [userData])

    const increaseTimeRecord = useCallback((otherFieldsToChangeObj) => {
        setTimeRecord(state => {
            const newTimeRecord = incrementRecord(state, 1000);
            updateDoc({ timeRecord: newTimeRecord, ...otherFieldsToChangeObj })
            return newTimeRecord;
        })
    }, [updateDoc])

    const data = { timeRecord, increaseTimeRecord }

    return <TimeRecordContext.Provider value={data}>
        {children}
    </TimeRecordContext.Provider>
}

export function useTimeRecordContext() {
    return useContext(TimeRecordContext)
}