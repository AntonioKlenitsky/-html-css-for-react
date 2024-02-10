import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}   >
                    <StyledLogo>
                    Nakul Kumar
                    </StyledLogo>
                    <Menu></Menu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
   background-color: transparent;
    padding: 70px 0 0 0;

`
const StyledLogo = styled.span`
    padding-left: 48px;
    font-size: 32px;
    font-weight: 400;
    font-family: Alex Brush, sans-serif;
    `