import React from 'react'
import styled from 'styled-components'
import { useTodosContext } from '../contexts/TodosContext';
import ModalButton from './Modal/ModalButton';

const StyledRemoveTodoModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const TextP = styled.div`
    color: var(--yellow);
`;

function RemoveTodoModal(props) {

    const { removeTodo } = useTodosContext();

    const { todoName } = props;

    return (
        <StyledRemoveTodoModal>
            <p>Are you sure? This todo will lose for ever</p>
            <TextP>{todoName}</TextP>
            <ModalButton text={'Delete'} clickHandler={() => removeTodo(todoName)}/>
        </StyledRemoveTodoModal>
    )
}

export default RemoveTodoModal