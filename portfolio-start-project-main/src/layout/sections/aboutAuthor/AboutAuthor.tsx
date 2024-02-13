import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/images/rectangle.jpg'
import styled from "styled-components";
import {Container} from "../../../components/Container";
export const AboutAuthor = () => {
    return (
        <SectionAboutAuthor>
            <Container>
                <FlexWrapper align={"left"}  >
                    <StylePhoto>
                        <Photo src={photo} alt={"oops"}/>
                    </StylePhoto>
                    <StyleInfo>
                        <About>About</About>
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
    
`
const StylePhoto = styled.div`
    width: 50%;
`
const Photo = styled.img`
    max-width:470px;
    max-height:500px;
`
const StyleInfo = styled.div`
    max-width: 521px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const About = styled.p`
    font-size: 94px;
    font-weight: 600;
    letter-spacing: 0.05em;
`

const SectionTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
`