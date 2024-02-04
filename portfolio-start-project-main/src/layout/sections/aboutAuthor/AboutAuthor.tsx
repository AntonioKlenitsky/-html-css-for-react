import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from '../../../assets/images/unsplash_OhKElOkQ3RE (1).webp'
import styled from "styled-components";
export const AboutAuthor = () => {
    return (
        <SectionAboutAuthor>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Photo src={photo} alt={"oops"}/>
                <div>
                    <span>About</span>
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
                </div>
            </FlexWrapper>
        </SectionAboutAuthor>
    );
};

const SectionAboutAuthor = styled.section`
background-color: rgb(43, 42, 42);
`

const Photo = styled.img`
    width: 470px;
    height: 518px;
    object-fit: cover;
`
const SectionTitle = styled.p`

`