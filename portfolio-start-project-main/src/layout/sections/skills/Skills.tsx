import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "./skill/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <SectionSkills>
            <Container>
                <SectionTitle>
                    My Skills
                </SectionTitle>
                <FlexWrapper gap={"80px"}>
                    <Skill skillId={"1"} knowledgeLevel={4.3} knowledgeName={"Adobe PhotoShop"}></Skill>
                    <Skill skillId={"2"} knowledgeLevel={3.0} knowledgeName={"Microsoft Excel"}></Skill>
                    <Skill skillId={"3"} knowledgeLevel={4.1} knowledgeName={"Javascript"}></Skill>
                    <Skill skillId={"4"} knowledgeLevel={4.7} knowledgeName={"React"}></Skill>
                </FlexWrapper>
            </Container>
        </SectionSkills>
    );
};

const SectionSkills = styled.section`
    padding-bottom: 112px;
`

