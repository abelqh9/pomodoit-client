import React, { useContext, useEffect, useState } from "react";
import { getDate } from "../helpers/getDate";
import { useDBContext } from "./DBContext";
import { useTimeRecordContext } from "./TimeRecordContext";

let BestDayContext = React.createContext();

export function BestDayProvider({children}) {

    const { userData, updateDoc } = useDBContext();
    const { timeRecord } = useTimeRecordContext();
    
    const [bestDay, setBestDay] = useState({date:"", miliSeconds:0})

    useEffect(() => {
        setBestDay(userData ? userData.bestDay: {date:"", miliSeconds:0})
    }, [userData])

    useEffect(() => {
        if (userData){
            const { year, month, day } = getDate();
            if (timeRecord[year][month][day] > bestDay.miliSeconds) {
                let newBestDay = {
                    date: day + "/" + (month+1) + "/" + year,
                    miliSeconds: timeRecord[year][month][day]
                };
                updateDoc({ bestDay: newBestDay });
                setBestDay(newBestDay)
            }
        }
    }, [userData, timeRecord, updateDoc, bestDay])

    const data = {
        bestDay
    };

    return <BestDayContext.Provider value={data}>
        {children}
    </BestDayContext.Provider>
}

export function UseBestDayContext(){
    return useContext(BestDayContext);
}