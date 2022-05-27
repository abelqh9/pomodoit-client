import React, { useState, useEffect, useContext, useCallback } from 'react'
import { incrementRecord } from '../functions/incrementRecord';
import { useDBContext } from './DBContext';
import { getNewRecord } from '../functions/getNewRecord';

const DistractionsRecordContext = React.createContext();

export function DistractionsRecordContextProvider ({children}){

    const { userData, updateDoc } = useDBContext();

    const [distractionsRecord, setDistractionsRecord] = useState(getNewRecord());

    useEffect(() => {
        setDistractionsRecord(userData ? userData.distractionsRecord : getNewRecord());
    }, [userData])

    const increaseDistractionsRecord = useCallback(()=>{
        setDistractionsRecord(state => {
            const newDistractionsRecord = incrementRecord(state, 1);
            updateDoc({ distractionsRecord : newDistractionsRecord })
            return newDistractionsRecord;
        })
    }, [updateDoc])

    const data = { distractionsRecord, increaseDistractionsRecord }
    
    return <DistractionsRecordContext.Provider value={data}>
        {children}
    </DistractionsRecordContext.Provider>
}

export function useDistractionsRecordContext() {
    return useContext(DistractionsRecordContext)
}