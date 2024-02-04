import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "./skill/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <SectionSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper>
                <Skill skillId={"1"} knowledgeLevel={"4.0"} knowledgeName={"Adobe PhotoShop"}></Skill>
                <Skill skillId={"2"} knowledgeLevel={"4.8"} knowledgeName={"Microsoft Excel"}></Skill>
            </FlexWrapper>
        </SectionSkills>
    );
};

const SectionSkills = styled.section`
    background: rgb(31, 31, 31);
    `