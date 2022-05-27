import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useDBContext } from '../../contexts/DBContext';
import { UseTextsContext } from '../../contexts/TextsContext';
import { useTimeRecordContext } from '../../contexts/TimeRecordContext';
import { getTotalSumOfARecord } from '../../functions/getTotalSumOfARecord';
import { getMonthLevelData } from '../../functions/getMonthLevelData';
import UserModalNewEmailForm from './UserModalNewEmailForm';
import UserModalNewPasswordForm from './UserModalNewPasswordForm';
import { UseBestDayContext } from '../../contexts/BestDayContext';
// import axios from 'axios';
import UserModalLi from './UserModalLi';
import ModalButton from '../Modal/ModalButton';
import ModalTitle from '../Modal/ModalTitle';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';

const StyledUserModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: left;
    font-size: 0.8rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const P = styled.p`
    text-align: center;
    font-size: 0.8rem;
    span{
        color: var(--yellow);
    }
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const ImageDiv = styled.span`
    width: 2.75rem;
`;

export default function UserModal(props) {

    const { userData, setUserData } = useDBContext();
    const { appTexts } = UseTextsContext();
    const { timeRecord } = useTimeRecordContext();
    const { bestDay } = UseBestDayContext();

    const { closeModal } = props;
    
    const { name, description, nextLevel, nextLevelDescription, img } = getMonthLevelData(timeRecord);
    const componentTexts = appTexts.header.UserModal,
        logoutText = appTexts.header.AuthenticationModal.logOut
    ;
    
    function logoutBtnHandler() {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/api/auth/logout', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
        })
        .catch(err=>console.log(err));
        setUserData(null)
    }

    return(
        <StyledUserModal>
            <ModalTitle specialTitle={true}> { userData.nickname } <ImageDiv><Image src={img} alt="sword" /></ImageDiv> </ModalTitle>
            <Ul>
                <UserModalLi name={"Your current email"} value={userData.email}/>
                <UserModalLi name={componentTexts.bestDay} value={(bestDay.date ? bestDay.date + " - " + (bestDay.miliSeconds/(1000*60*60)).toFixed(3) + "hrs": "----")}/>
                <UserModalLi name={componentTexts.monthLevel} value={name + " Sword " + description}/>
                <UserModalLi name={componentTexts.nextLevel} value={(nextLevel ? (nextLevel + " Sword " + nextLevelDescription) : "No more levels :)")}/>
                <UserModalLi name={componentTexts.totalHours} value={Math.floor(getTotalSumOfARecord(timeRecord)/(1000*60*60))}/>
                <UserModalLi name={componentTexts.accountDate} value={(new Date(userData.created_at)).toLocaleDateString()}/>
            </Ul>
            <UserModalNewPasswordForm />
            <UserModalNewEmailForm />
            <P>If you have a recommendation, email me at <span>abelqh9@gmail.com</span> :)</P>
            <ModalButton text={logoutText} clickHandler={e=>{logoutBtnHandler();closeModal();}} />
        </StyledUserModal>
    )
}