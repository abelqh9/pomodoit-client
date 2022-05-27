import React, { useState } from 'react';
import styled from 'styled-components'
import HistoryModal from '../HistoryModal';
import AuthModal from '../AuthModal/AuthModal';
import StatisticModal from '../StatisticModal/StatisticModal';
import TodosModal from '../TodosModal/TodosModal';
import UserModal from '../UserModal/UserModal';
import { useDBContext } from '../../contexts/DBContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { useTimeRecordContext } from '../../contexts/TimeRecordContext';
import { getMonthLevelData } from '../../functions/getMonthLevelData';
import HeaderButton from './HeaderButton';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';

const StyledHeaderButtons = styled.div`
`;

export default function HeaderButtons () {

    const { userData } = useDBContext();
    const { timeRecord } = useTimeRecordContext();
    const { appTexts, changeLanguage, language } = UseTextsContext();

    const [ isOpen, openModal, closeModal ] = useModal();
    
    const [ModalContent, setModalContent] = useState(null);

    function headerButtonHandler(modalContent) {
        setModalContent(() => modalContent);
        openModal();
    }

    const historyModalTitle = appTexts.header.historyModal.title,
        statisticModalTitle = appTexts.header.RecordsModal.title,
        TodosModalTitle = 'ToDos',
        userModalTitle = userData && userData.nickname,
        auhtModalTitle = appTexts.header.AuthenticationModal.logIn
    ;

    return(
        <StyledHeaderButtons>
            {/* <HeaderButton clickHandler={changeLanguage} text={language} /> */}
            <HeaderButton clickHandler={e => headerButtonHandler(HistoryModal)} text={historyModalTitle} />
            <HeaderButton clickHandler={e => headerButtonHandler(StatisticModal)} text={statisticModalTitle} />
            <HeaderButton clickHandler={e => headerButtonHandler(TodosModal)} text={TodosModalTitle} />
            {userData 
                ? <HeaderButton clickHandler={e => headerButtonHandler(UserModal)} text={userModalTitle}
                    isSpecial={true} imgUrl={getMonthLevelData(timeRecord).img}/>
                : <HeaderButton clickHandler={e => headerButtonHandler(AuthModal)} text={auhtModalTitle} />}
            
            {isOpen && <Modal closeModal={closeModal}> 
                <ModalContent closeModal={closeModal}/>
            </Modal>}
        </StyledHeaderButtons>
    )
}