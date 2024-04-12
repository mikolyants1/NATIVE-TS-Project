import { back } from "../../../libs/sources/source"
import { ISource } from "../../../libs/types/type"

export const createSource = ():ISource => {
  return {
    uri:back[[0,1,2,3,4,5][Math.floor(Math.random()*6)]]
  }
}