import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { UseTextsContext } from '../../contexts/TextsContext'
import { desktopAndIpadPortrait } from '../../helpers/querysCss'
import clickSoundUrl from '../../public/minecraft_click.mp3'

const Ul = styled.ul`
    font-size: 0.8rem;
    display: flex;
    gap: 0.5rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`
const Li = styled.li`
    cursor: pointer;
    ${props=> props.isActive && css`
        color: var(--yellow);
        font-weight: bold;
        transform: scale(1.1);
    `}
`

export default function TodosModalFilters (props) {

    const { appTexts } = UseTextsContext();

    const { activeFilter, setActiveFilter } = props;

    const [clickAudio, setClickAudio] = useState(null);

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), []);

    const componentTexts = appTexts.header.ToDosModal;

    return (
        <Ul>
            <Li isActive={activeFilter==="all"} onClick={e=>{setActiveFilter("all"); clickAudio.play();}}>{componentTexts.all}</Li>
            <Li isActive={activeFilter==="active"} onClick={e=>{setActiveFilter("active"); clickAudio.play();}}>{componentTexts.active}</Li>
            <Li isActive={activeFilter==="completed"} onClick={e=>{setActiveFilter("completed"); clickAudio.play();}}>{componentTexts.completed}</Li>
        </Ul>
    )
}
