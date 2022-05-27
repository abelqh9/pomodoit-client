import React from 'react';
import styled from 'styled-components';
import Pomodoro from './Pomodoro/Pomodoro';
import { desktop } from '../helpers/querysCss';
import AddTodo from './AddTodo';
import YourTodos from './YourTodos/YourTodos';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
    flex-grow: 1;
    ${desktop()}{
        flex-direction: row;
    }
`;

const TodosSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
    width: 100%;
    ${desktop()}{
        gap: 2rem;
        width: 30vw;
    }
`;

export default function Main () {   
    return(
        <StyledMain>
            <Pomodoro />
            <TodosSection>
                <AddTodo />
                <YourTodos />
            </TodosSection>
        </StyledMain>
    )
}