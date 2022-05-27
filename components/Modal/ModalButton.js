import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';
import clickSoundUrl from '../../public/minecraft_click.mp3'

const StyledModalButton = styled.button`
    min-width: 6rem;
    background-color: #e6073f;
    color: white;
    font-size: 0.95rem;
    font-weight: lighter;
    border-radius: 1rem;
    cursor: pointer;
    align-self: center;
    opacity: ${props => props.disabled ? '0.5' : '1'};
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

function ModalButton(props) {

    const { disabled, clickHandler, text } = props;

    const [clickAudio, setClickAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])

    function buttonHandler (e) {
        clickAudio.play();
        if(clickHandler) clickHandler();
    }

    return (
        <StyledModalButton disabled={disabled} onClick={buttonHandler} type='submit'>{text}</StyledModalButton>
    )
}

export default ModalButton