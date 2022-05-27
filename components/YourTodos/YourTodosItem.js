import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { useTodosContext } from '../../contexts/TodosContext';
import { convert_MsToHrsMinsSecsFormat } from '../../helpers/convert_MsToHrsMinsSecsFormat';
import archive from '../../public/archive_black_24dp.svg';
import check from '../../public/done_black_24dp.svg';
import { ipadPortrait } from '../../helpers/querysCss';
import clickSoundUrl from '../../public/minecraft_click.mp3';

const StyledTodoElement = styled.div`
    width: 99%;
    text-align: center;
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    font-size: 0.80rem;
    border-bottom: var(--yellow) 1px solid;
    ${ipadPortrait()}{
        font-size: 1rem;
    }
`;

const RadioNameDiv = styled.div`
    /* width: 52.5%; */
    width: 50%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
`;

const RadioSpan = styled.span`
    width: min-content;
    ${p=>p.isDone && css`opacity: 0.5;`}
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    div{
        height: 2vmin;
        width: 2vmin;
        text-decoration: none;
        border: 1px solid hsl(236, 9%, 61%);
        border-radius: 50%;
        cursor: pointer;
        ${p=>p.isCounting && css`background-color: var(--yellow);`}
    }
`;

const NameSpan = styled.span`
    text-align: left;
    padding-left: 0.5rem;
    flex-grow: 1;
    /* border: 1px solid red; */
    ${p=>p.isDone && css`text-decoration: line-through var(--yellow) 1px; opacity: 0.5;`}
    ${p=>p.isCounting && css`text-shadow: 0px 0px 3px var(--yellow);`}
`;

const TimeSpan = styled.span`
    width: 17.5%;
    padding: 0 5px;
    word-wrap: break-word;
    /* border: 1px solid red; */
    ${p=>p.isDone && css`opacity: 0.5;`}
    ${p=>p.isCounting && css`text-shadow: 0px 0px 3px var(--yellow);`}
`;

const OptionsSpan = styled.span`
    /* width: 12.5%; */
    width: 15%;
    display: flex;
    /* justify-content: center; */
    justify-content: space-evenly;
    /* border: 1px solid red; */
    /* gap: 0.25rem; */
    /* padding: 0 5px; */
    img{
        /* width: 1.35rem; */
        cursor: pointer;
    }
`;

export default function TodoElement(props) {

    const { toggleIsCountingPropOfATodo, toggleItIsRecentPropOfATodo, toggleIsDonePropOfATodo } = useTodosContext()
    
    const { name, time, timeRegister, isCounting, isDone } = props.todo;

    const [clickAudio, setClickAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])

    return(
        <StyledTodoElement>
            <RadioNameDiv>
                <RadioSpan isDone={isDone} isCounting={isCounting}>
                    <div onClick={e => {toggleIsCountingPropOfATodo(name); clickAudio.play();}}></div>
                </RadioSpan>
                <NameSpan isDone={isDone} isCounting={isCounting}>  {name} </NameSpan>
            </RadioNameDiv>
            <TimeSpan isDone={isDone} isCounting={isCounting}> {convert_MsToHrsMinsSecsFormat(time)} </TimeSpan>
            <TimeSpan isDone={isDone} isCounting={isCounting}> {convert_MsToHrsMinsSecsFormat(timeRegister)} </TimeSpan>
            <OptionsSpan>
                <Image src={check} alt="done" onClick={e => {toggleIsDonePropOfATodo(name); clickAudio.play();}} />
                <Image src={archive} alt="remove" onClick={e => {toggleItIsRecentPropOfATodo(name); clickAudio.play();}} />
            </OptionsSpan>
        </StyledTodoElement>
    )
}