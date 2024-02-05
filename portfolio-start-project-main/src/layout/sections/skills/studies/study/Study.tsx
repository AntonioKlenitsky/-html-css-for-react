import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../../components/icon/Icon";



type StudyPropsType = {
    establishmentName: string
    directionName: string
    yearOfEnding: string

}
export const Study = (props:StudyPropsType) => {
    return (
        <StyleStudy>
            <StyledIcon>
                <Icon iconId={'bookSvg'}/>
            </StyledIcon>
            <EstablishmentName>{props.establishmentName}</EstablishmentName>
            <DirectionName>{props.directionName}</DirectionName>
            <YearOfEnding>{props.yearOfEnding}</YearOfEnding>
        </StyleStudy>
    );
};

const StyleStudy =styled.section`
    `
const StyledIcon = styled.div`
    min-height: 96px;
    border-radius: 50%;
    background: linear-gradient(180.00deg, rgb(21, 185, 185),rgb(60, 29, 255) 100%);
    display: flex;
    justify-content: center;
    align-items: center;

`
const EstablishmentName =styled.div`
    `
const DirectionName =styled.div`
    `
const YearOfEnding =styled.div`
    
 `



