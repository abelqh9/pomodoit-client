import React from 'react'
import styled from 'styled-components';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledModalTitle = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-align: center;
    font-size: 1.75rem;
    margin-bottom: 1rem;
    text-shadow: 0px 0px 3px var(--yellow);
    color: ${p => p.specialTitle ? 'var(--yellow)' : 'inherit'};
    ${desktopAndIpadPortrait()}{
        font-size: 2rem;
    }
`;

function ModalTitle(props) {

    const { children, specialTitle } = props

    return (
        <StyledModalTitle specialTitle={specialTitle}>{ children }</StyledModalTitle>
    )
}

export default ModalTitle