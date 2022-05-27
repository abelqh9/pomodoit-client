import React from 'react';
import styled from 'styled-components'
import { useScoreRecordContext } from '../../contexts/ScoreRecordContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { getTodayDataOfARecord } from '../../functions/getTodayDataOfARecord';

const StyledHeaderScore = styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    font-weight: bold;
`;

const TextSpan = styled.span`
    color: var(--red);
    font-size: 1.15rem;
    cursor: pointer;
`;

const NumbSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--yellow);
    border-radius: 1rem;
    height: 2rem;
    width: 3.25rem;
`;

export default function HeaderScore() {

    const { scoreRecord } = useScoreRecordContext();
    const { appTexts, language } = UseTextsContext();

    // console.log(appTexts, language);

    return(
        <StyledHeaderScore>
            <TextSpan>{appTexts.header.score}</TextSpan>
            <NumbSpan>{getTodayDataOfARecord(scoreRecord)}</NumbSpan>
        </StyledHeaderScore>
    )
}