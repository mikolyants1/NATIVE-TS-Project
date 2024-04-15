import { PayloadAction } from "@reduxjs/toolkit"
import {WebStorage} from 'redux-persist';
import { store } from "@/models/store/store/store";
import { TypedUseSelectorHook } from "react-redux";
import { Dispatch, SetStateAction } from "react";
import { NavigationContainerRefWithCurrent, NavigationProp } from "@react-navigation/native";

export interface IStateCity {
    city:string[]
}

export interface IConfig {
    key:string,
    storage:WebStorage
}

export interface IButtonProps {
    title:string,
    allow:boolean
}
export interface IStore {
  cities:IStateCity
}
export interface IStackRouteName {
  Home:undefined,
  Personal:undefined,
  Forecast:undefined
}

export interface IDayObj {
  morn:string,
  eve:string,
  day:string,
  night:string
}
export interface ITabRouteName {
    Search:undefined,
    Main:undefined
}

export interface IDateArr {
  name:string,
  date:IDayObj
}
export interface IPresent {
  modal:undefined,
  card:undefined,
  formSheet:undefined,
  containedModal:undefined,
  fullScreenModal:undefined,
  transparentModal:undefined,
  containedTransparentModal:undefined
}

export type Theme = "light" | "dark";

export interface IThemeContext {
  theme:boolean,
  setTheme:Dispatch<SetStateAction<boolean>>
}

export interface IDay {
  clouds: {
    all:number
  },
  cod: number,
  coord:{
    lat: number,
    lon: number
  },
  dt:number,
  id:number,
  main:{
    feels_like:number,
    grnd_level:number,
    humidity:number, 
    pressure:number,
    sea_level:number,
    temp:number,
    temp_max:number,
    temp_min: number
  },
   name:string,
   sys: {
    country:string,
     id: number,
     sunrise: number,
     sunset: number,
   },
   timezone:number,
   visibility:number,
   weather: {description:string,icon:string,id:number,main:string}[],
   wind: {
     deg:number,
     gust:number,
     speed: number
   }
}
export interface ITabIconProps {
  color:string,
  size:number,
  focused:boolean
}

export interface INavRoutes<T> {
  name:keyof T,
  component:(...props:any[])=>JSX.Element,
  options:T extends ITabRouteName ? {
    headerShown:boolean,
    tabBarIcon:(props:ITabIconProps)=>JSX.Element
  } : {
    presentation:keyof IPresent
  }
}

export interface IQuery<T> {
  data:T,
  isLoading:boolean,
  isError:boolean
}
export interface IWeekList {
    temp:{
      night:string,
      day:string
    }
}
export interface IRouteProps<T> {
  navigation:NavigationProp<any>,
  route:{params:T}
}

export interface ISearchItem {
    name:string,
    sys:{
      country:string
    },
    coord:{
      lat:string,
      lon:string
    }
}
export interface ISource {
  uri:string
}

export type AppDispatch = () => typeof store.dispatch;

export type AppSelector = TypedUseSelectorHook<ReturnType<typeof store.getState>>;

export type NavRef = NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;

export type StackNavigator = Record<keyof IStackRouteName,undefined>;

export type NavFunction = NavigationProp<StackNavigator>;

export type Pay<T> = PayloadAction<T>;