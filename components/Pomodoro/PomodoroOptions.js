import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { usePomodoroContext } from '../../contexts/PomodoroContext';
import PomodoroButtons from './PomodoroButtons';
import PomodoroRanges from './PomodoroRanges';

const StyledPomodoroOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default function PomodoroOptions() {

    const { pomodoroTimes } = usePomodoroContext();

    const [workTime, setWorkTime] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [workRangeAlert, setWorkRangeAlert] = useState(false);
    const [restRangeAlert, setRestRangeAlert] = useState(false);

    useEffect(() => {
        if (pomodoroTimes) {
            setWorkTime(pomodoroTimes.work/(1000*60));
            setRestTime(pomodoroTimes.rest/(1000*60));
        }
    }, [pomodoroTimes])

    useEffect(() => {
        if (workRangeAlert) {
            setTimeout(() => {
                setWorkRangeAlert(false)
            }, 1000);
        }
    }, [workRangeAlert])

    useEffect(() => {
        if (restRangeAlert) {
            setTimeout(() => {
                setRestRangeAlert(false)
            }, 1000);
        }
    }, [restRangeAlert])

    return(
        <StyledPomodoroOptions>
            <PomodoroRanges 
                workTime={workTime}
                restTime={restTime}
                workRangeAlert={workRangeAlert}
                restRangeAlert={restRangeAlert}
                setWorkTime={setWorkTime}
                setRestTime={setRestTime}/>

            <PomodoroButtons
                workTime={workTime}
                restTime={restTime}
                setWorkRangeAlert={setWorkRangeAlert}
                setRestRangeAlert={setRestRangeAlert}/>
        </StyledPomodoroOptions>
    )
}

