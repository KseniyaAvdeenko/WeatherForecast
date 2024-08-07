import React from 'react';
import {IIconProps} from "./IIconProps";

const Moon:React.FC<IIconProps> = ({width,height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.9742 8.29193C12.5624 9.63625 11.7371 10.8164 10.6157 11.6646C9.63122 12.4055 8.45966 12.8575 7.23256 12.9696C6.00546 13.0817 4.77139 12.8496 3.66886 12.2994C2.56634 11.7491 1.639 10.9024 0.990937 9.85442C0.342873 8.80639 -0.000267876 7.59848 3.05403e-05 6.36626C-0.00435272 4.92801 0.463202 3.52803 1.33098 2.38106C2.1791 1.2597 3.35929 0.434388 4.70361 0.0225808C4.79221 -0.0047009 4.88657 -0.00731333 4.97655 0.0150245C5.06652 0.0373624 5.14871 0.0838053 5.21426 0.149359C5.27981 0.214912 5.32625 0.297095 5.34859 0.38707C5.37093 0.477045 5.36832 0.571407 5.34104 0.660008C5.04708 1.63236 5.02243 2.66624 5.26972 3.6515C5.51701 4.63675 6.02697 5.53646 6.74526 6.25474C7.46354 6.97303 8.36325 7.48299 9.3485 7.73028C10.3338 7.97757 11.3676 7.95292 12.34 7.65896C12.4286 7.63168 12.523 7.62907 12.6129 7.65141C12.7029 7.67374 12.7851 7.72019 12.8506 7.78574C12.9162 7.85129 12.9626 7.93348 12.985 8.02345C13.0073 8.11343 13.0047 8.20779 12.9774 8.29639L12.9742 8.29193Z"
                fill="#FDB813"/>
        </svg>
    );
};

export default Moon;