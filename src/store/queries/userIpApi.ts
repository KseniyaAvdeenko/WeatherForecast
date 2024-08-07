import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IIpData} from "../../interface/IIpData";

export const userIpApi = createApi({
    reducerPath: 'ipDataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ipapi.co/',
    }),
    endpoints: (build) => ({
        getIpData: build.mutation<IIpData, void>({
            query: () => ({
                url: 'json/',
                method: 'POST',
            })
        })
    })
})