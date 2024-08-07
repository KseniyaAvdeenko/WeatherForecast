import React from 'react';
import weatherStyles from "./RisesAndSets.module.sass";
import {IForecastDay} from "../../../interface/IForecast";
import Rises from "./Rises";
import Sets from "./Sets";
import MoonPhase from "./MoonPhase";
import {Icon} from "@iconify-icon/react";

interface IRisesAndSetProps {
    isLoading: boolean
    localTime: string | undefined
    forecastday: { forecastday: IForecastDay[] } | undefined
}

const RisesAndSets: React.FC<IRisesAndSetProps> = ({isLoading, localTime, forecastday}) => {

    const getAstroDay = (array: IForecastDay[], localTime: string|undefined) => {
        const index = array.findIndex(el => el.date === localTime?.split(' ')[0]);
        return array[index].astro
    }
    return (
        <div className={weatherStyles.risesSets}>
            {isLoading && <Icon icon="svg-spinners:6-dots-rotate" width="20" height="20"  style={{color: 'white'}} />}
            {localTime && forecastday &&
            (<div className={weatherStyles.risesSets__container}>
                <Rises sunrise={getAstroDay(forecastday.forecastday,localTime).sunrise} moonrise={getAstroDay(forecastday.forecastday,localTime).moonrise}/>
                <MoonPhase moonPhase={getAstroDay(forecastday.forecastday,localTime).moon_phase}/>
                <Sets sunset={getAstroDay(forecastday.forecastday,localTime).sunset} moonset={getAstroDay(forecastday.forecastday,localTime).moonset}/>
            </div>)
            }
        </div>
    );
};

export default RisesAndSets;
