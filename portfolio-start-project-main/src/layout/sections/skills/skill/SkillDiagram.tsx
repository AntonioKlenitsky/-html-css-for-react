import styled from "styled-components";

type SkillDiagramPropsType = {
    skillDiagramId:string

}


export const SkillDiagram = styled.div <SkillDiagramPropsType>`
    width: 280px;
    min-height: 280px;
    border-radius: 50%;
    background: linear-gradient(180.00deg, rgb(21, 185, 185),rgb(60, 29, 255) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 56px;
`
