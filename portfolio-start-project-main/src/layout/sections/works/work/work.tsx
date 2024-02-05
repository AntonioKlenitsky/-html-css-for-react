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
    width: 602px;
    min-height: 452px;
`
