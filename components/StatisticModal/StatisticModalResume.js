import React from 'react'
import styled from 'styled-components'
import { UseTextsContext } from '../../contexts/TextsContext';
import { convertMsToHours } from '../../helpers/convertMsToHours';
import { getMonthSumOfARecord } from '../../functions/getMonthSumOfARecord';
import { getYearSumOfARecord } from '../../functions/getYearSumOfARecord';

const Span = styled.span`
    color: var(--yellow);
`;

function StatisticModalResume(props) {

    const { appTexts } = UseTextsContext();

    const { dataType, statisticObj, year, month } = props;

    const componenTexts = appTexts.header.RecordsModal;

    return (
        <p>
            {<Span>{ componenTexts[ month > -1 ? 'monthTotal' : 'yearTotal' ] }</Span>}
            {" "}
            { (dataType && year > -1 && month > -1)
                ? (dataType === "Hours")
                    ? convertMsToHours(getMonthSumOfARecord(statisticObj, year, month))
                    : getMonthSumOfARecord(statisticObj, year, month) 
                : (dataType && year > -1)
                    ? (dataType === "Hours")
                        ? convertMsToHours(getYearSumOfARecord(statisticObj, year))
                        : getYearSumOfARecord(statisticObj, year)
                    : null
            }
            {" "}
            {dataType && componenTexts[dataType.toLowerCase()]}
        </p>
    )
}

export default StatisticModalResume