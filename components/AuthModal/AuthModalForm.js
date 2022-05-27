import React, { useState } from 'react';
import styled from 'styled-components';
import Alert from '../Alert';

const StyledAuthModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

function AuthModalForm(props) {

    const { children, submitHandler } = props;

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    return (
        <StyledAuthModalForm onSubmit={e => {e.preventDefault(); submitHandler(setError, setMessage)}}>
            {error && <Alert variant="danger">* {error} *</Alert>}
            {message && <Alert variant="god">* {message} *</Alert>}
            {children}
        </StyledAuthModalForm>
    )
}

export default AuthModalForm;