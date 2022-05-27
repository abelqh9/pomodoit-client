import React from 'react'
import styled from 'styled-components'
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledAuthModalInput = styled.div`
    width: 18rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
`;

const Label = styled.label`
    text-align: left;
    width: 100%;
    color: var(--yellow);
    font-size: 0.75rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 1.7rem;
    padding: 0.6rem;
    border-radius: 0.75rem;
    font-size: 0.925rem;
    background-color: var(--secondary-background-color);
    color: white;
    caret-color: var(--yellow);
    font-weight: lighter;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

function AuthModalInput(props) {

    const { labelText, type, placeholderText, value, onChangeHandler } = props;

    return (
        <StyledAuthModalInput>
            <Label htmlFor={labelText}>{labelText}</Label>
            <Input type={type} name={labelText} id={labelText} placeholder={placeholderText} value={value} onChange={onChangeHandler}/>
        </StyledAuthModalInput>
    )
}

export default AuthModalInput