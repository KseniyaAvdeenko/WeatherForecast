import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IWeatherTypes} from "../../interface/IWeatherTypes";

export const multiLangWeatherTypesApi = createApi({
    reducerPath:' multiLangWeatherTypesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.weatherapi.com/docs/conditions.json'
    }),
    endpoints:(build)=>({getMultiLangWeatherTypes: build.query<IWeatherTypes[], void>({query:()=>({url: ''})})})
})