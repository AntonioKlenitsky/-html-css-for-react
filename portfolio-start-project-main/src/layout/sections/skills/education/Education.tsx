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
                <FlexWrapper gap={"230px"} >
                    <StyleEducation>
                        <StyleTitle>Language</StyleTitle>
                        <Language languageName={"English"} quality={"Professional"}></Language>
                        <Language languageName={"French"} quality={"Advanced"}></Language>
                    </StyleEducation>
                    <FlexWrapper align={"left"} >
                        <StyleStudies>
                            <StyleTitle>Studies</StyleTitle>
                            <Study establishmentName={"Christ University"}
                                   directionName={"BBA"}
                                   yearOfEnding={"2019"}/>
                            <Study establishmentName={"Christ University"}
                                   directionName={"PUC"}
                                   yearOfEnding={"2016"}/>
                        </StyleStudies>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </SectionEducation>
    );
};

const SectionEducation = styled.div`
    padding-bottom: 120px;
`
const StyleEducation = styled.div`
    width: 490px;
`
const StyleStudies = styled.div`

`
