import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/images/anton/logo1.jpg'
import photoA from '../../../assets/images/A.png'
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Icon} from "../../../components/icon/Icon";
export const AboutAuthor = () => {
    return (
        <SectionAboutAuthor>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"} >
                    <StylePhoto>
                        <Photo src={photo} alt={"oops"}/>
                    </StylePhoto>
                    <StyleInfo>
                        <About>
                            About
                         <StyleA src={photoA} alt={"oops"}/>
                        </About>
                        <SectionTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus
                            fusce
                            fringilla. Aliquam blandit enim odio cursus id. Pulvinar commodo pellentesque non massa, nunc
                            massa
                            nisi est id. Diam est molestie massa commodo pulvinar aliquam arcu gravida. Dictum pretium
                            senectus
                            dolor vulputate tempor ac vel. Placerat proin sed risus at fusce aliquam. Convallis varius
                            auctor
                            quam fusce diam. Vulputate enim est nibh diam pellentesque. Adipiscing dolor turpis egestas
                            velit
                            sit feugiat ultricies.
                            Id ac placerat dolor sem neque elit. Ut nisl turpis nisi etiam ac nibh.
                        </SectionTitle>
                    </StyleInfo>
                </FlexWrapper>
            </Container>
        </SectionAboutAuthor>
    );
};

const SectionAboutAuthor = styled.section`
background-color: rgb(43, 42, 42);
    padding: 65px 89px 59px 115px;
    width: 100%;
    @media ${theme.media.mobile} {
        padding: 40px 0 0 0;
        }
`
const StylePhoto = styled.div`
    width: 50%;
    max-width:607px;
    max-height:506px;
    position: relative;
    @media ${theme.media.mobile} {
        &::before {
            content: "";
            position: absolute;
            background-color: ${theme.colors.primaryBg};
            width: 160px;
            height: 300px;
            top: -20px;
            left: -20px;
            z-index:0;
        }
        }
`
const Photo = styled.img`
    max-width: 348px;
    max-height: 500px;
    width: 100%;
    object-fit: cover;
    @media ${theme.media.mobile} {
        position: relative;
        z-index: 1;
    }
`
const StyleInfo = styled.div`
    max-width: 521px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media ${theme.media.mobile} {
    max-width: 305px;
    }
`
const About = styled.p`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:94, Fmin:46})}
    //font-size: 94px;
    //font-weight: 600;
    letter-spacing: 0.05em;
    display: block;
    position: relative;
    z-index:0;
`
const StyleA=styled.img`
    display: none;
    position: absolute;
    z-index: -1;
    @media ${theme.media.mobile} {
        display: block;
        position: relative;
        top:-55px;
        left: 10px;
        width: 46px;
        height: 63px;
    }
`

const SectionTitle = styled.p`
    ${font({ family:"'Poppins', sans-serif", weight: 400, Fmax:14, Fmin:8})}
    //font-size: 14px;
    //font-weight: 400;
    letter-spacing: 0.05em;
    @media ${theme.media.mobile} {
        position: relative;
        top: -50px;
    }
`