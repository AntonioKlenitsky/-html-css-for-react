import styled from "styled-components";
import React from "react";

type BtnPropsType = {
    type: string
}
 export const Btn =  styled.button<BtnPropsType>`
        border-radius: 5px;
        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 10px;
        line-height: 20px;
        min-width: 86px;
        height: 30px;
    ${(props) => {
        if (props.type === "primary") {
            return (`
        background: #4E71FE;
        border-style: none;
        color: #FFF;
        `);
        } else if (props.type === "secondary") {
        return (` 
        background-color: transparent;
        border-color: #4E71FE;
        color: #4E71FE;
        `);
        }
    }}`