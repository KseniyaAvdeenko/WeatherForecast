import React from 'react';
import weatherStyles from "./RisesAndSets.module.sass";
import SunRise from "../../../assets/sunrise.svg";
import {getTimeFormat} from "../../../hooks/getTimeFormat";
import MoonRise from "../../../assets/moonrise.svg";

interface IRisesProps {
    sunrise: string;
    moonrise: string;
}

const Rises: React.FC<IRisesProps> = ({sunrise, moonrise}) => {
    return (
        <div className={weatherStyles.rises__items}>
            <div className={weatherStyles.rises__item}>
                <img src={SunRise} alt="sun rise"/>
                {getTimeFormat(sunrise)}
            </div>
            <div className={weatherStyles.rises__item}>
                <img src={MoonRise} alt="moon rise"/>
                {getTimeFormat(moonrise)}
            </div>
        </div>
    );
};

export default Rises;
