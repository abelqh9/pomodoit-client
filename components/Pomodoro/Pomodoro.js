import React from 'react';
import styled from 'styled-components';
import PomodoroOptions from './PomodoroOptions';
import PomodoroDynamicTitle from './PomodoroDynamicTitle';
import PomodoroTimeVisualizer from './PomodoroTimeVisualizer';
import { desktop } from '../../helpers/querysCss';

const StyledPomodoro = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    ${desktop()}{
        flex-grow: 1;
    }
`;

export default function Pomodoro () {
    return (
        <StyledPomodoro>
            <PomodoroDynamicTitle />
            <PomodoroTimeVisualizer />
            <PomodoroOptions />
        </StyledPomodoro>
    )
}