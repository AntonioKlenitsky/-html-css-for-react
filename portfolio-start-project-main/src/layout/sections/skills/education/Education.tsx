import React from 'react';
import {StyleTitle} from "./StyleTitle";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {Language} from "./laguages/Language";
import {Study} from "./studies/Study";


export const Education = () => {
    return (
        <SectionEducation>
            <Container>
                <FlexWrapper justify={"space-between"} align={"flex-start"} >
                    <StyleEducation>
                        <StyleTitle>Language</StyleTitle>
                        <Language languageName={"English"} quality={"Fluent"}></Language>
                        <Language languageName={"French"} quality={"Good"}></Language>
                    </StyleEducation>
                    <StyleStudies>
                        <StyleTitle>Studies</StyleTitle>
                        <Study establishmentName={"Christ University"} directionName={"BBA"}
                               yearOfEnding={"2019"}></Study>
                        <Study establishmentName={"Christ University"} directionName={"PUC"}
                               yearOfEnding={"2016"}></Study>
                    </StyleStudies>
                </FlexWrapper>
            </Container>
        </SectionEducation>
    );
};

const SectionEducation = styled.div`
    margin-bottom:120px;

`
const StyleEducation = styled.div`
    max-width: 50%;
`
const StyleStudies = styled.div`
    max-width: 50%;

`
