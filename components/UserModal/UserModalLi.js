import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
    color: var(--yellow);
    span{
        color: white;
    }
`;

function UserModalLi(props) {

    const { name, value } = props;

    return (
        <Li>* <span>{name}</span>: {value}</Li>
    )
}

export default UserModalLi