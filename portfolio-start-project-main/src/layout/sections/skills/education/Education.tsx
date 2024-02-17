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
                        <Language languageName={"English"} quality={"Fluent"}></Language>
                        <Language languageName={"German"} quality={"Good"}></Language>
                    </StyleEducation>
                    <FlexWrapper align={"left"} >
                        <StyleStudies>
                            <StyleTitle>Studies</StyleTitle>
                            <Study establishmentName={"BSEU"}
                                   directionName={"Finance"}
                                   yearOfEnding={"2025"}/>
                            <Study establishmentName={"IT-INCUBATOR"}
                                   directionName={"Frontend"}
                                   yearOfEnding={"2025"}/>
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
