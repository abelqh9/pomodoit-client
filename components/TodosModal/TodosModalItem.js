import React, { useState, useEffect } from 'react';
import Image from 'next/dist/client/image';
import styled, { css } from 'styled-components'
import deleteIcon from '../../public/delete_forever_white_24dp.svg';
import recoverIcon from '../../public/push_pin_white_24dp.svg';
import { useTodosContext } from '../../contexts/TodosContext';
import { convert_MsToHrsMinsSecsFormat } from '../../helpers/convert_MsToHrsMinsSecsFormat';
import { desktopAndIpadPortrait } from '../../helpers/querysCss';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import RemoveTodoModal from '../RemoveTodoModal';
import clickSoundUrl from '../../public/minecraft_click.mp3';

const StyledTodosModalItem = styled.div`
    width: 99%;
    text-align: center;
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    font-size: 0.85rem;
    border-bottom: var(--yellow) 1px solid;
    margin-top: 0.5rem;
    ${desktopAndIpadPortrait()}{
        font-size: 1rem;
    }
`;

const NameSpan = styled.span`
    text-align: left;
    width: 52.5%;
    ${p=>p.isDone && css`opacity: 0.5;`}
`;

const TimeSpan = styled.span`
    width: 17.5%;
    padding: 0 5px;
    word-wrap: break-word;
    ${p=>p.isDone && css`opacity: 0.5;`}
`;

const CreationSpan = styled.span`
    width: 17.5%;
    padding: 0 5px;
    word-wrap: break-word;
    ${p=>p.isDone && css`opacity: 0.5;`}
`;

const OptionsSpan = styled.span`
    width: 12.5%;
    display: flex;
    justify-content: center;
    gap: 0.25vw;
    padding: 0 5px;
    img{
        width: 1.35rem;
        cursor: pointer;
    }
`;

export default function TodosModalItem(props) {

    const { toggleItIsRecentPropOfATodo } = useTodosContext();
    const [ isOpen, openModal, closeModal ] = useModal();

    const { name, timeRegister, creationDate, isDone } = props.todo;

    const [clickAudio, setClickAudio] = useState(null)

    useEffect(() => setClickAudio(new Audio(clickSoundUrl)), [])

    return(
        <StyledTodosModalItem>
            <NameSpan isDone={isDone}>{name}</NameSpan>

            <TimeSpan isDone={isDone}>{convert_MsToHrsMinsSecsFormat(timeRegister)}</TimeSpan>

            <CreationSpan isDone={isDone}>{creationDate.day<10?("0"+creationDate.day):creationDate.day}/{(creationDate.month+1)<10?("0"+(creationDate.month+1)):creationDate.month+1}/{creationDate.year}</CreationSpan>

            <OptionsSpan>
                <Image onClick={e => {toggleItIsRecentPropOfATodo(name); clickAudio.play();}} src={recoverIcon} alt="recover" />
                <Image onClick={e => {openModal(); clickAudio.play();}}  src={deleteIcon} alt="delete" />
            </OptionsSpan>

            {isOpen && <Modal closeModal={closeModal} withoutCloseButton={true}> <RemoveTodoModal todoName={name}/> </Modal>}
        </StyledTodosModalItem>
    )
}