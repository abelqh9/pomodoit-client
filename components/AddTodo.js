import React, { useState } from 'react'
import styled from 'styled-components';
import { usePomodoroContext } from '../contexts/PomodoroContext';
import { UseTextsContext } from '../contexts/TextsContext';
import { desktopAndIpadPortrait  } from '../helpers/querysCss';
import { useModal } from '../hooks/useModal';
import { useTodosContext } from '../contexts/TodosContext';
import Modal from './Modal/Modal';
import AlertModal from './AlertModal';

const StyledAddTodo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const H2 = styled.h2`
    font-size: 1.35rem;
    text-shadow: 0px 0px ${p => (!p.pomodoroState || p.pomodoroState === 'stop')
        ? '2px'
        : '5px' 
    } ${p => (p.pomodoroState==='work' || p.nextPomodoroState === 'work') 
        ? 'var(--red)' 
        : (p.pomodoroState==='rest' || p.nextPomodoroState === 'rest')
            ? 'var(--green)' 
            : 'white'
    };
    ${desktopAndIpadPortrait()}{
        font-size: 1.8rem;
    }
`;

const Input = styled.input`
    width: 20rem;
    max-width: 100%;
    padding: 0.85rem;
    font-size: 0.95rem;
    background-color: var(--secondary-background-color);
    caret-color: var(--yellow);
    border-radius: var(--borderRadius);
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
    &::placeholder{
        color: white;
        opacity: 0.5;
        font-size: 0.95rem;
        ${desktopAndIpadPortrait()}{
            font-size: 1rem;
        }
    }
`; 

function AddTodo() {

    const { todos, addTodo } = useTodosContext();
    const { appTexts } = UseTextsContext();
    const { pomodoroState, nextPomodoroState } = usePomodoroContext()
    const [ isOpen, openModal, closeModal ] = useModal();

    const [todoName, setTodoName] = useState("");

    const componentTexts = appTexts.todos;

    function submitHandler(e){
        e.preventDefault();
        
        if (todoName.trim().length<1) return;

        if ( todos.find(t => t.name === todoName.trim()) ) {
            if (!isOpen) {
                openModal();
            }else{
                closeModal();
            }
        }else{
            addTodo(todoName, () => setTodoName(""));
        }
    }

    return (
        <StyledAddTodo>
            <H2 pomodoroState={pomodoroState} nextPomodoroState={nextPomodoroState}>{ componentTexts.addTodo }</H2>
            <form onSubmit={submitHandler}>
                <Input type="text" placeholder={componentTexts.inputText} value={todoName} onChange={e => setTodoName(e.target.value)}/>
            </form>

            {isOpen && <Modal closeModal={closeModal} withoutCloseButton={true}> <AlertModal closeModal={closeModal}>A ToDo with the same name already exist.</AlertModal> </Modal>}
        </StyledAddTodo>
    )
}

export default AddTodo