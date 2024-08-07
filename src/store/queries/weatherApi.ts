import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICurrentForecast, IForecastByDay} from "../../interface/IForecast";

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.weatherapi.com/v1'
    }),
    endpoints: (build) => ({
        getCurrentForecast: build.query<ICurrentForecast, { query: string, lang: string }>({
            query: ({query, lang}) => ({
                url: '/current.json',
                params: {q: query, lang: lang, key: (process.env.REACT_APP_WEATHER_API_KEY as string)}
            })

        }),
        getForcast: build.query<IForecastByDay, { query: string, lang: string|null }>({
            query: ({query, lang}) => ({
                url: 'forecast.json',
                params: {
                    q: query,
                    lang: lang,
                    days: 10,
                    key: (process.env.REACT_APP_WEATHER_API_KEY as string)}
            })
        })
    })
})