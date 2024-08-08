import React from 'react';
import {IIconProps} from "../interface/IIconProps";

const RainShower: React.FC<IIconProps> = ({width, height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 2.79472V1M7.5 14V12.2053M10.8294 4.17056L12.0933 2.90667M2.90667 12.0933L4.17417 10.8258M4.17417 4.16694L2.91028 2.90306M12.1006 12.0933L10.8331 10.8258M2.79472 7.5H1M14 7.5H12.2053M10.5333 7.5C10.5333 9.17526 9.17526 10.5333 7.5 10.5333C5.82474 10.5333 4.46667 9.17526 4.46667 7.5C4.46667 5.82474 5.82474 4.46667 7.5 4.46667C9.17526 4.46667 10.5333 5.82474 10.5333 7.5Z"
                stroke="#FBBF24" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round"/>
            <path
                d="M21.2714 15.0582H6.20926C4.57366 14.1778 4.01844 13.5931 4.00504 12.303C3.97383 11.2391 4.07921 10.7064 4.5561 9.91505C5.326 9.20155 5.76335 9.12732 6.57663 9.54767C6.45156 8.60716 6.83636 7.60324 6.94399 7.34343C7.12767 6.9 7.40788 6.6959 7.67874 6.42503C8.22978 5.87397 9.70637 5.18228 10.9851 5.87397C11.8741 3.87639 12.6371 3.0386 14.4751 2.20025C15.5772 1.83288 17.414 2.01656 18.5162 2.38395C19.8858 2.81269 20.8794 3.66974 21.2468 5.06633C21.4551 6.42502 21.4551 6.97607 20.8794 8.18898C22.4184 8.10836 23.4757 9.1803 23.843 10.4661C24.0267 11.7519 24.1371 12.2313 23.6593 13.4051C23.2285 14.5529 22.5572 14.8745 21.2714 15.0582Z"
                fill="#5A5151"/>
            <path d="M6 16L4 19" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M9 16L7 19" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M12 16L10 19" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M15 16L13 19" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M18 16L16 19" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M21 16L19 19" stroke="#05BBF4" strokeLinecap="round"/>
        </svg>
    );
};

export default RainShower;
