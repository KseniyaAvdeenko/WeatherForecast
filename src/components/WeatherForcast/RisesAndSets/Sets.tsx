import React from 'react';
import weatherStyles from "./RisesAndSets.module.sass";
import SunSet from "../../../assets/sunset.svg";
import {getTimeFormat} from "../../../hooks/getTimeFormat";
import MoonSet from "../../../assets/moonset.svg";

interface ISetsProps {
    sunset: string;
    moonset: string;
}

const Sets: React.FC<ISetsProps> = ({sunset, moonset}) => {
    return (
        <div className={weatherStyles.sets__items}>
            <div className={weatherStyles.sets__item}>
                <img src={SunSet} alt="sun set"/>
                {getTimeFormat(sunset)}
            </div>
            <div className={weatherStyles.sets__item}>
                <img src={MoonSet} alt="moon set"/>
                {getTimeFormat(moonset)}
            </div>
        </div>
    );
};

export default Sets;
