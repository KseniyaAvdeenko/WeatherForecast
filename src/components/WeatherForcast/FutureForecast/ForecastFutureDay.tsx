import React from 'react';
import {IForecastDay} from "../../../interface/IForecast";
import weatherStyles from "./FutureForecast.module.sass";
import {getTempFormat, TempFormat} from "../../../hooks/getTempFormat";
import MaxTemp from "../../../assets/maxTemp.svg";
import MinTemp from "../../../assets/minTemp.svg";
import UV from "../../../assets/UV.svg";
import {getUvIndex} from "../../../hooks/getUvIndex";
import Humidity from "../../../assets/humidity.svg";

interface ForecastFutureDayProps {
    tempFormat: TempFormat;
    currentDay: boolean;
    day: IForecastDay;
    userLang: string;
}

const ForecastFutureDay: React.FC<ForecastFutureDayProps> = ({tempFormat, currentDay, day, userLang}) => {
    return (
        <>
            {currentDay
                ? <div className={weatherStyles.futureForecast__params}>
                    <div className={weatherStyles.futureForecast__paramsItem}>
                        <img src={MaxTemp} alt="maxTemp"/>
                        {getTempFormat(tempFormat, day.day.maxtemp_c, day.day.maxtemp_f, 12, 12)}
                    </div>
                    <div className={weatherStyles.futureForecast__paramsItem}>
                        <img src={MinTemp} alt="minTemp"/>
                        {getTempFormat(tempFormat, day.day.mintemp_c, day.day.mintemp_f, 12, 12)}
                    </div>
                </div>
                : <div className={weatherStyles.forecastDay__params}>
                    <div className={weatherStyles.futureForecast__paramsItem}>
                        <img src={MaxTemp} alt="maxTemp"/>
                        {getTempFormat(tempFormat, day.day.maxtemp_c, day.day.maxtemp_f, 12, 12)}
                    </div>
                    <div className={weatherStyles.futureForecast__paramsItem}>
                        <img src={UV} alt="uv"/>
                        <div>{getUvIndex(userLang, day.day.uv)}</div>
                    </div>

                    <div className={weatherStyles.futureForecast__paramsItem}>
                        <img src={MinTemp} alt="minTemp"/>
                        {getTempFormat(tempFormat, day.day.mintemp_c, day.day.mintemp_f, 12, 12)}
                    </div>
                    <div className={weatherStyles.futureForecast__paramsItem}>
                        <img src={Humidity} alt="humidity"/>
                        <div>{day.day.avghumidity}%</div>
                    </div>
                </div>
            }
        </>
    );
};

export default ForecastFutureDay;
