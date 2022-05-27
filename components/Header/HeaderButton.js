import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import styled, { css } from 'styled-components'
import clickSoundUrl from '../../public/minecraft_click.mp3'
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledHeaderButton = styled.button`
    padding-bottom: 0.25rem;
    font-weight: 600;
    font-size: 0.95rem;
    transition: transform 0.1s;
    text-shadow: 0px 0px 5px var(--yellow);
    ${p => p.isSpecial && css`
        color: var(--yellow);
        font-size:1.05rem; display:inline-flex;
        align-items: center;
    `}
    &:hover{
        transform: translateY(-5px);
    }
    /* img{
        margin-left: 0.25rem;
        width: 2.25rem;
    } */
    ${desktopAndIpadPortrait()}{
        font-size: 1.2rem;
    }
    `;

const ImageDiv = styled.span`
    margin-left: 0.25rem;
    width: 2.25rem;
`;

function HeaderButton(props) {

    const { clickHandler, isSpecial, text, imgUrl } = props;

    const [clickAudio, setClickAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])

    function onClickHandler() {
        clickAudio.play();
        if (clickHandler) clickHandler();
    }

    return (
        <StyledHeaderButton onClick={onClickHandler} isSpecial={isSpecial}>
            {text} {imgUrl && <ImageDiv><Image src={imgUrl} alt="sword" /></ImageDiv>}
        </StyledHeaderButton>
    )
}

export default HeaderButton