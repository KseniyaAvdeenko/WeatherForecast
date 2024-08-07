import React, {FC, useEffect, useState} from 'react';
import appStyle from "./App.module.sass";
import CurrentWeather from "../WeatherForcast/CurrentWeather/CurrentWeather";
import CurrentWeatherParams from "../WeatherForcast/WeatherParams/CurrentWeatherParams";
import RisesAndSets from "../WeatherForcast/RisesAndSets/RisesAndSets";
import HourlyWeather from "../WeatherForcast/HourlyWeather/HourlyWeather";
import ForecastFuture from "../WeatherForcast/FutureForecast/ForecastFuture";
import {IIpData} from "../../interface/IIpData";
import {weatherApi} from "../../store/queries/weatherApi";
import {TempFormat} from "../../hooks/getTempFormat";
import {BgColors, IAppBg, OvercastCodes} from "../../interface/IAppBg";
import {Icon} from "@iconify-icon/react";
import AppModal from "../AppModal/AppModal";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItems from "../Dropdown/DropdownItems";
import Settings from "../AppModal/AppSettings/Settings";
import {DistanceFormat} from "../../hooks/getDistanceFormat";


interface IMainProps {
    userLang: string,
    ipData: IIpData | undefined;
    tempFormat: TempFormat;
    setTempFormat: Function
    distanceFormat: DistanceFormat;
    setDistanceFormat: Function
}


const Main: FC<IMainProps> = ({
                                  userLang,
                                  ipData,
                                  tempFormat,
                                  setTempFormat,
                                  distanceFormat,
                                  setDistanceFormat
                              }) => {
    //--states
    const [appBg, setAppBg] = useState<IAppBg>({background: BgColors.clear})
    const [query, setQuery] = useState<string>(ipData ? ipData.ip : '')
    const [skip, setSkip] = useState<boolean>(true)
    const [isSettingModalActive, setIsSettingModalActive] = useState<boolean>(false)
    const [isDropdown, setIsDropdown] = useState<boolean>(false)
    //--queries
    const {data: weather, isLoading, isFetching, isUninitialized} = weatherApi.useGetForcastQuery({
        query: query,
        lang: userLang
    }, {skip})
    //---effects
    useEffect(() => {
        if (ipData && userLang) {
            setQuery(ipData.ip)
        }
        if (query) {
            setSkip((prev) => !prev)
        }
    }, [ipData, userLang, query])

    useEffect(() => {
        if (weather) {
            if (weather.current.is_day === 1) {
                OvercastCodes.includes(weather.current.condition.code)
                    ? setAppBg({...appBg, background: BgColors.overcast})
                    : setAppBg({...appBg, background: BgColors.clear})
            } else {
                setAppBg({...appBg, background: BgColors.night})
            }
        }
    }, [weather]);

    console.log(isSettingModalActive, 'isLoading', isLoading, 'isFetching', isFetching, 'isUninitialized', isUninitialized)

    return (
        <main className={appStyle.main} style={appBg}>
            <AppModal isActive={isSettingModalActive} setIsSettingModalActive={setIsSettingModalActive}>
                <Settings
                    userLang={userLang}
                    tempFormat={tempFormat}
                    setTempFormat={setTempFormat}
                    distanceFormat={distanceFormat}
                    setDistanceFormat={setDistanceFormat}
                />
            </AppModal>
            <Dropdown isActive={isDropdown}>
                <DropdownItems setIsDropdown={setIsDropdown} userLang={userLang}
                               setIsSettingModalActive={setIsSettingModalActive}
                />
            </Dropdown>
            <Icon
                icon="fluent:grid-dots-20-regular"
                width="20" height="20" style={{color: 'white'}}
                className={appStyle.settings__icon}
                onClick={() => setIsDropdown(isDropdown => !isDropdown)}
            />
            <CurrentWeather isLoading={isLoading} tempFormat={tempFormat} currentWeather={weather?.current}
                            location={weather?.location}/>
            <div className={appStyle.main__items}>
                <div className={appStyle.weather__params}>
                    <CurrentWeatherParams userLang={userLang} isLoading={isLoading} tempFormat={tempFormat}
                                          currentWeather={weather?.current}/>
                    <RisesAndSets isLoading={isLoading} localTime={weather?.current.last_updated}
                                  forecastday={weather?.forecast}/>
                </div>
                <HourlyWeather isLoading={isLoading} tempFormat={tempFormat} localTime={weather?.current.last_updated}
                               forecastDay={weather?.forecast} lastUpdated={weather?.current.last_updated}/>
                <ForecastFuture userLang={userLang} isLoading={isLoading}
                                currentDate={weather?.current.last_updated.split(' ')[0]} tempFormat={tempFormat}
                                forecastDay={weather?.forecast}/>
            </div>
        </main>
    );
};

export default Main;