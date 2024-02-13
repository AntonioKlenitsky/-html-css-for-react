import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Portfolio</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    font-size: 20px;
    padding-right: 100px;
    ul {
        display: flex;
        gap: 55px;
    }
`
