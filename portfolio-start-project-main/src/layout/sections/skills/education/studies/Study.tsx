import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../../components/FlexWrapper";



type StudyPropsType = {
    establishmentName: string
    directionName: string
    yearOfEnding: string

}
export const Study = (props:StudyPropsType) => {
    return (
        <StyleStudy>
            <FlexWrapper gap={"20px"} align={"center"}>
                <StyleIcon>
                    <Icon iconId={'bookSvg'}/>
                </StyleIcon>
                <StyleInfo>
                    <EstablishmentName>{props.establishmentName}</EstablishmentName>
                    <InfoWrapper>
                        <DirectionName>{props.directionName}</DirectionName>
                        <YearOfEnding>{props.yearOfEnding}</YearOfEnding>
                    </InfoWrapper>
                </StyleInfo>
            </FlexWrapper>
        </StyleStudy>
    );
};


const StyleStudy =styled.div`
    padding: 27px 0 0 11px;
    `
const StyleIcon = styled.div`
    min-height: 96px;
    min-width: 96px;
    border-radius: 50%;
    background: linear-gradient(180.00deg, rgb(21, 185, 185),rgb(60, 29, 255) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        max-width: 25px;
        max-height: 28px;
    }
    `
const StyleInfo=styled.div`
    `
const EstablishmentName =styled.div`
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.05em;
    `
const InfoWrapper =styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.05em;
    color: rgb(227, 225, 225);
    `
const DirectionName=styled.div`
    `
const YearOfEnding=styled.div`
    `



