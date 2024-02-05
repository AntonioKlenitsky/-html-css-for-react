import React from 'react';
import photo from '../../../assets/images/unsplash_OhKElOkQ3RE (1).webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {DownloadButton} from "../../../components/button/StyledButton";


export const Main = () => {
    return (
        <SectionMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
                <div>
                    <MainTitle>Welcome </MainTitle>
                    <NamePerson>I’m Nakul Kumar</NamePerson>
                    <NameFunction>CEO , UXM Creative Studio</NameFunction>
                    <DownloadButton>Download CV</DownloadButton>
                </div>
                <Photo src={photo} alt={"oops"}/>
            </FlexWrapper>
        </SectionMain>
    );
};



const SectionMain = styled.section`
    background: rgb(31, 31, 31);`
const MainTitle = styled.span`
`
const NamePerson=styled.span`
`
const NameFunction = styled.h1`
`

const Photo = styled.img`
    width: 566px;
    height: 807px;
    object-fit: cover;
`



