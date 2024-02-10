import styled from "styled-components";

type BtnPropsType = {
    type: string
}
 export const Btn =  styled.button<BtnPropsType>`
     border-radius: 5px;
     border-color: #4E71FE;
     font-family: Inter, sans-serif;
     font-weight: 700;
     font-size: 10px;
     line-height: 20px;
     min-width: 86px;
     min-height: 30px;
     ${(props) => {
         if (props.type === "primary") {
             return (`
        background: #4E71FE;
        color: #FFF;
        `)
         } else if (props.type === "secondary") {
             return (` 
        background-color: transparent;
        color: #4E71FE;
        `)
         }
     }}
 
    
 
 
 `