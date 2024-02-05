import React from 'react';
import styled from "styled-components";



type LanguagePropsType = {
    languageName: string
    quality: string
}
export const Language = (props:LanguagePropsType) => {
    return (
        <StyleLanguage>
            <LanguageName>{props.languageName}</LanguageName>
            <Quality>{props.quality}</Quality>
            <StyleStripe/>
        </StyleLanguage>
    );
};

const StyleLanguage =styled.section`
    `
const Quality =styled.div`
    `
const LanguageName =styled.div`
 `
const StyleStripe =styled.div`
 `



