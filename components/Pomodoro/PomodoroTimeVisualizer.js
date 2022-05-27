import React from 'react';
import styled, { css } from 'styled-components';
import { usePomodoroContext } from '../../contexts/PomodoroContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { useTimeRecordContext } from '../../contexts/TimeRecordContext';
import { getTodayDataOfARecord } from '../../functions/getTodayDataOfARecord';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledPomodoroTimeVisualizer = styled.h3`
    width: 100%;
    padding: 0.5rem 0;
    font-size: 3.85rem;
    background-color: var(--secondary-background-color);
    border-radius: var(--borderRadius);
    position: relative;
    ${p => (p.pomodoroState==='work' || p.nextPomodoroState === 'work') 
        ? css`text-shadow: 0px 0px 5px var(--red);`
        : (p.pomodoroState==='rest' || p.nextPomodoroState === 'rest') && css`text-shadow: 0px 0px 5px var(--red);`
    }
    ${desktopAndIpadPortrait()}{
        width: 90%;
        padding: 1rem 0;
        font-size: 4.25rem;
    }
`;

const P = styled.p`
    position: absolute;
    font-size: 0.75rem;
    left: 5px;
    bottom: 5px;
    opacity: 0.75;
    color: white;
    text-shadow: none;
    span:nth-child(1){
        display: none;
    }
    span:nth-child(2){
        color: var(--yellow);
    }
    &:hover{
        opacity: 1;
    }
    ${desktopAndIpadPortrait()}{
        span:nth-child(1){
            display: initial;
        }       
    }
`;

export default function PomodoroTimeVisualizer() {

    const { appTexts } = UseTextsContext();
    const { pomodoroTimeLeft, pomodoroState, nextPomodoroState } = usePomodoroContext()
    const { timeRecord } = useTimeRecordContext();

    const componentTexts = appTexts.todos;
    const todayHours = getTodayDataOfARecord(timeRecord)/(1000*60*60);

    return(
        <StyledPomodoroTimeVisualizer pomodoroState={pomodoroState} nextPomodoroState={nextPomodoroState}>
            {Math.floor(pomodoroTimeLeft/(1000*60))} -- {Math.floor((pomodoroTimeLeft%(1000*60))/1000)}
            <P> <span>{componentTexts.todaysHours}</span> <span>{todayHours.toFixed(3)}</span></P>
        </StyledPomodoroTimeVisualizer>
    )
}