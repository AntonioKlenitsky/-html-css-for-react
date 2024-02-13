import React,{useEffect, useState} from "react";


type CircularProgressPropsType = {
    size: string;
    strokeWidth: string;
    percentage: number;
}
export const CircularProgress = ({ size, strokeWidth, percentage}: CircularProgressPropsType) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    const viewBox = `0 0 ${size} ${size}`;
    const radius = (parseInt(size) - parseInt(strokeWidth)) / 2;

    const circumference = radius * Math.PI * 2;
    const dash = (progress*100/500) * circumference ;

    return (
        <svg width={size} height={size} viewBox={viewBox}>
            {/*<circle*/}
            {/*    fill="none"*/}
            {/*    stroke="#ccc"*/}
            {/*    cx={parseInt(size) / 2}*/}
            {/*    cy={parseInt(size) / 2}*/}
            {/*    r={radius}*/}
            {/*    strokeWidth={parseInt(strokeWidth)}*/}
            {/*/>*/}
            <circle
                fill="none"
                stroke="url(#customGradient)"
                cx={parseInt(size) / 2}
                cy={parseInt(size) / 2}
                r={radius}
                strokeWidth={parseInt(strokeWidth)}
                transform={`rotate(0 ${parseInt(size) / 2} ${parseInt(size) / 2})`}
                strokeDasharray={`${dash}, ${circumference - dash}`}

                style={{transition: "all 2s"}}

            />
            <defs>
                <linearGradient id={"customGradient"} x1="0%" y1="15%" x2="50%" y2="120%">
                    <stop offset="0%" stopColor="rgb(21, 185, 185)"/>
                    <stop offset="100%" stopColor="rgb(60, 29, 255)"/>
                </linearGradient>
            </defs>
            <text
                fill="rgb(255, 255, 255)"
                fontFamily="Poppins"
                fontSize="57px"
                fontWeight="600"
                letterSpacing="0.05em"
                x="50%"
                y="50%"
                dy="20px"
                textAnchor="middle">
                {`${percentage}`}
            </text>
        </svg>
    );
}

// https://medium.com/tinyso/how-to-create-an-animated-svg-circular-progress-component-in-react-5123c7d24391
