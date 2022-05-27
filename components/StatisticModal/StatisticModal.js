import React, { useState } from 'react'
import styled from 'styled-components'
import { useDBContext } from '../../contexts/DBContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { useTimeRecordContext } from '../../contexts/TimeRecordContext';
import { useScoreRecordContext } from '../../contexts/ScoreRecordContext';
import { useDistractionsRecordContext } from '../../contexts/DistractionsRecordContext';
import StatisticModalForm from './StatisticModalForm';
import StatisticModalResume from './StatisticModalResume';
import StatisticModalChart from './StatisticModalChart';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';
import ModalTitle from '../Modal/ModalTitle';

const StyledRecordsModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    ${desktopAndIpadPortrait()}{
        width: ${p => p.userData ? '80vw' : '40vw'};
    }
`;

export default function RecordsModal () {

    const { userData } = useDBContext();
    const { appTexts } = UseTextsContext();
    const { timeRecord } = useTimeRecordContext();
    const { scoreRecord } = useScoreRecordContext();
    const { distractionsRecord } = useDistractionsRecordContext();

    const [dataType, setDataType] = useState("");
    const [year, setYear] = useState(-1);
    const [month, setMonth] = useState(-1);

    const componentTexts = appTexts.header.RecordsModal;

    const records ={
        "Hours" : timeRecord, "Scores": scoreRecord, "Distractions" : distractionsRecord
    }

    return (
        <StyledRecordsModal userData={userData}>
            <ModalTitle> { componentTexts.title } </ModalTitle>
            {
                userData
                    ? <>
                        <StatisticModalForm setDataType={setDataType} setYear={setYear} year={year} setMonth={setMonth} statisticObj={records[dataType]} />

                        {year > -1 && <StatisticModalResume dataType={dataType} statisticObj={records[dataType]} year={year} month={month}/>}

                        <StatisticModalChart dataType={dataType} statisticObj={records[dataType]} year={year} month={month}/>
                    </>
                    : <p>{ componentTexts.noUser }</p>
            }
        </StyledRecordsModal>
    )
}