import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { usePomodoroContext } from '../../contexts/PomodoroContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { desktop } from '../../helpers/querysCss';
import okSoundUrl from '../../public/ok-metal-slug-sound.mp3';
import clickSoundUrl from '../../public/minecraft_click.mp3';
import PomodoroButton from './PomodoroButton';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    ${desktop()}{
        margin-top: 1rem;
        gap: 2rem;
    }
`;

function PomodoroButtons(props) {

    const { appTexts } = UseTextsContext();

    const { pomodoroState, nextPomodoroState, skipRest,
        startPomodoro, restartPomodoro, stopPomodoro,
        resumePomodoro, goToTheNextStatus } = usePomodoroContext();

    const { workTime, restTime, setWorkRangeAlert, setRestRangeAlert } = props;

    const [clickAudio, setClickAudio] = useState(null)
    const [okAudio, setOkAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])
    useEffect(() => setOkAudio(new Audio(okSoundUrl)), [])

    const componentTexts = appTexts.pomodoro;

    function startButtonHandler(){
        if ( !workTime ) setWorkRangeAlert(true);
        if ( !restTime ) setRestRangeAlert(true);

        if ( workTime, restTime ) startPomodoro(workTime, restTime);
    }

    return (
        <StyledDiv>
            {!pomodoroState && <PomodoroButton clickHandler={startButtonHandler} text={componentTexts.startButton} audio={( workTime && restTime ) ? okAudio : null}/>}

            {(pomodoroState === "work" || pomodoroState === "rest")
            && (<> 
                <PomodoroButton clickHandler={stopPomodoro} text={componentTexts.stopButton} audio={clickAudio}/>
                <PomodoroButton clickHandler={restartPomodoro} text={componentTexts.restartButton} audio={clickAudio}/>
            </>)}

            {pomodoroState === "rest"
            &&<PomodoroButton clickHandler={skipRest} text={"Skip"} audio={okAudio}/>}

            {pomodoroState === "stop"
            &&(<>
                <PomodoroButton clickHandler={resumePomodoro} text={componentTexts.resumeButton} audio={clickAudio}/>
                <PomodoroButton clickHandler={restartPomodoro} text={componentTexts.restartButton} audio={clickAudio}/>
            </>)}

            {pomodoroState === "readyFor"
            &&<PomodoroButton clickHandler={goToTheNextStatus} text="GOOOO" audio={nextPomodoroState === "work" ? okAudio : clickAudio}/>}

            {nextPomodoroState === "rest"
            &&<PomodoroButton clickHandler={skipRest} text={"Skip"} audio={okAudio}/>}
        </StyledDiv>
    )
}

export default PomodoroButtons