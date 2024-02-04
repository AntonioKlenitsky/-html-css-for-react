import React from 'react';
import styled from "styled-components";
import {SkillDiagram} from "./SkillDiagram";


type SkillPropsType = {
    skillId:string
    knowledgeLevel:string
    knowledgeName: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillDiagram skillDiagramId={"code"}>
                <KnowledgeLevel>{props.knowledgeLevel}</KnowledgeLevel>
            </SkillDiagram>
            <KnowledgeName>{props.knowledgeName}</KnowledgeName>
        </StyledSkill>
    );
};

const StyledSkill =styled.div `
    
`
const KnowledgeLevel = styled.div`
    
`
const KnowledgeName = styled.div`
    
`