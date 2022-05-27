import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { UseTextsContext } from '../../contexts/TextsContext';
import recoverIcon from '../../public/push_pin_white_24dp.svg'
import deleteIcon from '../../public/delete_forever_white_24dp.svg'
import TodosModalTable from './TodosModalTable';
import { desktop, desktopAndIpadPortrait, ipadPortrait } from '../../helpers/querysCss';
import ModalTitle from '../Modal/ModalTitle';

const StyledTodosModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    ${desktop()}{
        width: 60vw;
    }
    ${ipadPortrait()}{
        width: 80vw;
    }
`;

const P = styled.p`
    ${desktopAndIpadPortrait()}{
        font-size: 1.25rem;
    }
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
    ${desktopAndIpadPortrait()}{
        width: 80vw;
        font-size: 1rem;
    }
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;

const ImgDiv = styled.div`
    width: 1.35rem;
`;

export default function TodosModal () {

    const { appTexts } = UseTextsContext()

    const componentTexts = appTexts.header.ToDosModal;

    return (
        <StyledTodosModal>
            <ModalTitle> { 'ToDos' } </ModalTitle>
            <P>{componentTexts.one}</P>
            <Ul>
                <Li>
                    <ImgDiv><Image src={recoverIcon} alt={"Recover"} layout='responsive'/></ImgDiv>
                    {componentTexts.twoOne}
                </Li>
                <Li>
                    <ImgDiv><Image src={deleteIcon} alt={"Delete"} layout='responsive'/></ImgDiv>
                    {componentTexts.twoTwo}
                </Li>
            </Ul>
            <TodosModalTable />
        </StyledTodosModal>
    )
}
