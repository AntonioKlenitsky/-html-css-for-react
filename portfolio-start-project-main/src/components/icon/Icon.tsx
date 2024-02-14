import React from 'react';
import iconsSpite from '../../assets/images/icons/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?:string
    height?: string
    viewBox?: string
    href?: string
}
export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width||"33.596004"} height={props.height||"33.596008"} viewBox={props.viewBox||"0 0 33.596 33.596"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSpite}#${props.iconId}`}/>
        </svg>

    );
};

