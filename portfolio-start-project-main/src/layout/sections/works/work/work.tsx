import React from 'react';
import styled from "styled-components";

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
            <Name>{props.companyName}</Name>
            <Subtitle>{props.jobTitle}<br/>{props.jobTime}</Subtitle>
        </WorkBlock>
    );
};

const WorkBlock = styled.div`
    
`
const Image = styled.img`
    min-height: 452px;
    max-width: 602px;
    margin-bottom: 15px;
    object-fit: cover;
    transition: 1s;
    &:hover {
        background: black;
        opacity: 40%;
        transition: 1s;
    }
`
const Name =styled.div`
    margin-top: -90px;
    position: relative;
    top: -55px;
    right: -65px;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: white;
    z-index: -1;
    &:hover {
        position: absolute;
        z-index: 1;
    }
`
const Subtitle =styled.div`
    position: relative;
    top: -55px;
    right: -65px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: white;
    z-index: -1;
    &:hover {
        position: absolute;
        z-index: 1;
    }

`
