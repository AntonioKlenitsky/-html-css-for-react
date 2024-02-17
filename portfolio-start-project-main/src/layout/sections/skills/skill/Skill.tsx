import React from 'react';
import styled from "styled-components";
import {CircularProgress} from "../../../../components/circularProgress/CircularProgress";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type SkillPropsType = {
    skillId:string
    knowledgeLevel:number
    knowledgeName: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"} >
                <StyleCircular>
                    <CircularProgress size={"280"} strokeWidth={"30"} percentage={props.knowledgeLevel}/>
                </StyleCircular>
                <KnowledgeName>{props.knowledgeName}</KnowledgeName>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill =styled.div `
    
`
const KnowledgeName = styled.div`
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 0.05em;
`
const StyleCircular = styled.div`
    padding-bottom: 44px;
    `

