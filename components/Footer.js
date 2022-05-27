import React from 'react';
import styled from 'styled-components';
import { UseTextsContext } from '../contexts/TextsContext';

const StyledFooter = styled.footer`
`;

const P = styled.p`
    font-size: 0.9rem;
    text-shadow: 0px 0px 2px white;
    span{
        text-shadow: none;
        text-shadow: 0px 0px 2px var(--red);
    }
    a{
        text-shadow: 0px 0px 2px var(--yellow);
        color: var(--yellow);
        text-decoration: none;
    }
`; 

export default function Footer () {

    const { appTexts } = UseTextsContext()

    return(
        <StyledFooter>
            <P>{appTexts.footer.madePhrase1} <span>❤️</span> {appTexts.footer.madePhrase2} <a href="/#">Abel Quezada</a></P>
        </StyledFooter>
    )
}