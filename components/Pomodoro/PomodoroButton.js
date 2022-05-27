import React from 'react';
import styled from 'styled-components';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledButton = styled.button`
    font-size: 1rem;
    padding: 0.5rem 1.15rem;
    background-color: var(--secondary-background-color);
    transition-property: transform;
    transition-duration: 0.05s;
    &:hover{
        font-weight: 600;
        color: var(--yellow);
        transform: scale(1.12);
    }
    ${desktopAndIpadPortrait()}{
        font-size: 1.15rem;
    }
`;

export default function PomodoroButton (props) {

    const { clickHandler, text, audio } = props;

    function onClickHandler() {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
        if (clickHandler) clickHandler();
    }

    return (
        <StyledButton onClick={onClickHandler}>{text}</StyledButton>
    )
}
