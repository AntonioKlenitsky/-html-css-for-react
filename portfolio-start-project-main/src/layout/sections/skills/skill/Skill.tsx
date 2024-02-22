import React from 'react';
import styled from "styled-components";
import {CircularProgress} from "../../../../components/circularProgress/CircularProgress";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {font} from "../../../../styles/Common";
import {CircularProgressMobile} from "../../../../components/circularProgress/circularProgressMobile/CircularProgressMobile";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    skillId:string
    knowledgeLevel:number
    knowledgeName: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <StyleCircular>
                    <CircularProgress size={"280"} strokeWidth={"30"} percentage={props.knowledgeLevel}/>
                </StyleCircular>
                <StyleCircularMobile>
                    <CircularProgressMobile size={"96"} strokeWidth={"11"} percentage={props.knowledgeLevel}/>
                </StyleCircularMobile>
                <KnowledgeName>{props.knowledgeName}</KnowledgeName>
            </FlexWrapper>
        </StyledSkill>
    );
};


const StyledSkill =styled.div `
    
`
const KnowledgeName = styled.div`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:21, Fmin:7})}
    //font-size: 21px;
    //font-weight: 600;
    letter-spacing: 0.05em;
`
const StyleCircular = styled.div`
    padding-bottom: 44px;
    display: flex;
    gap: 80px;
    @media ${theme.media.mobile} {
        display: none;
    }
    `
const StyleCircularMobile =styled.div`
    display: none;
    @media ${theme.media.mobile} {
        display: block;
    }
`

