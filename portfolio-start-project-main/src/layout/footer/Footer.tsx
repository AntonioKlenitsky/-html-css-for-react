import React from 'react';
import styled from "styled-components";
import {DownloadButton} from "../../components/button/StyledButton";

export const Footer = () => {
    return (
        <StyledFooter>
            <Title>Intrested in my Work</Title>
            <p>Download my cV to know more about me</p>
            <StyledButton>Download CV</StyledButton>
        </StyledFooter>
    );
};

const StyledFooter =styled.footer`
    background: rgb(31, 31, 31);
    `
const Title = styled.h5`
`
const StyledButton = styled(DownloadButton)`

`