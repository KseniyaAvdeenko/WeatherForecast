import React, {FC} from 'react';
import appStyle from "./App.module.sass";
import CurrentWeatherParams from "../WeatherForcast/WeatherParams/CurrentWeatherParams";
import RisesAndSets from "../WeatherForcast/RisesAndSets/RisesAndSets";
import HourlyWeather from "../WeatherForcast/HourlyWeather/HourlyWeather";
import ForecastFuture from "../WeatherForcast/FutureForecast/ForecastFuture";
import {DistanceFormat, TempFormat} from "../../interface/IFormats";
import {IForecastByDay} from "../../interface/IForecast";

interface IMainItems {
    isLoading:boolean;
    userLang: string;
    tempFormat: TempFormat;
    distanceFormat: DistanceFormat;
    weather: IForecastByDay|undefined
}

const MainItems: FC<IMainItems> = ({isLoading, userLang, tempFormat, weather, distanceFormat}) => {
    return (
        <div className={appStyle.main__items}>
            <div className={appStyle.weather__params}>
                <CurrentWeatherParams userLang={userLang} isLoading={isLoading} tempFormat={tempFormat}
                                      currentWeather={weather?.current} distanceFormat={distanceFormat}/>
                <RisesAndSets isLoading={isLoading} localTime={weather?.current.last_updated}
                              forecastday={weather?.forecast}/>
            </div>
            <HourlyWeather isLoading={isLoading} tempFormat={tempFormat} localTime={weather?.current.last_updated}
                           forecastDay={weather?.forecast} lastUpdated={weather?.current.last_updated}/>
            <ForecastFuture userLang={userLang} isLoading={isLoading}
                            currentDate={weather?.current.last_updated.split(' ')[0]} tempFormat={tempFormat}
                            forecastDay={weather?.forecast}/>
        </div>
    );
};

export default MainItems;
