import React from 'react';
import {StyleTitle} from "./StyleTitle";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Language} from "./language/Language";

export const Languages = () => {
    return (
        <SectionLanguage>
            <StyleTitle>language</StyleTitle>
            <FlexWrapper>
                <Language languageName={"English"} quality={"Fluent"}></Language>
                <Language languageName={"French"} quality={"Good"}></Language>
            </FlexWrapper>
        </SectionLanguage>
    );
};

const SectionLanguage = styled.div`
    background: rgb(31, 31, 31);
`