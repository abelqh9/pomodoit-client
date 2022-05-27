import React from 'react'
import styled from 'styled-components'
import ModalButton from './Modal/ModalButton';

const SyledAlertModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const MessageP = styled.p`
    color: var(--yellow);
`;

function AlertModal(props) {

    const { children, closeModal } = props

    return (
        <SyledAlertModal>
            <MessageP> {children} </MessageP>
            <ModalButton text={'Ok'} clickHandler={closeModal}/>
        </SyledAlertModal>
    )
}

export default AlertModal