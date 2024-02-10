import React from 'react';
import {StyleImage} from "../../styles/StyleImage";
import image1 from "../../assets/images/image1.svg";
import {Title} from "../../styles/Title";
import {Text} from "../../styles/Text";
import {Btn} from "../../styles/Btn";
import styled from "styled-components";



type CardPropsType = {
    title:string
    text:string
    imgSrc: string
}

export const Card = (props:CardPropsType) => {
    return (
        <StyledCard >
            <StyleImage src={props.imgSrc} alt="logo"/>
            <Content>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <BtnWrapper>
                    <Btn type="primary">See more</Btn>
                    <Btn type="secondary">Save</Btn>
                </BtnWrapper>
            </Content>
        </StyledCard>
    );
};

export const StyledCard = styled.div`
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    border-radius: 15px;
    max-width: 300px;
    width: 100%;
    padding: 10px 10px 22px;
`

const Content = styled.div`
    padding: 0 10px;
`
const BtnWrapper = styled.div`
    display: flex;
    gap: 12px;
`
