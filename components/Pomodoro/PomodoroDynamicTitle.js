import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import { usePomodoroContext } from '../../contexts/PomodoroContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledPomodoroDynamicTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NormalH2 = styled.h2`
    font-size: 1.35rem;
    text-shadow: 0px 0px 2px white;
    ${desktopAndIpadPortrait()}{
        font-size: 1.8rem;
    }
`;

const heartEffect = keyframes`
    0%{transform: scale(1);}
    5%{transform: scale(1);}
    25%{transform: scale(1.05);}
    50%{transform: scale(1.1);}
    75%{transform: scale(1.05);}
    100%{transform: scale(1);}
`;

const ColoredH2 = styled.h2`
    font-size: 3rem;
    margin: 0 1rem;
    ${p => {
        if ((p.pomodoroState || p.nextPomodoroState) === "work") {
            return css`color:var(--red); text-shadow: 0px 0px 3px var(--red);`
        };
        if ((p.pomodoroState || p.nextPomodoroState) === "rest") {
            return css`color:var(--green); text-shadow: 0px 0px 3px var(--green);`
        };
        if ((p.pomodoroState || p.nextPomodoroState) === "stop") {
            return css`color:white; text-shadow: 0px 0px 3px white;`
        };
    }}
    animation: ${heartEffect} 1.5s linear infinite;
    ${desktopAndIpadPortrait()}{
        font-size: 3.5rem;
    }
`;

export default function PomodoroDynamicTitle () {

    const { pomodoroState, nextPomodoroState } = usePomodoroContext()

    const { appTexts } = UseTextsContext()
    
    const componentTexts = appTexts.pomodoro;

    return (
        <StyledPomodoroDynamicTitle>
            {
                pomodoroState
                    ? pomodoroState === "readyFor"
                        ?<>
                            <NormalH2>{ componentTexts[pomodoroState] }</NormalH2>
                            <ColoredH2 nextPomodoroState={nextPomodoroState}>{ componentTexts[nextPomodoroState] }</ColoredH2>
                            <NormalH2>{ '?' }</NormalH2>    
                        </>
                        :<ColoredH2 pomodoroState={pomodoroState}>{ componentTexts[pomodoroState] }</ColoredH2>
                    :<NormalH2>{ componentTexts.noState }</NormalH2>
            }
        </StyledPomodoroDynamicTitle>
    )
}
