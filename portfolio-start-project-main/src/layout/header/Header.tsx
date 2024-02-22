import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "../../components/menu/mobileMenu/mobileMenu";
import {theme} from "../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper  justify={'space-between'} align={"center"}    >
                    <StyledLogo href="">
                        Anton Klenitsky
                    </StyledLogo>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #1f1f1fcf;
    padding: 45px 0 35px 0;
    position: fixed;
    width: 100%;
    z-index: 999999;
    @media ${theme.media.mobile} { 
        background-color:transparent;
        
    }
`
const StyledLogo = styled.a`
    color: white;
    font-size: 32px;
    font-weight: 400;
    font-family: Alex Brush, sans-serif;
    //a {
    //    top: 0;
    //    left: 0;
    //    scroll-behavior: smooth;
    //}
    @media ${theme.media.mobile} {
        font-size: 14px;
       //a {
       //    top: 0;
       //    left: 0;
       //    scroll-behavior: smooth;
       //}
    }
    `
