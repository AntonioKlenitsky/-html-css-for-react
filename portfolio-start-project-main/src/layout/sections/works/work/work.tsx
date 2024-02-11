import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src:string
    companyName?:string
    jobTitle?:string
    jobTime?:string
}
export const WorkImage = (props:WorkPropsType) => {
    return (
        <>
            <Image src={props.src}/>
            {/*<Name>{props.companyName}</Name>*/}
            {/*<Jobtitle>{props.jobTitle}</Jobtitle>*/}
            {/*<Jobtime>{props.jobTime}</Jobtime>*/}
        </>
    );
};

const Image = styled.img`
    min-height: 452px;
    max-width: 602px;
    margin-bottom: 15px;
    width: 49%;
    display: flex;
    &:hover {
      background: black;
        opacity: 60%;
        z-index: 1;
        transition: 1s;
    }
    &:hover {
        content: '';
        font-size: 26px;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: white;
    }
`
const Name =styled.div`
    margin-bottom: 12px;
    word-break: break-all;
    overflow:hidden;         // this hides the overflowing text
    white-space: nowrap
    
    `
const Jobtitle =styled.div`
    overflow: hidden;

`
const Jobtime =styled.div`
    overflow: hidden;

`