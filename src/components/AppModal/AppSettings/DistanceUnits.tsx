import React, {FC} from 'react';
import {DistanceFormat} from "../../../hooks/getDistanceFormat";
import styles from "./Settings.module.sass";

interface IDistanceUnitsProps {
    userLang: string;
    distanceFormat: DistanceFormat;
    setDistanceFormat: Function
}

const DistanceUnits: FC<IDistanceUnitsProps> = ({userLang, setDistanceFormat, distanceFormat}) => {
    return (
        <div className={styles.settings__items}>
            <p>{userLang === 'ru' ? 'Единицы измерения расстояния' : 'Distance units'}</p>
            <p>{distanceFormat === 'km'
                ? userLang === 'ru' ? 'Километр' : 'Kilometer'
                : userLang === 'ru' ? 'Миля' : 'Mile'
            }</p>
        </div>
    );
};

export default DistanceUnits;
