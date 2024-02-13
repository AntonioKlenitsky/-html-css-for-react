import React from 'react';
import styled from "styled-components";
import {WorkImage} from "./work/work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Image1 from "../../../assets/images/unsplash_glRqyWJgUeY.png";
import Image2 from "../../../assets/images/unsplash_SpVHcbuKi6E.png";
import Image3 from "../../../assets/images/unsplash_iGheu30xAi8.png";
import Image4 from "../../../assets/images/unsplash_i_xVfNtQjwI.png";
import {Container} from "../../../components/Container";

export const Works = () => {
    return (
        <StyledWork>
            <Container>
                <TitleWork> My Work Experiance   </TitleWork>
                <FlexWrapper justify={"space-between"} wrap={"wrap"} >
                    <WorkImage id={"1"} src={Image1} companyName={"Company Name"} jobTitle={"Sr.Manager"} jobTime={"2016-2022"}/>
                    <WorkImage id={"2"} src={Image2} companyName={"Company "} jobTitle={"Manager"} jobTime={"2016-2022"}/>
                    <WorkImage id={"3"} src={Image3} companyName={"Company Name"} jobTitle={"Sr.Manager"} jobTime={"2016-2022"}/>
                    <WorkImage id={"4"} src={Image4} companyName={"Company Name"} jobTitle={"Sr.Manager"} jobTime={"2016-2022"}/>
                </FlexWrapper>
            </Container>
        </StyledWork>
    )
        ;
};

const StyledWork = styled.section`
    padding: 85px 87px 165px 65px;
    border-top: 2px solid #626262;
`
const TitleWork=styled.span`
        font-size: 57px;
        font-weight: 600;
        letter-spacing: 0.05em;
        position: relative;
        top: -125px;
        left: -10px;
        background: rgb(31, 31, 31);
        white-space: break-spaces;
    `