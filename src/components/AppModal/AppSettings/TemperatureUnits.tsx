import React, {FC} from 'react';
import styles from "./Settings.module.sass";
import {Icon} from "@iconify-icon/react";
import {TempFormat} from "../../../hooks/getTempFormat";

interface ITemperatureUnitsProps {
    userLang: string;
    tempFormat: TempFormat;
    setTempFormat: Function;
}

const TemperatureUnits: FC<ITemperatureUnitsProps> = ({userLang, tempFormat, setTempFormat}) => {
    return (
        <div className={styles.settings__items}>
            <p>{userLang === 'ru' ? 'Единицы измерения температуры' : 'Temperature units'}</p>
            {tempFormat === 'celsius'
                ? userLang === 'ru'
                    ? <p>Цельсий <Icon icon="wi:celsius" width="30" height="30" style={{color: '#010925'}}/></p>
                    : <p>Celsius <Icon icon="wi:celsius" width="30" height="30" style={{color: '#010925'}}/></p>
                : userLang === 'ru'
                    ? <p>Фаренгейт <Icon icon="wi:fahrenheit" width="30" height="30" style={{color: '#010925'}}/></p>
                    : <p>Fahrenheit <Icon icon="wi:fahrenheit" width="30" height="30" style={{color: '#010925'}}/></p>
            }
        </div>
    );
};

export default TemperatureUnits;
