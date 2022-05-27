import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styled from 'styled-components';
import add_img from '../public/add_black_24dp.svg';
import arrow from '../public/chevron_right_black_24dp.svg';
import { useDistractionsRecordContext } from '../contexts/DistractionsRecordContext';
import { UseTextsContext } from '../contexts/TextsContext';
import { getTodayDataOfARecord } from '../functions/getTodayDataOfARecord';
import clickSoundUrl from '../public/minecraft_click.mp3';

const StyledDistractionCounter = styled.div`
    position: fixed;
    top: 16%;
    right: 0;
    display: flex;
    z-index: 1000;
    transform: translateX(10rem);
    transition: transform 0.25s;
    ${props => props.move && "transform: translateX(0rem);"}
`;

const ArrowImg = styled(Image)`
    transform: rotate(180deg);
    background-color: var(--secondary-background-color);
    border-top-right-radius: 0.85rem;
    border-bottom-right-radius: 0.85rem;
    cursor: pointer;
    box-shadow: var(--boxShadow);
`;

const CounterDiv = styled.div`
    width: 10rem;
    padding: 0 0.5rem;
    background-color: var(--secondary-background-color);
    border-left: var(--primary-background-color) 3px solid; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--boxShadow);
    padding: 0.25rem;
`;

const TextSpan = styled.span`
    font-size: 0.8rem;
`;

const NumbSpan = styled.div`
    font-weight: bold;
`;

const SumImg = styled(Image)`
    cursor: pointer;
`;

export default function DistractionCounter() {
    
    const { distractionsRecord, increaseDistractionsRecord } = useDistractionsRecordContext();
    const { appTexts } = UseTextsContext();
    
    const [move, setMove] = useState(false);
    const [clickAudio, setClickAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])

    function changeMove() {setMove(m => m ? false : true)}

    return (
        <StyledDistractionCounter move={move}>
            <ArrowImg onClick={e => {clickAudio.play(); changeMove();}} src={arrow} alt="arrow" />
            <CounterDiv>
                <TextSpan>{appTexts.header.distractions}</TextSpan>
                <NumbSpan>{getTodayDataOfARecord(distractionsRecord)}</NumbSpan>
                <SumImg onClick={e => {clickAudio.play(); increaseDistractionsRecord();}} src={add_img} alt="add"/>
            </CounterDiv>
        </StyledDistractionCounter>
    )
}
