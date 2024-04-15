import { key } from "@/libs/sources/source";
import { IDay, ISearchItem } from "@/libs/types/type";
import { CityApi } from "../api";

export const CityEnpoints = CityApi.injectEndpoints({
  endpoints:(build)=>({
    getForecastWeather:build.query<any,string>({
      query:(id:string)=>({
        url:`/forecast/daily?q=${id}&${key}&cnt=7&units=imperial`
      })
    }),
    getDayWeather:build.query<any,string>({
      query:(id:string)=>({
        url:`/weather?q=${id}&${key}&units=imperial`
      })
    }),
    getWeekWeather:build.query<any,string>({
      query:(id:string)=>({
        url:`/forecast/daily?q=${id}&${key}&units=imperial`
      })
    }),
    getSearchCity:build.mutation<ISearchItem,string>({
      query:(id:string)=>({
        url:`/weather?q=${id}&${key}&units=imperial`
      })
    })
  })
});

export const {
  useGetSearchCityMutation,
  useGetForecastWeatherQuery,
  useGetDayWeatherQuery,
  useGetWeekWeatherQuery
} = CityEnpoints;
