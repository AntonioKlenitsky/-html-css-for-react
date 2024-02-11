import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {StatusBar} from "./StatusBar";



type LanguagePropsType = {
    languageName: string
    quality: string
}
export const Language = (props:LanguagePropsType) => {
    return (
        <StyleLanguage>
            <FlexWrapper justify={"space-between"}>
                <LanguageName>{props.languageName}</LanguageName>
                <Quality>{props.quality}</Quality>
            </FlexWrapper>
            <StatusBar/>
        </StyleLanguage>
    );
};

const StyleLanguage =styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 27px;
    `
const Quality =styled.div`
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.05em;
    `
const LanguageName =styled.div`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.05em;
    
 `




