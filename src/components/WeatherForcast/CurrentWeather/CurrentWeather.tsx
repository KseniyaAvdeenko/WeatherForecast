import React, {FC} from 'react';
import weatherStyles from './CurrentWeather.module.sass'
import {ICurrent, ILocation} from "../../../interface/IForecast";
import {getIcon} from "../../../hooks/getIcon";
import {getTempFormat} from "../../../hooks/getTempFormat";
import {Icon} from "@iconify-icon/react";
import {TempFormat} from "../../../interface/IFormats";

interface ICurrentWeatherProps {
    currentWeather: ICurrent | undefined;
    location: ILocation | undefined;
    isLoading: boolean;
    tempFormat: TempFormat;
}

const CurrentWeather: FC<ICurrentWeatherProps> = ({currentWeather, isLoading, location, tempFormat}) => {

    return (
        <div className={weatherStyles.currentWeather}>
            {isLoading && <Icon icon="svg-spinners:6-dots-rotate" width="40" height="40"  style={{color: 'white'}} />}
            {currentWeather && location &&
                <div className={weatherStyles.currentWeather__items}>
                    <div className={weatherStyles.currentWeather__location}>
                        <Icon icon="healthicons:geo-location" width="20" height="20" style={{color: 'white'}}/>
                        {location.name}, {location.region}
                    </div>
                    <div className={weatherStyles.currentWeather__time}>{location.localtime.split(' ')[1]}</div>
                    <div className={weatherStyles.currentWeather__temp}>
                        {getTempFormat(tempFormat, currentWeather.temp_c, currentWeather.temp_f, 70, 70)}
                    </div>
                    {getIcon(currentWeather.condition.code, 120, 100, currentWeather.is_day)}
                    <div className={weatherStyles.currentWeather__text}>{currentWeather.condition.text}</div>
                </div>}
        </div>
    );
};

export default CurrentWeather;
