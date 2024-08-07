import {IWeatherTypes} from "../interface/IWeatherTypes";
import {IIpData} from "../interface/IIpData";

export function getAllLanguages(array: IWeatherTypes[]): Array<string> {
    let lang_array: Array<string> = []
    if (array) {
        array && array[0].languages.map(lang => lang_array.push(lang.lang_iso))
    }
    return lang_array
}

export function getUserLanguage(userData: IIpData | undefined, langArray: Array<any>): string {
    let language: string = ''
    if (userData && userData.languages.split(',').length === 1) {
        if (getAllLanguages(langArray) && getAllLanguages(langArray).includes(userData.languages.split(',')[0])) {
            language = userData.languages.split(',')[0]
        } else {
            language = 'en'
        }
    } else if (userData && userData.languages.split(',').length > 1) {
        userData.languages.split(',').forEach(lang => {
            if (getAllLanguages(langArray) && getAllLanguages(langArray).includes(lang)) {
                language = lang
            } else {
                language = 'en'
            }
        })
    }
    return language
}