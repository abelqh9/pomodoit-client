import React, { useState } from 'react'
import styled from 'styled-components';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import Alert from '../Alert';
import ConfirmModal from '../ConfirmModal';
import ModalButton from '../Modal/ModalButton';

const StyledUserModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.8rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

    }
    label{
        color: var(--yellow);
    }
    input{
        background: none;
        outline: none;
        border: none;
        padding: 0.3rem;
        min-width: 7.5rem;
        border-radius: var(--borderRadius);
        caret-color: var(--yellow);
        background-color: var(--secondary-background-color);
        font-family: inherit;
        font-weight: lighter;
    }
`;

function UserModalForm(props) {

    const { labelText, inputPlaceHolder, inputType,
        inputHandler, inputValue, buttonText,
        submitHandler, confirmHandler, confirmModalText} = props;

    const [ isOpen, openModal, closeModal ] = useModal();

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    async function onSubmitHandler(e) {
        e.preventDefault();
        submitHandler(inputValue, openModal, setError);
    }

    return (
        <StyledUserModalForm onSubmit={onSubmitHandler}>
            {error && <Alert variant="danger">* {error} *</Alert>}
            {message && <Alert variant="god">* {message} *</Alert>}

            <div>
                <label htmlFor={inputType}>{labelText}</label>
                <input id={inputType} type={inputType} name={inputType} placeholder={inputPlaceHolder} value={inputValue} onChange={inputHandler}/>
                <ModalButton loading={loading} text={buttonText}/>
            </div>

            {isOpen && <Modal closeModal={closeModal} withoutCloseButton={true}>
                <ConfirmModal buttonText={buttonText} acceptHandler={async e => {confirmHandler(setError, setMessage, setLoading); closeModal()}} cancelHandler={closeModal}>
                    {confirmModalText}
                </ConfirmModal>
            </Modal>}
        </StyledUserModalForm>
    )
}

export default UserModalForm