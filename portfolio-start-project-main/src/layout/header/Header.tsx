import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <span>
            Nakul Kumar
            </span>
            <Menu></Menu>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
   display: flex;
    justify-content: space-between;
    background: rgb(31, 31, 31);
`