import React from 'react';
import photo from '../../../assets/images/anton/logo1.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {DownloadButton} from "../../../components/button/StyledButton";
import {Container} from "../../../components/Container";


export const Main = () => {
    return (
        <SectionMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Represent>
                        <MainTitle>Welcome </MainTitle>
                        <NamePerson>I’m Anton<br/> Klenitsky</NamePerson>
                        <NameFunction>Frontend Developer</NameFunction>
                        <DownloadButton>Download CV</DownloadButton>
                    </Represent>
                    <Photo src={photo} alt={"oops"}/>
                </FlexWrapper>
            </Container>
        </SectionMain>
    );
};


const SectionMain = styled.section`
`
const Represent = styled.div`
    padding-left: 68px;
    display: flex;
    flex-direction: column;
`
const MainTitle = styled.span`
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 0.36em;
    text-transform: uppercase;
`
const NamePerson = styled.span`
    font-size: 67px;
    font-weight: 600;
`
const NameFunction = styled.h1`
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    padding-bottom: 35px;
`
const Photo = styled.img`
    max-width: 566px;
    max-height: 808px;
    object-fit: cover;
    justify-content: flex-start;
    position: relative;
    bottom: 110px;
    padding-right: 150px;
    z-index: -1;
`



