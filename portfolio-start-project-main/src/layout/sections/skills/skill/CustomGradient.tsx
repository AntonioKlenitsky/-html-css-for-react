import React from 'react';

export const CustomGradient = () => {
    return (
        <defs>
            <linearGradient id={"customGradient"} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(21, 185, 185)"/>
                <stop offset="100%" stopColor="rgb(60, 29, 255)"/>
            </linearGradient>
        </defs>
    )
        ;
};

