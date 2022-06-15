import React from 'react'
import styled from 'styled-components';
import PomodoroRange from './PomodoroRange'
import workImage from '../../public/fitness_center_white_24dp.svg'
import restImage from '../../public/self_improvement_white_24dp.svg'
import { UseTextsContext } from '../../contexts/TextsContext';
import { desktop } from '../../helpers/querysCss';

const StyledPomodoroRanges = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    ${desktop()}{
        margin-top: 1rem;
        gap: 2.5rem;
    }
`;

function PomodoroRanges(props) {

    const { appTexts } = UseTextsContext();

    const { workTime, restTime, setWorkTime, setRestTime, workRangeAlert, restRangeAlert } = props;

    const componentTexts = appTexts.pomodoro;

    return (
        <StyledPomodoroRanges>
            <PomodoroRange
                title={componentTexts.workTime}
                titleImg={workImage}
                min={0}
                max={60}
                step={5}
                handler={e => setWorkTime(Number(e.target.value))}
                value={workTime}
                isMoving={workRangeAlert}/>

            <PomodoroRange
                title={componentTexts.restTime}
                titleImg={restImage}
                min={0}
                max={20}
                step={5}
                handler={e => setRestTime(Number(e.target.value))}
                value={restTime}
                isMoving={restRangeAlert}/>
        </StyledPomodoroRanges>
    )
}

export default PomodoroRanges