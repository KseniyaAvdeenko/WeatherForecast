import React, {FC} from 'react';
import weatherStyles from './WeatherParams.module.sass'
import {ICurrent} from "../../../interface/IForecast";
import {getTempFormat, TempFormat} from "../../../hooks/getTempFormat";
import Humidity from '../../../assets/humidity.svg';
import Cloud from '../../../assets/cloud.svg';
import Thermometer from '../../../assets/term.svg';
import UV from '../../../assets/UV.svg'
import WindDirection from '../../../assets/wind_direction.svg'
import Wind from '../../../assets/wind.svg';
import Visibility from '../../../assets/visibility.svg';
import Pressure from '../../../assets/pressure.svg';
import {getWindDirection} from "../../../hooks/getWindDirection";
import {Icon} from "@iconify-icon/react";
import {getUvIndex} from "../../../hooks/getUvIndex";

interface ICurrentWeatherParamsProps {
    isLoading: boolean;
    currentWeather: ICurrent | undefined;
    tempFormat: TempFormat;
    userLang: string;
}

const CurrentWeatherParams: FC<ICurrentWeatherParamsProps> = ({isLoading, currentWeather, tempFormat, userLang}) => {
    return (
        <div className={weatherStyles.weatherParams} style={{rowGap: currentWeather ? '2rem' : 0}}>
            {isLoading && <Icon icon="svg-spinners:6-dots-rotate" width="20" height="20" style={{color: 'white'}}/>}
            {currentWeather &&
                <>
                    <div className={weatherStyles.weatherParams__items}>
                        <img src={Humidity} alt="humidity"/>
                        <div>{currentWeather.humidity}%</div>
                    </div>
                    <div className={weatherStyles.weatherParams__items}>
                        <img src={Cloud} alt="cloud"/>
                        <div>{currentWeather.cloud}%</div>
                    </div>
                    <div className={weatherStyles.weatherParams__items}>
                        <img src={Thermometer} alt="Thermometer"/>
                        <div>{getTempFormat(
                            tempFormat,
                            currentWeather.feelslike_c,
                            currentWeather.feelslike_f,
                            12, 12)}
                        </div>
                    </div>
                    <div className={weatherStyles.weatherParams__items}>
                        <img src={UV} alt="uv"/>
                        <div>{getUvIndex(userLang, currentWeather.uv)}</div>
                    </div>

                    <div className={weatherStyles.weatherParams__items}>
                        <img src={WindDirection} alt="wind direction"
                             style={{transform: `rotate(${currentWeather.wind_degree}deg)`}}/>
                        <div>{getWindDirection(currentWeather.wind_dir)}</div>
                    </div>
                    <div className={weatherStyles.weatherParams__items}>
                        <img src={Wind} alt="wind"/>
                        <div>{currentWeather.wind_kph} km/h</div>
                    </div>
                    <div className={weatherStyles.weatherParams__items}>
                        <img src={Visibility} alt="visibility"/>
                        <div>{currentWeather.vis_km} {userLang === 'ru'?'км':'km'}</div>
                    </div>
                     <div className={weatherStyles.weatherParams__items}>
                        <img src={Pressure} alt="Pressure"/>
                        <div>{currentWeather.pressure_mb} {userLang === 'ru'?'гПа':'mb'}</div>
                    </div>
                </>}
        </div>
    );
};

export default CurrentWeatherParams;