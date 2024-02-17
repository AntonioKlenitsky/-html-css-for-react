import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {LinearProgressBar} from "../../../../../components/linearProgress/LinearProgressBar";



type LanguagePropsType = {
    languageName: string
    quality: string
}
export const Language = (props:LanguagePropsType) => {
    return (
        <StyleLanguage>
            <FlexWrapper justify={"space-between"} align={"start"} direction={"column"} gap={"15px"}>
                <ProgressBarTitle>
                       <Title>{props.languageName}</Title>
                        <Subtitle>{props.quality}</Subtitle>
                </ProgressBarTitle>
                <LinearProgressBar text={props.quality}/>
            </FlexWrapper>
        </StyleLanguage>
    );
};
const StyleLanguage =styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    `
const ProgressBarTitle =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    // как выровнять subtitle по уровню линейного прогрессбара
`
const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.05em;
`

const Subtitle = styled.div`
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.05em;
    
`


