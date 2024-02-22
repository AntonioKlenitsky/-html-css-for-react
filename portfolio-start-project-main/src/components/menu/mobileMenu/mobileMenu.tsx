import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}/>

            <MobileMenuPopup isOpen={false}>
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
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    font-size: 21px;
    padding-right: 100px;
    @media ${theme.media.tablet} {
        //display: block;
    }
`
const BurgerButton = styled.button <{ isOpen: boolean }>`
    position: fixed;
    width: 30px;
    height: 30px;
    border: 1px solid red;
    z-index: 99999;
    top: 36px;
    right: 30px;
    
    &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        right: 0;
        top: 5px;
        transform: translateY(2px);
        ${props => props.isOpen && css <{ isOpen: boolean }>`
                transform: rotate(-45deg) translate(-6px, 6px);
            `}
    }
    
    &::after {
        content: "";
        display: inline-block;
        width: 70%;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        right: 0;
        transform: translateY(2px);
        ${props => props.isOpen && css <{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 100%;
            `}
    }
    
`

const MobileMenuPopup = styled.div <{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.primaryBg};
    opacity: 80%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;


    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

`
