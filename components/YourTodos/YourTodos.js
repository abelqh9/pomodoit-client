import React from 'react'
import styled from 'styled-components';
import { usePomodoroContext } from '../../contexts/PomodoroContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';
import YourTodosChart from './YourTodosChart';

const StyledYourTodos = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const H2 = styled.h2`
    font-size: 1.35rem;
    text-shadow: 0px 0px ${p => (!p.pomodoroState || p.pomodoroState === 'stop') 
        ? '2px'
        : '5px' } ${p => p.pomodoroState==='work' || p.nextPomodoroState === 'work' 
        ? 'var(--red)' 
        : p.pomodoroState==='rest' || p.nextPomodoroState === 'rest'
            ? 'var(--green)' 
            : 'white'
    };
    ${desktopAndIpadPortrait()}{
        font-size: 1.8rem;
    }
`;

function YourTodos() {

    const { appTexts } = UseTextsContext();
    const { pomodoroState, nextPomodoroState } = usePomodoroContext()

    const componentTexts = appTexts.todos;

    return (
        <StyledYourTodos>
            <H2 pomodoroState={pomodoroState} nextPomodoroState={nextPomodoroState}>{ componentTexts.yourTodos }</H2>
            <YourTodosChart />
        </StyledYourTodos>
    )
}

export default YourTodos