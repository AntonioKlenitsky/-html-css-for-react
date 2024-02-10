import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src:string
}
export const WorkImage = (props:WorkPropsType) => {
    return (
            <Image src={props.src}/>
    );
};

const Image = styled.img`
    min-height: 452px;
    max-width: 602px;
    margin-bottom: 15px;
    width: 49%;
    display: flex;
    
`
