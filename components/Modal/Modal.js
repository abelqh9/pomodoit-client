import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Image from 'next/image'
import styled from 'styled-components'
import close from '../../public/clear_black_24dp.svg'
import clickSoundUrl from '../../public/minecraft_click.mp3';

const StyledModal = styled.div`
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
`;

const ContentSection = styled.section`
    position: relative;
    max-height: 90vh;
    max-width: 90vw;
    padding: 1rem;
    border-radius: var(--borderRadius);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--primary-background-color);
    &::-webkit-scrollbar{
        width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 8px;
        background-color: var(--yellow);
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
    img{
        filter: drop-shadow(var(--ImgsDropShadow));
    }
`;

function Modal(props) {
    
    const { closeModal, children, withoutCloseButton } = props;

    const [clickAudio, setClickAudio] = useState(null)
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])
    useEffect(() => setIsBrowser(true), [])

    function closeButtonHandler() {
        clickAudio.play();
        closeModal();
    }

    return isBrowser ? ReactDOM.createPortal(
        <StyledModal onClick={closeModal}>
            <ContentSection onClick={e => e.stopPropagation()}>
                {withoutCloseButton || <CloseButton onClick={closeButtonHandler}>
                    <Image src={close} alt="close" layout='responsive'/>
                </CloseButton>}
                {children}
            </ContentSection>
        </StyledModal>, document.getElementById('modal')
    ) : null
}

export default Modal