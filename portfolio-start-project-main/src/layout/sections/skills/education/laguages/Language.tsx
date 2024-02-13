import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {LinearProgressBar} from "./LinearProgressBar";



type LanguagePropsType = {
    languageName: string
    quality: string
}
export const Language = (props:LanguagePropsType) => {
    return (
        <StyleLanguage>
            <FlexWrapper justify={"space-between"} align={"end"}>
                <LanguageName>{props.languageName}</LanguageName>
            </FlexWrapper>
                <LinearProgressBar text={props.quality}/>
        </StyleLanguage>
    );
};
const StyleLanguage =styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 27px;
    `
const LanguageName =styled.div`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.05em;
 `




