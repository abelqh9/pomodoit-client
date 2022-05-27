import React, { useState, useEffect, useContext, useCallback } from 'react'
import { getDate } from '../helpers/getDate';
import { incrementRecord } from '../functions/incrementRecord';
import { useDBContext } from './DBContext';
import { getNewRecord } from '../functions/getNewRecord';

let ScoreRecordContext = React.createContext();

export function ScoreRecordProvider ({children}){

    const { userData, updateDoc } = useDBContext();

    const [scoreRecord, setScoreRecord] = useState(getNewRecord());

    useEffect(() => {
        setScoreRecord(userData ? userData.scoreRecord : getNewRecord());
    }, [userData])

    const increaseScoreRecord = useCallback(()=>{
        setScoreRecord(state => {
            let newScoreRecord = incrementRecord(state, 1);
            updateDoc({ scoreRecord : newScoreRecord });
            return newScoreRecord;
        })
    }, [updateDoc])

    const data = { scoreRecord, increaseScoreRecord };
    
    return (<ScoreRecordContext.Provider value={data}>
        {children}
    </ScoreRecordContext.Provider>)
}

export function useScoreRecordContext() {
    return useContext(ScoreRecordContext);
}