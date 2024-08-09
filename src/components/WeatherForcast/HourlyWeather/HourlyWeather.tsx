import React from 'react';
import weatherStyles from './HourlyWeather.module.sass'
import {IForecastDay, IHour} from "../../../interface/IForecast";
import {getIcon} from "../../../hooks/getIcon";
import {getTempFormat} from "../../../hooks/getTempFormat";
import {Icon} from "@iconify-icon/react";
import {TempFormat} from "../../../interface/IFormats";

interface IHourlyWeatherProps {
    isLoading: boolean
    localTime: string | undefined
    forecastDay: { forecastday: IForecastDay[] } | undefined
    lastUpdated: string | undefined;
    tempFormat: TempFormat;
}

const HourlyWeather: React.FC<IHourlyWeatherProps> = ({
                                                          isLoading,
                                                          localTime,
                                                          forecastDay,
                                                          tempFormat,
                                                          lastUpdated
                                                      }) => {

    const currentDate = localTime?.split(' ')[0]

    const getForecastArray = (array: IHour[], lastUpdated: string) => {
        const lastTime = lastUpdated.split(' ')[1]
        const lastHour = lastTime.split(':')[0]
        const index = array.findIndex(el => el.time.slice(11, 13) === lastHour)
        return array.slice(index,)
    }

    const getContinuousHourlyWeather = (array: IForecastDay[], lastUpdated: string) => {
        const arrayElementIndex = array?.findIndex(el => el.date === currentDate)
        const joinedArray = array[arrayElementIndex].hour.concat(array[arrayElementIndex + 1].hour)
        return getForecastArray(joinedArray, lastUpdated ?? '00').slice(0, 13)
    }

    return (
        <div className={weatherStyles.hourlyWeather}>
            <div className={weatherStyles.hourlyWeather__container}>
                {isLoading && <Icon icon="svg-spinners:6-dots-rotate" width="20" height="20" style={{color: 'white'}}/>}
                {lastUpdated && forecastDay && getContinuousHourlyWeather(forecastDay.forecastday, lastUpdated).map(hour => (
                        <div className={weatherStyles.hourlyWeather__items} key={hour.time}>
                            <div className={weatherStyles.hourlyWeather__item}>{hour.time.split(' ')[1]}</div>
                            <div
                                className={weatherStyles.hourlyWeather__item}>{getIcon(hour.condition.code, 30, 30, hour.is_day)}</div>
                            <div
                                className={weatherStyles.hourlyWeather__text}>{getTempFormat(tempFormat, hour.temp_c, hour.temp_f, 12, 12)}</div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default HourlyWeather;
