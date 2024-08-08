import React from 'react';
import {IIconProps} from "../interface/IIconProps";

const PatchySleet: React.FC<IIconProps> = ({width, height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 11.0512C7.65922 11.0512 7.8129 11.1097 7.93189 11.2155C8.05088 11.3213 8.12689 11.4671 8.14552 11.6252L8.15007 11.7013V12.3514C8.14989 12.5171 8.08644 12.6764 7.9727 12.7969C7.85896 12.9174 7.7035 12.9899 7.5381 12.9996C7.37269 13.0093 7.20982 12.9555 7.08276 12.8492C6.9557 12.7428 6.87405 12.592 6.85448 12.4274L6.84993 12.3514V11.7013C6.84993 11.5289 6.91842 11.3635 7.04033 11.2416C7.16224 11.1197 7.32759 11.0512 7.5 11.0512ZM11.6039 9.69257L11.665 9.74653L12.1201 10.2016C12.2367 10.3186 12.3043 10.4755 12.3094 10.6406C12.3144 10.8057 12.2564 10.9665 12.1472 11.0904C12.038 11.2143 11.8857 11.292 11.7213 11.3076C11.5568 11.3233 11.3926 11.2758 11.262 11.1747L11.2009 11.1208L10.7458 10.6657C10.6336 10.5537 10.5662 10.4046 10.5563 10.2464C10.5463 10.0882 10.5945 9.93186 10.6918 9.80672C10.7891 9.68157 10.9287 9.59627 11.0845 9.56687C11.2403 9.53747 11.4014 9.56599 11.5376 9.64707L11.6039 9.69257ZM4.25419 9.74653C4.36612 9.85847 4.43336 10.0074 4.44329 10.1654C4.45322 10.3234 4.40517 10.4795 4.30815 10.6046L4.25419 10.6657L3.79914 11.1208C3.68215 11.2374 3.52518 11.3051 3.36009 11.3101C3.19501 11.3151 3.03419 11.2572 2.91031 11.1479C2.78643 11.0387 2.70877 10.8864 2.69311 10.722C2.67745 10.5576 2.72495 10.3933 2.82598 10.2627L2.87994 10.2016L3.33499 9.74653C3.4569 9.62466 3.62221 9.5562 3.79459 9.5562C3.96697 9.5562 4.13228 9.62466 4.25419 9.74653ZM2.29942 5.85065C2.46511 5.85083 2.62448 5.91428 2.74496 6.02802C2.86544 6.14176 2.93795 6.29722 2.94766 6.46262C2.95737 6.62803 2.90355 6.7909 2.79721 6.91796C2.69086 7.04502 2.54001 7.12667 2.37548 7.14624L2.29942 7.15079H1.64935C1.48366 7.15061 1.32429 7.08716 1.20381 6.97342C1.08333 6.85968 1.01083 6.70422 1.00112 6.53882C0.991408 6.37341 1.04522 6.21054 1.15157 6.08348C1.25791 5.95643 1.40876 5.87477 1.57329 5.8552L1.64935 5.85065H2.29942ZM13.3506 5.85065C13.5163 5.85083 13.6757 5.91428 13.7962 6.02802C13.9167 6.14176 13.9892 6.29722 13.9989 6.46262C14.0086 6.62803 13.9548 6.7909 13.8484 6.91796C13.7421 7.04502 13.5912 7.12667 13.4267 7.14624L13.3506 7.15079H12.7006C12.5349 7.15061 12.3755 7.08716 12.255 6.97342C12.1346 6.85968 12.0621 6.70422 12.0523 6.53882C12.0426 6.37341 12.0964 6.21054 12.2028 6.08348C12.3091 5.95643 12.46 5.87477 12.6245 5.8552L12.7006 5.85065H13.3506ZM3.73803 1.8267L3.79914 1.88066L4.25419 2.33571C4.37078 2.45269 4.43847 2.60967 4.44351 2.77476C4.44855 2.93984 4.39057 3.10066 4.28133 3.22454C4.1721 3.34842 4.01981 3.42608 3.85539 3.44174C3.69097 3.4574 3.52675 3.4099 3.3961 3.30887L3.33499 3.25491L2.87994 2.79986C2.76818 2.68784 2.70112 2.5389 2.69133 2.38097C2.68154 2.22305 2.72968 2.06697 2.82674 1.942C2.9238 1.81703 3.0631 1.73175 3.21854 1.70214C3.37398 1.67254 3.53488 1.70065 3.67108 1.7812L3.73803 1.8267ZM12.1201 1.88066C12.232 1.9926 12.2992 2.14153 12.3092 2.29951C12.3191 2.4575 12.271 2.61368 12.174 2.73875L12.1201 2.79986L11.665 3.25491C11.548 3.3715 11.391 3.43919 11.226 3.44423C11.0609 3.44927 10.9001 3.39129 10.7762 3.28205C10.6523 3.17282 10.5746 3.02053 10.559 2.85611C10.5433 2.69169 10.5908 2.52747 10.6919 2.39682L10.7458 2.33571L11.2009 1.88066C11.3228 1.75879 11.4881 1.69033 11.6605 1.69033C11.8328 1.69033 11.9982 1.75879 12.1201 1.88066ZM7.5 0C7.65922 2.10042e-05 7.8129 0.058478 7.93189 0.164283C8.05088 0.270088 8.12689 0.415883 8.14552 0.574014L8.15007 0.650072V1.30014C8.14989 1.46583 8.08644 1.6252 7.9727 1.74568C7.85896 1.86616 7.7035 1.93867 7.5381 1.94838C7.37269 1.95809 7.20982 1.90427 7.08276 1.79793C6.9557 1.69158 6.87405 1.54073 6.85448 1.3762L6.84993 1.30014V0.650072C6.84993 0.477662 6.91842 0.312314 7.04033 0.190402C7.16224 0.0684895 7.32759 0 7.5 0ZM7.5 3.25036C8.13686 3.25032 8.7597 3.43738 9.29116 3.78829C9.82262 4.13921 10.2393 4.63852 10.4894 5.22421C10.7395 5.80991 10.8121 6.45617 10.698 7.08274C10.584 7.70931 10.2884 8.28857 9.84795 8.74858C9.40751 9.20859 8.84165 9.52907 8.22063 9.67023C7.59961 9.81139 6.9508 9.767 6.35479 9.54258C5.75878 9.31816 5.24184 8.92359 4.86816 8.40788C4.49448 7.89217 4.28053 7.27805 4.25289 6.64179L4.24964 6.50072L4.25289 6.35966C4.28924 5.52285 4.64723 4.73238 5.2522 4.15309C5.85716 3.5738 6.66241 3.25041 7.5 3.25036Z"
                fill="#FDB813"/>
            <path
                d="M20.2714 15.0582H5.20926C3.57366 14.1778 3.01844 13.5931 3.00504 12.303C2.97383 11.2391 3.07921 10.7064 3.5561 9.91505C4.326 9.20155 4.76335 9.12732 5.57663 9.54767C5.45156 8.60716 5.83636 7.60324 5.94399 7.34343C6.12767 6.9 6.40788 6.6959 6.67874 6.42503C7.22978 5.87397 8.70637 5.18228 9.98508 5.87397C10.8741 3.87639 11.6371 3.0386 13.4751 2.20025C14.5772 1.83288 16.414 2.01656 17.5162 2.38395C18.8858 2.81269 19.8794 3.66974 20.2468 5.06633C20.4551 6.42502 20.4551 6.97607 19.8794 8.18898C21.4184 8.10836 22.4757 9.1803 22.843 10.4661C23.0267 11.7519 23.1371 12.2313 22.6593 13.4051C22.2285 14.5529 21.5572 14.8745 20.2714 15.0582Z"
                fill="#9FA7AE"/>
            <path d="M11 16L9 19M13 16L11 19" stroke="#05BBF4" strokeLinecap="round"/>
            <path
                d="M17.7918 19.3702C17.7383 19.4197 17.6667 19.45 17.588 19.45C17.5093 19.45 17.4377 19.4197 17.3842 19.3702C17.3341 19.3698 17.2836 19.3575 17.2374 19.3319C17.0924 19.2518 17.0442 19.0717 17.1297 18.9298L17.288 18.6672L17.288 16.8473L17.103 16.5404C17.0175 16.3985 17.0657 16.2185 17.2107 16.1383C17.259 16.1116 17.312 16.0993 17.3643 16.1001C17.4192 16.0387 17.4991 16 17.588 16C17.6734 16 17.7505 16.0357 17.8051 16.093C17.8508 16.0952 17.8965 16.1075 17.9386 16.1308C18.0836 16.211 18.1318 16.391 18.0463 16.5329L17.888 16.7955L17.888 18.6672L18.0463 18.9298C18.1318 19.0717 18.0836 19.2518 17.9386 19.3319C17.8924 19.3575 17.8419 19.3698 17.7918 19.3702Z"
                fill="#B5EDFE" fillOpacity="0.56"/>
            <path
                d="M18.9759 16.7091C19.0442 16.7317 19.105 16.7776 19.1443 16.8428C19.2299 16.9847 19.1817 17.1648 19.0367 17.2449L16.9485 18.3997L16.769 18.6974C16.6848 18.837 16.4972 18.8842 16.3498 18.8027C16.3031 18.7769 16.266 18.7412 16.2399 18.7001C16.1599 18.6818 16.0872 18.6326 16.0423 18.5582C15.9568 18.4163 16.005 18.2363 16.15 18.1561L18.2965 16.9691L18.4493 16.7157C18.5334 16.576 18.7211 16.5289 18.8685 16.6103C18.9137 16.6354 18.9499 16.6696 18.9759 16.7091Z"
                fill="#B5EDFE" fillOpacity="0.56"/>
            <path
                d="M16.0424 16.865C15.9569 17.0069 16.0051 17.1869 16.1501 17.2671L18.285 18.4477L18.4378 18.7012C18.522 18.8408 18.7097 18.8879 18.857 18.8065C18.8975 18.7841 18.9307 18.7543 18.9559 18.7201C19.0323 18.7002 19.1012 18.6519 19.1444 18.5803C19.2299 18.4384 19.1817 18.2584 19.0367 18.1782L16.8902 16.9912L16.7374 16.7378C16.6533 16.5982 16.4656 16.551 16.3182 16.6325C16.273 16.6575 16.2368 16.6917 16.2108 16.7312C16.1425 16.7539 16.0817 16.7997 16.0424 16.865Z"
                fill="#B5EDFE" fillOpacity="0.56"/>
        </svg>
    );
};

export default PatchySleet;
