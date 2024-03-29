import React, {useEffect, useState} from 'react';

type LinearProgressBarPropsType = {
    text: string;
}

export const LinearProgressBar = ({ text }: LinearProgressBarPropsType) => {

    let percentage = 0;

    if (text.includes('Fluent')) {
        percentage = 100;
    } else if (text.includes('Good')) {
        percentage = 80;
    } else if (text.includes('Intermediate')) {
        percentage = 60;
    }
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);
    const dash=(488*progress/100)+"px";

    return (
        <div>
            <div
                style={{
                    width: dash,
                    height: '25px',
                    background: "linear-gradient(90.00deg, rgb(60, 29, 255) 18.628%,rgb(20, 201, 201) 78.883%)",
                    borderRadius: "50px",
                    transition: "all 15s"
                }}
            >
                <div style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    fontFamily:"Poppins, sans-serif",
                    display:"flex",
                    justifyContent:"flex-end",
                    position: "relative",
                    top: "-22px",

                }}>{`${text}`}</div>
            </div>
        </div>
    );
};


// https://cssgradient.io/