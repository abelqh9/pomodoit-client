import React from 'react'
import styled from 'styled-components'
import { UseTextsContext } from '../../contexts/TextsContext'
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledTodosModalSelect = styled.div`
    font-size: 0.80rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const Span = styled.span`
    color: var(--red);
    font-size: 0.75rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const StyledSelect = styled.select`
    width: 5rem;
    ${desktopAndIpadPortrait()}{
        width: max-content;
    }
`;

export default function TodosModalSelect (props) {

    const { appTexts } = UseTextsContext()

    const { setTodosOrder } = props;

    const componentTexts = appTexts.header.ToDosModal;

    return (
        <StyledTodosModalSelect>
            <Span>{componentTexts.filterBy}</Span>
            <StyledSelect onChange={e => setTodosOrder(e.target.value)}>
                <option value="lessR">{componentTexts.lessRecents}</option>
                <option value="moreR">{componentTexts.moreRecents}</option>
                <option value="lessT">{componentTexts.lessTime}</option>
                <option value="moreT">{componentTexts.moreTime}</option>
            </StyledSelect>
        </StyledTodosModalSelect>
    )
}
