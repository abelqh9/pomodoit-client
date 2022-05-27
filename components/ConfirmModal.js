import React from 'react'
import styled from 'styled-components';
import ModalButton from './Modal/ModalButton';

const SyledConfirmModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const MessageP = styled.p`
    color: var(--yellow);
`;

const ButtonsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
`;

function ConfirmModal(props) {

    const { children, buttonText, acceptHandler, cancelHandler } = props

    return (
        <SyledConfirmModal>
            <MessageP> {children} </MessageP>
            <ButtonsDiv>
                <ModalButton text={buttonText} clickHandler={acceptHandler}/>
                <ModalButton text={'Cancel'} clickHandler={cancelHandler}/>
            </ButtonsDiv>
        </SyledConfirmModal>
    )
}

export default ConfirmModal