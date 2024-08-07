import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userIpApi} from "./queries/userIpApi";
import {multiLangWeatherTypesApi} from "./queries/multiLangWeatherTypesApi";
import {weatherApi} from "./queries/weatherApi";


export const rootMiddleWare = [
    userIpApi.middleware,
    multiLangWeatherTypesApi.middleware,
    weatherApi.middleware
]

export const rootReducer = combineReducers({
    [userIpApi.reducerPath]: userIpApi.reducer,
    [multiLangWeatherTypesApi.reducerPath]: multiLangWeatherTypesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => (getDefaultMiddleware().concat(rootMiddleWare))
    })
}



