import React from 'react';
import styled from "styled-components";
import {StyleTitle} from "../languages/StyleTitle";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Study} from "./study/Study";

export const Studies = () => {
    return (
        <SectionStudies>
            <StyleTitle>Studies</StyleTitle>
            <FlexWrapper>
                <Study establishmentName={"Christ University"} directionName={"BBA"} yearOfEnding={"2019"}></Study>
                <Study establishmentName={"Christ University"} directionName={"PUC"} yearOfEnding={"2016"}></Study>
            </FlexWrapper>
        </SectionStudies>
    );
};

const SectionStudies = styled.div`
    background: rgb(31, 31, 31);
`

