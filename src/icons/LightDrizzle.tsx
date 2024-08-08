import React from 'react';
import {IIconProps} from "../interface/IIconProps";

const LightDrizzle: React.FC<IIconProps> = ({width, height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.2714 13.0582H2.20926C0.573657 12.1778 0.0184362 11.5931 0.00504054 10.303C-0.0261651 9.23909 0.0792062 8.70638 0.556096 7.91505C1.326 7.20155 1.76335 7.12732 2.57663 7.54767C2.45156 6.60716 2.83636 5.60324 2.94399 5.34343C3.12767 4.9 3.40788 4.6959 3.67874 4.42503C4.22978 3.87397 5.70637 3.18228 6.98508 3.87397C7.87406 1.87639 8.63708 1.0386 10.4751 0.200249C11.5772 -0.167124 13.414 0.016559 14.5162 0.383951C15.8858 0.81269 16.8794 1.66974 17.2468 3.06633C17.4551 4.42502 17.4551 4.97607 16.8794 6.18898C18.4184 6.10836 19.4757 7.1803 19.843 8.46609C20.0267 9.75189 20.1371 10.2313 19.6593 11.4051C19.2285 12.5529 18.5572 12.8745 17.2714 13.0582Z"
                fill="#9FA7AE"/>
            <path d="M5 14L4.10693 15.3396" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M8 14L7.10693 15.3396" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M11 14L10.1069 15.3396" stroke="#05BBF4" strokeLinecap="round"/>
            <path d="M14 14L13.1069 15.3396" stroke="#05BBF4" strokeLinecap="round"/>
        </svg>
    );
};

export default LightDrizzle;
