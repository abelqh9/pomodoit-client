import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';

const StyledSpan = styled.span`
    font-size: 0.9rem;
    ${p=>(p.variant==="danger")&& css`color: red;`}
    ${p=>(p.variant==="god")&& css`color: rgb(20, 247, 39);`}
`;

const Alert = (props) => {

    const {variant, children} = props; 

    return (
        <StyledSpan variant={variant}>
            {children}
        </StyledSpan>
    )
}

export default Alert