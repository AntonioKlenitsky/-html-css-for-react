import React from 'react';
import styled from "styled-components";
import {WorkImage} from "./work/work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Image1 from "../../../assets/images/anton/army.jpg";
import Image2 from "../../../assets/images/anton/bsb12.jpeg";
import Image3 from "../../../assets/images/anton/photosil1.jpg";
import Image4 from "../../../assets/images/anton/sil3.jpg";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Works = () => {
    return (
        <StyledWork>
            <Container>
                <TitleWork> My Work Experiance   </TitleWork>
                <FlexWrapper justify={"center"} wrap={"wrap"} gap={"25px"}>
                    <WorkImage id={"1"} src={Image1} companyName={"Armed forces"} jobTitle={"Gunner"} jobTime={"2019-2021"}/>
                    <WorkImage id={"2"} src={Image2} companyName={"BSB Bank"} jobTitle={"Junior Specialist"} jobTime={"2021"}/>
                    <WorkImage id={"3"} src={Image3} companyName={"StroyInvestLeasing LLC"} jobTitle={"Specialist"} jobTime={"2021-2022"}/>
                    <WorkImage id={"4"} src={Image4} companyName={"StroyInvestLeasing LLC"} jobTitle={"Lead Specialist"} jobTime={"2022-2023"}/>
                </FlexWrapper>
            </Container>
        </StyledWork>
    );
};

const StyledWork = styled.section`
    padding: 85px 87px 165px 65px;
    border-top: 2px solid #626262;
    @media ${theme.media.mobile} {
        border-block: none;
        padding: 0;
    }
`
const TitleWork=styled.span`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:57, Fmin:24})}
    //font-size: 57px;
    //    font-weight: 600;
        letter-spacing: 0.05em;
        position: relative;
        top: -125px;
        left: -10px;
        background: rgb(31, 31, 31);
        white-space: break-spaces;
    @media ${theme.media.mobile} {
        top: -30px;
        left: 0;
    }
        
    `