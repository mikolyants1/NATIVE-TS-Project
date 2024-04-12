import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const CityApi = createApi({
    reducerPath:"cityApi",
    refetchOnFocus:true,
    baseQuery:fetchBaseQuery({
      baseUrl:"https://api.openweathermap.org/data/2.5"
    }),
    endpoints:()=>({})
})