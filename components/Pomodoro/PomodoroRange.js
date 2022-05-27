import React from 'react'
import Image from 'next/image'
import styled, { css, keyframes } from 'styled-components';
import { usePomodoroContext } from '../../contexts/PomodoroContext';
import { desktop, ipadPortrait } from '../../helpers/querysCss';

const isMoving = keyframes`
    0%{transform: scale(1);}
    50%{transform: scale(1.1);}
    100%{transform: scale(1);}
`;

const StyledPomodoroRange = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 45%;
    ${p => p.isMoving && css`animation: ${isMoving} 0.5s infinite;`}
`;

const Label = styled.label`
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    img{
        width: 1.25rem;
    }
    ${desktop()}{
        font-size: 1.25rem;
        img{
            width: 1.75rem;
        }
    }
    ${ipadPortrait()}{
        font-size: 1.5rem;
        img{
            width: 1.75rem;
        }
    }
`;

const RangeContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.25rem;
`;

const Range = styled.input`
    width: 72.5%;
    margin-right: 0.25rem;
    background-color: inherit;
    -webkit-appearance: none;
    &:focus{
        outline: none;
    }
    &::-webkit-slider-runnable-track{
        -webkit-appearance: none;
    }
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        background-color: var(--yellow);
        width: 20px;
        height: 20px;
        border: 3px solid var(--primary-background-color);
        border-radius: 50%;
        margin-top: -9px;
    }
    &::-moz-range-thumb{
        background-color: var(--yellow);
        width: 15px;
        height: 15px;
        border: 3px solid var(--primary-background-color);
        border-radius: 50%;
    }
    &::-ms-thumb{
        background-color: var(--yellow);
        width: 20px;
        height: 20px;
        border: 3px solid var(--primary-background-color);
        border-radius: 50%;
    }
    &::-webkit-slider-runnable-track{
        background-color: white;
        height: 3px;
    }
    &:focus::-webkit-slider-runnable-track{
        outline: none;
    }
    &::-moz-range-track{
        background-color: white;
        height: 3px;
    }
    &::-ms-track{
        background-color: white;
        height: 3px;
    }
    ${p => p.disabled && css`opacity: 0.5;`}
`;

const MinsIndicatorDiv = styled.div`
    font-size: 1rem;
    display: flex;
    gap: 0.15rem;
    ${ipadPortrait()}{
        font-size: 1.5rem;
    }
`;

export default function PomodoroRange (props) {

    const { pomodoroTimes } = usePomodoroContext()

    const { title, titleImg, min, max, step, handler, value, isMoving } = props;

    return (
        <StyledPomodoroRange isMoving={isMoving}>
            {/* <Label htmlFor={title}><img src={titleImg} alt="input Img"/>  {title} <img src={titleImg} alt="input Img"/> </Label> */}
            <Label htmlFor={title}><Image src={titleImg} alt="input Img"/>  {title} <Image src={titleImg} alt="input Img"/> </Label>
            <RangeContainerDiv>
                <Range  value={value} onChange={handler} id={title} type="range" min={min} max={max} step={step} disabled={pomodoroTimes["work"]}/>
                <MinsIndicatorDiv>{value}<span>min</span></MinsIndicatorDiv>
            </RangeContainerDiv>
        </StyledPomodoroRange>
    )
}