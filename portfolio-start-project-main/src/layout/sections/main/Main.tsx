import React from 'react';
import photo from '../../../assets/images/anton/logo1.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {DownloadButton} from "../../../components/button/StyledButton";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <SectionMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
                    <Represent>
                        <MainTitle>Welcome </MainTitle>
                        <NamePerson>I’m Anton Klenitsky</NamePerson>
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
    display: flex;
    flex-direction: column;
    @media ${theme.media.mobile} {
       align-items: center;
    }
`
const MainTitle = styled.span`
    ${font({ family:"'Poppins', sans-serif", weight: 300, Fmax:25, Fmin:17})}
    //font-size: 25px;
    //font-weight: 300;
    letter-spacing: 0.36em;
    text-transform: uppercase;
`
const NamePerson = styled.span`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:67, Fmin:30})}
    //font-size: 67px;
    //font-weight: 600;
    max-width: 666px;
`
const NameFunction = styled.h1`
    ${font({ family:"'Poppins', sans-serif", weight: 300, Fmax:20, Fmin:13})}
    //font-size: 20px;
    //font-weight: 300;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    padding-bottom: 35px;
`
const Photo = styled.img`
    max-width: 630px;
    max-height: 808px;
    object-fit: cover;
    object-position: top;
    padding-right: 100px;
    margin-bottom: 110px;
    @media ${theme.media.mobile} {
        width: 360px;
        height: 515px;
        padding-right:0;
        margin-bottom: 35px;
    }
`



