import { bindActionCreators, combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppDispatch, AppSelector, IConfig, IStore } from "@/libs/types/type";
import storage from 'redux-persist/lib/storage';
import CitySlice, { CityActions } from "../slices/slice";
import { CityApi } from "../api/api";
import { persistReducer, persistStore } from "redux-persist";
import { useSelector,useDispatch } from "react-redux";

const config:IConfig = {
  key:"city_root",
  storage
}

const combine = combineReducers({
  cities:CitySlice,
  [CityApi.reducerPath]:CityApi.reducer
});

const persist = persistReducer(config,combine);

export const store = configureStore({
  reducer:persist,
  middleware:(getDefaultMiddleware)=> {
    return getDefaultMiddleware().concat(CityApi.middleware) 
  },
});

export const useAppSelector:AppSelector = useSelector;

export const useAppDispatch:AppDispatch = useDispatch;

export const useAction = () => {
 return bindActionCreators(CityActions,useAppDispatch());
}

export const getCities = ({cities}:IStore) => cities.city;

export const hashedStore = persistStore(store);