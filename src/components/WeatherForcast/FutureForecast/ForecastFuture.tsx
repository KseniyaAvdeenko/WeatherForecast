import React from 'react';
import weatherStyles from './FutureForecast.module.sass'
import {IForecastDay} from "../../../interface/IForecast";
import {getIcon} from "../../../hooks/getIcon";
import {getTempFormat} from "../../../hooks/getTempFormat";
import {Icon} from "@iconify-icon/react";
import ForecastFutureDay from "./ForecastFutureDay";
import {TempFormat} from "../../../interface/IFormats";


interface IForecastFuture {
    isLoading: boolean;
    currentDate: string | undefined;
    forecastDay: { forecastday: IForecastDay[] } | undefined;
    tempFormat: TempFormat;
    userLang: string
}

const ForecastFuture: React.FC<IForecastFuture> = ({isLoading, forecastDay, tempFormat, currentDate, userLang}) => {
    //console.log(forecastDay?.forecastday)
    return (
        <div className={weatherStyles.futureForecast}>
            <div className={weatherStyles.futureForecast__container}>
                {isLoading && <Icon icon="svg-spinners:6-dots-rotate" width="20" height="20" style={{color: 'white'}}/>}
                {forecastDay && forecastDay.forecastday.map(day => (
                    day.date === currentDate
                        ? <div key={day.date} className={weatherStyles.futureForecast__items}>
                            <div className={weatherStyles.futureForecast__weather}>
                                <div
                                    className={weatherStyles.futureForecast__item}>{userLang === 'ru' ? 'Сегодня' : 'Today'}</div>
                                <div
                                    className={weatherStyles.futureForecast__item}>{getIcon(day.day.condition.code, 30, 30, 1)}</div>
                                {getTempFormat(tempFormat, day.day.avgtemp_c, day.day.avgtemp_f, 12, 12)}
                            </div>
                            <ForecastFutureDay key={day.date} userLang={userLang} tempFormat={tempFormat} day={day}
                                               currentDay={true}/>
                        </div>
                        : <div key={day.date} className={weatherStyles.futureForecast__items}>
                            <div className={weatherStyles.futureForecast__weather}>
                                <div
                                    className={weatherStyles.futureForecast__item}>{day.date.slice(8)}.{day.date.slice(5, 7)}</div>
                                <div
                                    className={weatherStyles.futureForecast__item}>{getIcon(day.day.condition.code, 30, 30, 1)}</div>
                                {getTempFormat(tempFormat, day.day.avgtemp_c, day.day.avgtemp_f, 12, 12)}
                            </div>
                            <ForecastFutureDay key={day.date} userLang={userLang} tempFormat={tempFormat} day={day}
                                               currentDay={false}/>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastFuture;
