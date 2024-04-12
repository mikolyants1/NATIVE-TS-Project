import { IDateArr, IDayObj } from "../../../libs/types/type";

interface IProps {
    temp:IDayObj,
    feels_like:IDayObj
}

export const createDateArr = ({temp,feels_like}:IProps):IDateArr[] => {
  return [
    {
      date:temp,
      name:'Temp'
    },
    {
      date:feels_like,
      name:'Feels like'
    }
  ]
}