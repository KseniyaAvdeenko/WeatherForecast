import React, {FC} from 'react';
import styles from './Settings.module.sass'
import {TempFormat} from "../../../hooks/getTempFormat";
import {DistanceFormat} from "../../../hooks/getDistanceFormat";
import TemperatureUnits from "./TemperatureUnits";
import DistanceUnits from "./DistanceUnits";

interface ISettingsProps {
    userLang: string;
    tempFormat: TempFormat;
    setTempFormat: Function;
    distanceFormat: DistanceFormat;
    setDistanceFormat: Function
}

const Settings: FC<ISettingsProps> = ({userLang, tempFormat, setTempFormat, distanceFormat, setDistanceFormat}) => {
    return (
        <div className={styles.settings__container} onClick={(e)=>e.stopPropagation()}>
            <TemperatureUnits userLang={userLang} tempFormat={tempFormat} setTempFormat={setTempFormat}/>
            <DistanceUnits userLang={userLang} distanceFormat={distanceFormat} setDistanceFormat={setDistanceFormat}/>
        </div>
    );
};

export default Settings;