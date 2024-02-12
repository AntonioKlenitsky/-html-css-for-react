import React from 'react';
import {Card} from "../card/Card";
import image1 from "../../assets/images/image1.svg";
import image2 from "../../assets/images/LandscapeColor.jpg";
import image3 from "../../assets/images/983703508.jpg";


const cardData = [
    {
        imgSrc: image1,
        title: "Hello",
        text: "Hi"
    },
    {
        imgSrc: image2,
        title: "Hello 2",
        text: "Hi 2"
    },
    {
        imgSrc: image3,
        title: "Hello 3",
        text: "Hi 3"
    }
]


const hellos = [1, 2, 3]


export const Cards = () => {
    return (
    <>
        {cardData.map((c, index) => <Card key={index}
                                          title={c.title}
                                          text={c.text}
                                          imgSrc={c.imgSrc}/>)}

        {
            hellos.map((a, index)=>{
                return(
                    <p key={index}>Hello {a}</p>
                )
            })
        }
    </>
    );
};

