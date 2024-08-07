export interface IWeatherTypeLanguage{
    lang_name: string;
    lang_iso: string;
    day_text: string;
    night_text: string;
}
export interface IWeatherTypes{
    day: string;
    icon?:number;
    code?: number;
    night: string;
    languages: IWeatherTypeLanguage[]
}

