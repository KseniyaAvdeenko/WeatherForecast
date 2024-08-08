import {DistanceFormat} from "../interface/IFormats";


export function getDistanceFormat(distanceFormat:DistanceFormat, kmValue: number, milesValue: number, userLang: string): string{
    if (distanceFormat === 'km'){
        return `${kmValue} ${userLang === 'ru'? 'км' : 'km'}`
    }else{
        return `${milesValue} ${userLang === 'ru'?'мили':'miles'}`
    }
}