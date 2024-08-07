import React, {useEffect, useState} from 'react';
import {userIpApi} from "../../store/queries/userIpApi";
import {multiLangWeatherTypesApi} from "../../store/queries/multiLangWeatherTypesApi";
import {getUserLanguage} from "../../hooks/getLanguage";
import Main from "./Main";
import {TempFormat} from "../../hooks/getTempFormat";
import {DistanceFormat} from "../../hooks/getDistanceFormat";


function App() {
    //-----states
    const [tempFormat, setTempFormat] = useState<TempFormat>(localStorage.tempFormat ? localStorage.tempFormat : 'celsius')
    const [distanceFormat, setDistanceFormat] = useState<DistanceFormat>('km')
    const [userLang, setUserLang] = useState<string>('')
    //--queries
    const [getIpData, {data: ipData}] = userIpApi.useGetIpDataMutation();
    const {data: multiLang} = multiLangWeatherTypesApi.useGetMultiLangWeatherTypesQuery()

    useEffect(() => {
        getIpData()
        if (ipData && multiLang) {
            setUserLang(getUserLanguage(ipData, multiLang))
        }
        localStorage.tempFormat
            ? setTempFormat(localStorage.tempFormat)
            : localStorage.setItem('tempFormat', tempFormat)
    }, [multiLang])

    return (<Main userLang={userLang}
                  tempFormat={tempFormat}
                  distanceFormat={distanceFormat}
                  setDistanceFormat={setDistanceFormat}
                  setTempFormat={setTempFormat}
                  ipData={ipData}
    />);
}

export default App;
