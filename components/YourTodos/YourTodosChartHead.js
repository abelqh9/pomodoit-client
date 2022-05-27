import React from 'react';
import styled from 'styled-components';
import { UseTextsContext } from '../../contexts/TextsContext';
import { ipadPortrait } from '../../helpers/querysCss';

const StyledYourTodosChartHead = styled.div`
    display: flex;
    font-size: 0.7rem;
    width: 99%;
    text-align: center;
    align-items: center;
    padding-bottom: 0.5rem;
    border-bottom: var(--yellow) 3px solid;
    font-weight: bold;
    ${ipadPortrait()}{
        font-size: 0.9rem;
    }
`;

const DescriptionSpan = styled.span`
    text-align: left;
    /* width: 52.5%; */
    width: 50%;
    /* border: 1px solid red; */
`;

const TodayTimeSpan = styled.span`
    width: 17.5%;
    padding: 0 5px;
    /* border: 1px solid red; */
`;

const AllTimeSpan = styled.span`
    width: 17.5%;
    padding: 0 5px;
    /* border: 1px solid red; */
`;

const OptionsSpan = styled.span`
    /* width: 12.5%; */
    width: 15%;
    padding: 0 5px;
    overflow-x: hidden;
    /* border: 1px solid red; */
`;

export default function YourTodosChartHead () {

    const { appTexts } = UseTextsContext()

    const componentTexts = appTexts.todos;

    return (
        <StyledYourTodosChartHead>
            <DescriptionSpan>{componentTexts.description}</DescriptionSpan>
            <TodayTimeSpan>{componentTexts.today}</TodayTimeSpan>
            <AllTimeSpan>{componentTexts.all}</AllTimeSpan>
            <OptionsSpan>{"Options"}</OptionsSpan>
        </StyledYourTodosChartHead>
    )
}
