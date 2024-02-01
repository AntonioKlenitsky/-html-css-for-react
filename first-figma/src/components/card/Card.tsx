import React from 'react';
import {StyleImage} from "../../styles/StyleImage";
import image1 from "../../assets/images/image1.svg";
import {Title} from "../../styles/Title";
import {Text} from "../../styles/Text";
import {Btn} from "../../styles/Btn";
import {StyledCard} from "../../styles/Card";
import styled from "styled-components";

type CardPropsType = {
    title: string
    text: string
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <StyleImage src={image1} alt="logo"/>
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

const Content = styled.div`
    padding: 0 10px;
`
const BtnWrapper = styled.div`
    display: flex;
    gap: 12px;
`
