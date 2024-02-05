import React from 'react';
import styled from "styled-components";
import {WorkImage} from "./work/work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Image1 from "../../../assets/images/unsplash_glRqyWJgUeY.png";
import Image2 from "../../../assets/images/unsplash_SpVHcbuKi6E.png";
import Image3 from "../../../assets/images/unsplash_iGheu30xAi8.png";
import Image4 from "../../../assets/images/unsplash_i_xVfNtQjwI.png";

export const Works = () => {
    return (
        <StyledWork>
            <WorkTitle>My Work Experiance</WorkTitle>
            <FlexWrapper>
                <WorkImage src={Image1}/>
                <WorkImage src={Image2}/>
                <WorkImage src={Image3}/>
                <WorkImage src={Image4}/>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.section `
background: rgb(31, 31, 31);;
`
const WorkTitle = styled.h4 `

`
