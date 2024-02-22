import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

type WorkPropsType = {
    id: string
    src:string
    companyName?:string
    jobTitle?:string
    jobTime?:string
}
export const WorkImage = (props:WorkPropsType) => {
    return (
        <WorkBlock>
            <Image src={props.src}/>
            <Content>
                <WorkTitle>{props.companyName}</WorkTitle>
                <Description>{props.jobTitle}</Description>
                <Time>{props.jobTime}</Time>
            </Content>
        </WorkBlock>
    );
};

const Content = styled.div`
    transform: translateY(100%);
    transition: .2s;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:14, Fmin:7})}
    letter-spacing: 0.05em;
    color: white;
`

const WorkBlock = styled.div`
    position: relative;
    height: 452px !important;
    max-width: 602px;
    width: 100%;
    overflow: hidden;
    &:hover {
        ${Content} {
            transform: translateY(0);
        }
    }

    @media ${theme.media.mobile} {
        height: 225px !important;
        max-width: 300px;
    }
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const WorkTitle = styled.h3`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:26, Fmin:12})};
    line-height: 1.5;
`
const Description = styled.span`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:14, Fmin:7})}
`
const Time = styled.span`
    ${font({ family:"'Poppins', sans-serif", weight: 600, Fmax:14, Fmin:6})}
`
