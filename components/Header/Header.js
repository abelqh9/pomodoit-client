import React from 'react';
import styled from 'styled-components';
import HeaderTitle from './HeaderTitle';
import HeaderButtons from './HeaderButtons';
import HeaderScore from './HeaderScore';
import { desktop } from '../../helpers/querysCss';

const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    ${desktop()}{
        flex-wrap: nowrap;
        justify-content: space-between;
    }
`;

export default function Header () {
    return(
        <StyledHeader>
            <HeaderTitle />
            <HeaderScore />
            <HeaderButtons />
        </StyledHeader>
    ) 
}