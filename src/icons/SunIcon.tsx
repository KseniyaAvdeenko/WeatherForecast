import React from 'react';
import {IIconProps} from "./IIconProps";

const SunIcon:React.FC<IIconProps> = ({width,height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 2.79472V1M7.5 14V12.2053M10.8294 4.17056L12.0933 2.90667M2.90667 12.0933L4.17417 10.8258M4.17417 4.16694L2.91028 2.90306M12.1006 12.0933L10.8331 10.8258M2.79472 7.5H1M14 7.5H12.2053M10.5333 7.5C10.5333 9.17526 9.17526 10.5333 7.5 10.5333C5.82474 10.5333 4.46667 9.17526 4.46667 7.5C4.46667 5.82474 5.82474 4.46667 7.5 4.46667C9.17526 4.46667 10.5333 5.82474 10.5333 7.5Z"
                stroke="#FBBF24" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round"/>
        </svg>
    );
};

export default SunIcon;
