import React from 'react'
import styled from 'styled-components';
import YourTodosChartHead from './YourTodosChartHead';
import { useTodosContext } from '../../contexts/TodosContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import TodoElement from './YourTodosItem';

const StyledYourTodosChart = styled.div`
    background-color: var(--secondary-background-color);
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: var(--borderRadius);
    flex-grow: 1;
`;

const YourTodosItemsDiv = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &::-webkit-scrollbar{
        width: 0.1rem;
        border: 1px solid hsl(281, 89%, 26%);
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--yellow);
    }
`;

const NoTodosP = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    opacity: 0.5;
    font-size: 1.15rem;
`;

export default function YourTodosChart () {

    const { todos } = useTodosContext();
    const { appTexts } = UseTextsContext();

    const componentTexts = appTexts.todos;

    function getRecentTodos(todos) {
        return todos.filter(todo => todo.itIsRecent)
    }

    return (
        <StyledYourTodosChart>
            <YourTodosChartHead />
            <YourTodosItemsDiv>
                {getRecentTodos(todos).length > 0
                    ? getRecentTodos(todos).map((t,i) => <TodoElement key={i} todo={t} index={i} />)
                    : <NoTodosP>{componentTexts.noTodos}</NoTodosP>}
            </YourTodosItemsDiv>
        </StyledYourTodosChart>
    )
}

