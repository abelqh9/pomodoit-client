import React from 'react'
import styled from 'styled-components'
import { UseTextsContext } from '../../contexts/TextsContext';
import { getArrayOfNumbs } from '../../helpers/getArrayOfNumbs';
import { getDate } from '../../helpers/getDate';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledStatisticModalForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.8rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const P = styled.p`
    color: var(--yellow);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const RadiosDiv = styled.div`
    display: flex;
    gap: 0.75rem;
`;

const SelectsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.85rem;
    label{
        margin-right: 0.45rem;
    }
`;

function StatisticModalForm(props) {

    const { appTexts } = UseTextsContext();

    const { setDataType, setYear, year, setMonth, statisticObj } = props;

    const componenTexts = appTexts.header.RecordsModal;

    function getAvailableMonths() {
        const { year: thisYear, month: thisMonth } = getDate();
        return getArrayOfNumbs(0, year === thisYear ? thisMonth : 11);
    }

    return (
        <StyledStatisticModalForm>
            <P>{ "See By:" }</P>
            <Form>
                <RadiosDiv>
                    <div>
                        <label htmlFor="Hours">{ componenTexts.hours }</label>
                        <input type="radio" name='dataType' id="Hours" value="Hours" onChange={e=>setDataType(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="Scores">{ componenTexts.scores }</label>
                        <input type="radio" name='dataType' id="Scores" value="Scores" onChange={e=>setDataType(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="Distractions">{ componenTexts.distractions }</label>
                        <input type="radio" name='dataType' id="Distractions" value="Distractions" onChange={e=>setDataType(e.target.value)} />
                    </div>
                </RadiosDiv>
                <SelectsDiv>
                    <div>
                        <label htmlFor="year">{ componenTexts.year }</label>
                        <select name="year" id="year" onChange={e=>setYear(Number(e.target.value))}>
                            <option value="-1">----</option>
                            {statisticObj && Object.keys(statisticObj).map(year => <option key={year} value={year}> {year} </option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="month">{ componenTexts.month }</label>
                        <select name="month" id="month" onChange={e=>setMonth(Number(e.target.value))}>
                            <option value="-1">----</option>
                            {year > -1 && getAvailableMonths().map(month => <option key={month} value={month}> {componenTexts.months[month]} </option>)}
                        </select>
                    </div>
                </SelectsDiv>
            </Form>
        </StyledStatisticModalForm>
    )
}

export default StatisticModalForm