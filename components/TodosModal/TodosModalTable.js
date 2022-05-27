import React, { useState } from 'react';
import styled from 'styled-components'
import { UseTextsContext } from '../../contexts/TextsContext';
import { useTodosContext } from '../../contexts/TodosContext';
import TodosModalFilters from './TodosModalFilters';
import TodosModalSelect from './TodosModalSelect';
import TodosModalItem from './TodosModalItem';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledTodosModalTable = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const OptionsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const HeadDiv = styled.div`
    width: 99%;
    text-align: center;
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    font-size: 0.75rem;
    border-bottom: var(--yellow) 3px solid;
    font-weight: bold;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const NameSpan = styled.span`
    text-align: left;
    width: 52.5%;
`;

const TimeSpan = styled.span`
    width: 17.5%;
    padding: 0 5px;
`;

const CreationSpan = styled.span`
    width: 17.5%;
    padding: 0 5px;
    overflow-x: hidden;
`;

const OptionsSpan = styled.span`
    width: 12.5%;
    padding: 0 5px;
    overflow-x: hidden;
`;

const ItemsDiv = styled.div`
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 5rem;
    flex-grow: 1;
    &::-webkit-scrollbar{
        width: 0.1rem;
        border: 1px solid hsl(281, 89%, 26%);
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--yellow);
    }
`;

const NoItemsP = styled.p`
    color: var(--yellow);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
`;

function TodosModalTable() {

    const { appTexts } = UseTextsContext();
    const { todos } = useTodosContext()

    const [activeFilter, setActiveFilter] = useState("all");
    const [todosOrder, setTodosOrder] = useState("lessR");

    const componentTexts = appTexts.header.ToDosModal;

    function getSortedAndFilteredTodos() {
        const sortedAndFilteredTodos = todos.slice().sort((a,b) => {
            const data = todosOrder.slice(-1) === "R" ? "creationDateMili" : "time";
            return todosOrder.slice(0, -1) === "less" ? a[data] - b[data] : b[data] - a[data];
        });
        return sortedAndFilteredTodos.filter(todo => {
            if (activeFilter === "active" && !todo.isDone) return true;
            if (activeFilter === "completed" && todo.isDone) return true;
            if (activeFilter === "all") return true;
            return false;
        })
    }

    return (
        <StyledTodosModalTable>
            <OptionsDiv>
                <TodosModalFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                <TodosModalSelect setTodosOrder={setTodosOrder}/>
            </OptionsDiv>
            <HeadDiv>
                <NameSpan>{componentTexts.description}</NameSpan>
                <TimeSpan>{componentTexts.time}</TimeSpan>
                <CreationSpan>{componentTexts.creation}</CreationSpan>
                <OptionsSpan>{"Options"}</OptionsSpan>
            </HeadDiv>
            <ItemsDiv>
                {todos.length > 0
                    ? (getSortedAndFilteredTodos().map((todo, i)=><TodosModalItem todo={todo} key={i}/>))
                    : <NoItemsP>{componentTexts.noTodosText}</NoItemsP>}
            </ItemsDiv>
        </StyledTodosModalTable>
    )
}

export default TodosModalTable;