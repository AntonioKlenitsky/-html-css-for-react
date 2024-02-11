import React from 'react';

export function StatusBar() {
    return (
        <div>
            <LinearProgressBar percent={80} animateTiming={1000} />
        </div>
    );
}

interface ILinearProgressBar {
    percent: number;
    fontSize?: number;
    animateTiming?: number;
}
const LinearProgressBar: React.FC<ILinearProgressBar> = (props) => {
    return (
        <div className={"mainProgressBarDiv"}>
      <span className={"percentage"} style={{ fontSize: props.fontSize || 46 }}>
        {props.percent} %
      </span>
            <div className={"emptyProgressBar"} style={{ width: "100%" }}>
                <div
                    className={"fillingProgressBar"}
                    style={{
                        left: props.percent - 100 + "%",
                        transition: "3s"
                    }}
                />
            </div>
        </div>
    );
};
//https://codesandbox.io/p/sandbox/linear-progress-bar-6cdg0?file=%2Fsrc%2FApp.tsx%3A27%2C19