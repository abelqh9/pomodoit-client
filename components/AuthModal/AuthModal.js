import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { UseTextsContext } from '../../contexts/TextsContext';
import AuthModalLogInForm from './AuthModalLogInForm';
import AuthModalSignUpForm from './AuthModalSignUpForm';
// import AuthModalResetPasswordForm from './AuthModalResetPasswordForm';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';
import clickSoundUrl from '../../public/minecraft_click.mp3'
import ModalTitle from '../Modal/ModalTitle';

const StyledAuthModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const OptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
`;

const OptionP = styled.p`
    font-size: 0.7rem;
    span{
        font-size: 0.75rem;
        cursor: pointer;
        color: var(--yellow);
    }
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
        span{
            font-size: 1.05rem;
        }
    }
`;

export default function AuthModal(props) {
    
    const { appTexts } = UseTextsContext();
    
    const { closeModal } = props;

    const [modalForm, setModalForm] = useState("logIn");
    const [clickAudio, setClickAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])

    const componentTexts =  appTexts.header.AuthenticationModal;

    function optionPHandler(newModalFormName) {
        clickAudio.play()
        setModalForm(newModalFormName);
    }

    return(
        <StyledAuthModal>
            <ModalTitle> { componentTexts[modalForm] } </ModalTitle>

            {modalForm === "logIn" && <AuthModalLogInForm closeModal={closeModal}/>}
            {modalForm === "signUp" && <AuthModalSignUpForm closeModal={closeModal}/>}
            {/* {modalForm === "resetPassword" && <AuthModalResetPasswordForm closeModal={closeModal}/>} */}
            
            <OptionsDiv>
                {modalForm !== "logIn" && (
                    <OptionP>
                        {componentTexts.alreadyAccount} <span onClick={e => optionPHandler("logIn")}>{componentTexts.logIn}</span>
                    
                    </OptionP>
                )}
                {modalForm !== "signUp" && (
                    <OptionP>
                        {componentTexts.needAccount} <span onClick={e => optionPHandler("signUp")}>{componentTexts.signUp}</span>
                    </OptionP>
                )}
                {/* {modalForm !== "resetPassword" && (
                    <OptionP>
                        {componentTexts.ForgotPassword} <span onClick={e => optionPHandler("resetPassword")}>{componentTexts.resetPassword}</span>
                    </OptionP>
                )} */}
            </OptionsDiv>
        </StyledAuthModal>
    )
}