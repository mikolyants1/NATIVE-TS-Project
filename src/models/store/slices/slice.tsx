import { createSlice } from "@reduxjs/toolkit";
import { IStateCity, Pay } from "@/libs/types/type";

const initialState:IStateCity = {
  city:[
    "Moscow",
    "London",
    "Tokyo",
    "Berlin",
    "Paris"
  ]
}

export const CitySlice = createSlice({
    name:"CitySlice",
    initialState,
    reducers:{
      addNewCity:(state:IStateCity,action:Pay<string>):void=>{
        const uniq:boolean = state.city
        .every((i:string)=> i !== action.payload);
        if (uniq) state.city = [...state.city,action.payload];
      },
      removeCity:(state:IStateCity,action:Pay<string>):void=>{
        const cities:string[] = state.city
        .filter((i:string)=> i !== action.payload);
        state.city = [...cities];
      }
    }
})

export const CityActions:any = CitySlice.actions;
export default CitySlice.reducer;