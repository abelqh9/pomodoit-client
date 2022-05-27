import React from 'react';
import styled, { keyframes } from 'styled-components'
import useSWR from 'swr';
import Image from 'next/image'
import alarmIcon from '../../public/alarm_on_black_24dp.svg';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';
import { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 0.15rem;
    cursor: pointer;
`;

const textKeyframes = keyframes`
    0% {opacity:0.1;text-shadow: var(--H1TextShadow);}
    2% {opacity:1; text-shadow: var(--H1TextShadow);}
    8% {opacity:0.1;text-shadow: var(--H1TextShadow);}
    9% {opacity:1;text-shadow: var(--H1TextShadow);}
    12% {opacity:0.1;text-shadow: 0px 0px var(--yellow);}
    20% {opacity:1;text-shadow: var(--H1TextShadow);}
    25% {opacity:0.3;text-shadow: var(--H1TextShadow);}
    30% {opacity:1;text-shadow: var(--H1TextShadow);}
    70% {opacity:0.7;text-shadow: var(--H1TextShadow);}
    72% {opacity:0.2;text-shadow:var(--H1TextShadow);}
    77% {opacity:.9;text-shadow: var(--H1TextShadow);}
    100% {opacity:.9;text-shadow: var(--H1TextShadow);}
`;

const H1 = styled.h1`
    font-size: 2.15rem;
    font-family: "8bitOperatorPlus-Bold", "Arial";
    ${p => p.isVisible && css`
        animation-name: ${textKeyframes};
        animation-duration: 1.5s;
        animation-timing-function: linear;
        /* animation-delay: 0.5s; */
        text-shadow: var(--H1TextShadow);
    `}
    ${desktopAndIpadPortrait()}{
        font-size: 2.75rem;
    }
`;

const imgKeyframes = keyframes`
    0% {opacity:0.1; filter: drop-shadow(var(--ImgsDropShadow));}
    2% {opacity:1;  filter: drop-shadow(var(--ImgsDropShadow));}
    8% {opacity:0.1; filter: drop-shadow(var(--ImgsDropShadow));}
    9% {opacity:1; filter: drop-shadow(var(--ImgsDropShadow));}
    12% {opacity:0.1; filter: drop-shadow(0px 0px var(--yellow));}
    20% {opacity:1; filter: drop-shadow(var(--ImgsDropShadow));}
    25% {opacity:0.3; filter: drop-shadow(var(--ImgsDropShadow));}
    30% {opacity:1; filter: drop-shadow(var(--ImgsDropShadow));}
    70% {opacity:0.7; filter: drop-shadow(var(--ImgsDropShadow)); transform: translateY(-15px);}
    71% {opacity:0.2; filter: drop-shadow(var(--ImgsDropShadow)); transform: translateY(0px);}
    72% {opacity:0.2; filter: drop-shadow(var(--ImgsDropShadow));}
    77% {opacity:.9; filter: drop-shadow(var(--ImgsDropShadow));}
    100% {opacity:.9; filter: drop-shadow(var(--ImgsDropShadow));}
`;

const ImgDiv =  styled.div`
    width: 2.5rem;
    padding-top: 5px;
    span{
        overflow: visible !important;
    }
    ${desktopAndIpadPortrait()}{
        padding-top: 5px;
        width: 3.5rem;
    }
`;

const Img = styled(Image)`
    ${p => p.isVisible && css`
        animation-name: ${imgKeyframes};
        animation-duration: 1.5s;
        animation-timing-function: linear;
        /* animation-delay: 0.5s; */
    `}
    filter: drop-shadow(var(--ImgsDropShadow));
`;

export default function HeaderTitle () {

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL + '/api/user')

    return(
        <Container>
            <H1 isVisible={data || error}>PomoDoIt</H1>
            <ImgDiv>
                <Img isVisible={data || error} src={alarmIcon} alt="Pomodoit Icon" layout='responsive'/>
            </ImgDiv>
        </Container>
    )
}