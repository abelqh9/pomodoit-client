import React, { useContext, useState, useEffect, useCallback } from "react"
import useSWR from "swr";
import { getNewUserDataForANewDay } from "../functions/getNewUserDataForANewDay";
import { itsADifferentDay } from "../helpers/itsADifferentDay"

const DBContext = React.createContext()

export function DBContextProvider({ children }) {

    const { data } = useSWR(process.env.NEXT_PUBLIC_API_URL + '/api/user')

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (data) {
            // console.log('sí se consiguieron datos del usuario', data);

            const isANewDay = itsADifferentDay(data.lastConnection);
            
            fetch(process.env.NEXT_PUBLIC_API_URL + '/api/user/update', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(isANewDay
                    ? getNewUserDataForANewDay(data)
                    : { lastConnection: Date.now() }) 
            })

            setUserData(isANewDay
                ? {...data, ...getNewUserDataForANewDay(data)}
                : data);
        }
    }, [data])
    
    // DB MAIN UPDATE FUNCTION  
    const updateDoc = useCallback(updateObj => {
        if (!userData) return;
        fetch(process.env.NEXT_PUBLIC_API_URL + '/api/user/update', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateObj)
        })
    },[userData])

    const value = {
        userData, setUserData, updateDoc
    }

    return (
        <DBContext.Provider value={value}>
            { children }
        </DBContext.Provider>
    )
}

export function useDBContext() {
    return useContext(DBContext)
}