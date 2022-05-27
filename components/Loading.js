import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import loaderSvg from '../public/Bean Eater-1s-111px.svg'

const StyledLoading = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: var(--primary-background-color);
`;

function Loading() {
    return (
        <StyledLoading>
            <Image src={loaderSvg} alt='loading'/>
        </StyledLoading>
    )
}

export default Loading