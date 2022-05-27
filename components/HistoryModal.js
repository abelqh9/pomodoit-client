import React from 'react'
import styled from 'styled-components'
import { UseTextsContext } from '../contexts/TextsContext';
import { desktop, ipadPortrait } from '../helpers/querysCss';
import ModalTitle from './Modal/ModalTitle';

const StyledHistoryModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
    text-align: justify;
    ${desktop()}{
        max-width: 30vw;
    }
    ${ipadPortrait()}{
        max-width: 50vw;
    }
`;

export default function HistoryModal () {

    const { appTexts } = UseTextsContext();

    const componentTexts = appTexts.header.historyModal;

    return (
        <StyledHistoryModal>
            <ModalTitle> { componentTexts.title } </ModalTitle>
            <p>{ componentTexts.one }</p>
            <p>{ componentTexts.two }</p>
            <p>{ componentTexts.three }</p>
            <p>{ componentTexts.four }</p>
            <p>{ componentTexts.five }</p>
            <p>{ componentTexts.six }</p>
            <p>{ componentTexts.seven }</p>
        </StyledHistoryModal>
    )
}