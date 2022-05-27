import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import { css } from 'styled-components';
import arrow from '../public/chevron_right_black_24dp.svg'
import { useDBContext } from '../contexts/DBContext';
import { UseTextsContext } from '../contexts/TextsContext';
import clickSoundUrl from '../public/minecraft_click.mp3';
import { desktopAndIpadPortrait } from '../helpers/querysCss';

const StyledMotivationPhrase = styled.div`
    position: fixed;
    left: 0;
    bottom: 5%;
    z-index: 1000;
    display: flex;
    align-items: center;
    transform: translateX(-12.5rem);
    transition: transform 0.25s;
    ${p => p.active && css`transform: translateX(0rem);`}
    ${desktopAndIpadPortrait()}{
        transform: translateX(-17.5rem);
        ${p => p.active && css`transform: translateX(0rem);`}
    }
`;

const SliderDiv = styled.div`
    background-color: var(--secondary-background-color);
    padding: 0.25rem;
    border-top-right-radius: 0.85rem;
    border-bottom-right-radius: 0.85rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    box-shadow: var(--boxShadow);
    span{
        display: none;
    }
    ${desktopAndIpadPortrait()}{
        padding: 0.5rem;
        font-size: 0.9rem;
        span{
            display: inline-block;
            padding-bottom: 2px;
            color: ${p => p.new ? 'var(--yellow)' :'inherit'}
        }
    }
`;

const PhraseP = styled.p`
    padding: 0.75rem;
    width: 12.5rem;
    font-size: 0.8rem;
    line-height: 1.25rem;
    background-color: var(--secondary-background-color);
    border-right: var(--primary-background-color) 3px solid;
    box-shadow: var(--boxShadow);
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    color: var(--yellow);
    ${desktopAndIpadPortrait()}{
        width: 17.5rem;
        font-size: 1rem;
    }
`;

export default function MotivationPhrase () {

    const { userData, updateDoc } = useDBContext()
    const { appTexts } = UseTextsContext()

    const [active, setActive] = useState(false);
    const [motivation, setMotivation] = useState({new: false, index:-1});
    const [clickAudio, setClickAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])
    
    useEffect(() => {
        setMotivation(userData
            ?{new: userData.motivation.new, index: userData.motivation.index}
            :{new: false, index:-1});
    }, [userData])
    
    const componentTexts = appTexts.footer;
        
    function clickHandler() {
        clickAudio.play();
        setActive(a => a ? false : true);
        if ( motivation.new ) {
            setMotivation(oldState => {
                let newState = {new:false, index: oldState.index};
                updateDoc({motivation: newState});
                return newState;
            });
        }
    }

    return(
        <StyledMotivationPhrase active={active}>
            <PhraseP new={motivation.new}>
                {motivation.index > -1 ? componentTexts.motivationsPhrases[motivation.index] : componentTexts.noAccount}
            </PhraseP>
            <SliderDiv new={motivation.new} onClick={clickHandler}>
                <span>{componentTexts.todayMotivation}</span>
                <Image src={arrow} alt="arrow"/>
            </SliderDiv>
        </StyledMotivationPhrase>
    )
}