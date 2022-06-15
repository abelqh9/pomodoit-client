import React, { useContext, useState, useEffect } from "react"
import { useDBContext } from "./DBContext";
import { useTimeRecordContext } from "./TimeRecordContext";
import { useScoreRecordContext } from "./ScoreRecordContext";
import missionCompleteUrl from '../public/metal-slug-mission-complete.mp3';
import coinSoundUrl from '../public/snkneo-geo-insert-coin-soundx3.mp3';

const PomodoroContext = React.createContext();

export function PomodoroContextProvider({ children }) {
    
    const { userData, updateDoc } = useDBContext();
    const { increaseTimeRecord } = useTimeRecordContext();
    const { increaseScoreRecord } = useScoreRecordContext();

    const [pomodoroState, setPomodoroState] = useState(null);
    const [pomodoroTimes, setPomodoroTimes] = useState({ work: 0, rest: 0 });
    const [pomodoroTimeLeft, setPomodoroTimeLeft] = useState(0);
    const [pomodoroPreStopState, setPomodoroPreStopState] = useState("");
    const [nextPomodoroState, setNextPomodoroState] = useState("")
    const [myWorker, setMyWorker] = useState(null);
    const [missionCompleteAudio, setMissionCompleteAudio] = useState(null)
    const [coinAudio, setCoinAudio] = useState(null)

    useEffect(() => setMissionCompleteAudio(new Audio(missionCompleteUrl)), [])
    useEffect(() => setCoinAudio(new Audio(coinSoundUrl)), [])

    // SET THE WEB WORKER
    useEffect(() => {
        const newWorker = new Worker(new URL('../workers/pomodoroContext.worker.js', import.meta.url));

        setMyWorker(newWorker);

        return () => { newWorker.terminate(); }
    }, [])

    // SET THE ONMESSAGE OF THE WEB WORKER
    useEffect(() => {
        if (myWorker) {
            let counterForPushData = 10;
            myWorker.onmessage = function (e) {
                if (e.data >= 0) {
                    setPomodoroTimeLeft(e.data);
                    // FOR REDUCE THE CALLS TO THE SERVER
                    if (!counterForPushData) {
                        if (pomodoroState === "work") {
                            increaseTimeRecord({ pomodoroTimeLeft: e.data });
                        }else{
                            updateDoc({ pomodoroTimeLeft: e.data });
                        }
                        counterForPushData = 10;
                    }else{ counterForPushData -= 1; }
                }
            };
        }
    }, [myWorker, pomodoroState, increaseTimeRecord, updateDoc])

    // FOR CLEAR THE MYWORKER INTERVAL
    useEffect(() => {
        if (myWorker) myWorker.postMessage([]);
    }, [myWorker, userData])
    
    // IF EXIST THE USER IS LOGGED
    useEffect(() => {
        if ( userData ) {
            const { 
                pomodoroState: pomodoroStateFromDB,
                pomodoroTimes: pomodoroTimesFromDB,
                pomodoroTimeLeft: pomodoroTimeLeftFromDB,
                pomodoroPreStopState: pomodoroPreStopStateFromDB,
                nextPomodoroState: nextPomodoroStateFromDB 
            } = userData;

            if ( ["work", "rest"].includes(pomodoroStateFromDB) ) {
                setPomodoroPreStopState(pomodoroStateFromDB);
                setPomodoroState("stop");
            }else if ( pomodoroStateFromDB === "readyFor" ) {
                setNextPomodoroState(nextPomodoroStateFromDB);
                setPomodoroState("readyFor");
            }else if ( pomodoroStateFromDB === "stop" ) {
                setPomodoroPreStopState(pomodoroPreStopStateFromDB);
                setPomodoroState("stop");
            }else{
                setPomodoroState(null);
                setNextPomodoroState("");
                setPomodoroPreStopState("");
            }

            setPomodoroTimeLeft(pomodoroTimeLeftFromDB);
            setPomodoroTimes(pomodoroTimesFromDB);
        }else{
            setPomodoroState(null);
            setNextPomodoroState("");
            setPomodoroPreStopState("");
            setPomodoroTimes({ work: 0, rest: 0 });
            setPomodoroTimeLeft(0);
        }
    }, [userData])
    
    // FOR THE DOCUMENT TITLE
    useEffect(() => {
        let newDocumentTitle = "";

        if ( pomodoroState ) {
            const emojis = { work: "🔴", rest: "🟢", readyFor: "🟡", stop: "⚪"},
                leftHours = Math.floor(pomodoroTimeLeft/(1000*60)),
                leftMinutes = Math.floor((pomodoroTimeLeft%(1000*60))/1000),
                formatTime = `
                    ${leftHours > 9 ? leftHours : ("0" + leftHours)}
                    : ${leftMinutes > 9 ? leftMinutes : ("0" + leftMinutes)}
                `;
            
            newDocumentTitle = `${formatTime} ${emojis[pomodoroState]} | PomoDoIt`;
        }else {
            newDocumentTitle = `PomoDoIt | A productivity website`;
        }

        document.title = newDocumentTitle;
    }, [pomodoroState, pomodoroTimeLeft])

    // WHEN POMODORO TIME LEFT IS OVER
    useEffect(() => {
        if ( pomodoroTimeLeft === 0 && ["work", "rest"].includes(pomodoroState) ) {
            setTimeout(()=>{
                let soundToPlay, nextPomodoroState, nextPomodoroTimeLeft; 
    
                const { rest, work } = pomodoroTimes;

                if (pomodoroState === "work" ) {
                    soundToPlay = missionCompleteAudio;
                    nextPomodoroState = 'rest';
                    nextPomodoroTimeLeft = rest
                }else{
                    soundToPlay = coinAudio;
                    nextPomodoroState = 'work';
                    nextPomodoroTimeLeft = work
                }

                soundToPlay.volume = 1;
                soundToPlay.currentTime = 0;
                soundToPlay.play();
                    
                if ( nextPomodoroState === "rest" ) increaseScoreRecord();
    
                updateDoc({
                    pomodoroTimeLeft: nextPomodoroTimeLeft,
                    nextPomodoroState: nextPomodoroState,
                    pomodoroState: "readyFor"
                })
    
                setNextPomodoroState(nextPomodoroState);
                setPomodoroState("readyFor");
                setPomodoroTimeLeft(nextPomodoroTimeLeft);
    
                myWorker.postMessage(["readyFor"]);
            }, 500)
        }
    }, [pomodoroTimeLeft, pomodoroState, pomodoroTimes, increaseScoreRecord, updateDoc, myWorker])
 
    // POMODORO FUNCTIONS
    function startPomodoro(workMINS, restMINS) {
        const newPomodoroTimes = {
            work: workMINS * 60000,
            rest: restMINS * 60000 
        };
     
        updateDoc({
            pomodoroTimes: newPomodoroTimes,
            pomodoroTimeLeft: newPomodoroTimes.work,
            pomodoroState: "work"
        });

        setPomodoroTimes(newPomodoroTimes);
        setPomodoroTimeLeft(newPomodoroTimes.work);
        setPomodoroState("work");
     
        myWorker.postMessage(["work", newPomodoroTimes.work]);
    }

    function stopPomodoro() {
        missionCompleteAudio.pause();
        
        updateDoc({
            pomodoroPreStopState: pomodoroState,
            pomodoroTimeLeft: pomodoroTimeLeft,
            pomodoroState: "stop"
        });

        setPomodoroPreStopState(pomodoroState);
        setPomodoroState("stop");
 
        myWorker.postMessage(["stop"]);
    }

    function resumePomodoro() {
        missionCompleteAudio.pause();
 
        updateDoc({
            pomodoroState: pomodoroPreStopState,
            pomodoroPreStopState: ""
        });

        setPomodoroState(pomodoroPreStopState);
        setPomodoroPreStopState("");
 
        myWorker.postMessage([pomodoroPreStopState, pomodoroTimeLeft]);
    }

    function restartPomodoro() {
        myWorker.postMessage([]);

        missionCompleteAudio.pause();
    
        updateDoc({
            pomodoroTimeLeft: 0,
            pomodoroTimes: { work: 0, rest: 0 },
            pomodoroPreStopState: "",
            pomodoroState: "",
            nextPomodoroState: ""
        });

        setPomodoroTimeLeft(0);
        setPomodoroTimes({ work: 0, rest: 0 });
        setPomodoroPreStopState("");
        setPomodoroState("");
        setNextPomodoroState("");
    }

    function goToTheNextStatus() {
        coinAudio.pause();
        missionCompleteAudio.pause();
 
        updateDoc({
            pomodoroState: nextPomodoroState,
            nextPomodoroState: ""
        });

        setPomodoroState(nextPomodoroState);
        setNextPomodoroState("");
 
        myWorker.postMessage([nextPomodoroState, pomodoroTimes[nextPomodoroState]]);
    }

    function skipRest() {
        missionCompleteAudio.pause();
 
        updateDoc({
            pomodoroState: 'work',
            nextPomodoroState: ''
        });

        setPomodoroState('work');
        setNextPomodoroState('');

        myWorker.postMessage(['work', pomodoroTimes['work']]);

        setPomodoroTimeLeft(pomodoroTimes.work);
    }
    
    let value = {
       // DATA
       pomodoroState, pomodoroTimes, pomodoroTimeLeft,
       nextPomodoroState,
       // FUNCTIONS
       startPomodoro, stopPomodoro, resumePomodoro,
       restartPomodoro, goToTheNextStatus, skipRest
    }
    
    return <PomodoroContext.Provider value={value}>
        {children}
    </PomodoroContext.Provider>
}

export function usePomodoroContext() {
   return useContext(PomodoroContext)
}