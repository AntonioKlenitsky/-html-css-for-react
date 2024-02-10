import React from 'react';
import styled from "styled-components";
import {DownloadButton} from "../../components/button/StyledButton";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Title>Intrested in My Work</Title>
                    <p>Download my cV to know more about me</p>
                    <StyledButton>Download CV</StyledButton>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter =styled.footer`
    padding-bottom: 180px;
    p{
        font-size: 19px;
        font-weight: 400;
        letter-spacing: 0.05em;
        color: rgb(158, 158, 158);
    }
    `
const Title = styled.h2`
    font-size: 57px;
    font-weight: 600;
    letter-spacing: 0.05em;
`

const StyledButton = styled(DownloadButton)`
    margin: 24px 43px;
`