// @ts-ignore

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_WEATHER_API_KEY: string;
        }
    }
}