import { FlatList, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components/native';
import { BaseObject,IStyledComponent } from 'styled-components/native/dist/types';
import { IWeekList } from '../types/type';
import { Keyframe } from 'react-native-reanimated';
import { ReanimatedKeyframe } from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/Keyframe';

interface ISpinProps {
  spin:number
}

export const Spin:IStyledComponent<"native",ISpinProps> = styled.View`
  width:60px;
  height:60px;
  border-radius:50%;
  border-left:15px solid transparent;
  border-top:15px solid black;
  border-bottom:15px solid black;
  border-right:15px solid black;
  rotate:${({spin}:ISpinProps)=>spin}deg
`

export const WeekList:IStyledComponent<"native",{
    horizontal:true,
    keyExtractor:(i:IWeekList)=>number,
    data:any,
    renderItem:({item,index}:ListRenderItemInfo<IWeekList>)=>JSX.Element
}> = styled(FlatList<IWeekList>)({
  padding:1,
  marginTop:3
});

export const MainContainer:IStyledComponent<"native",BaseObject> = styled.View({
  width:'95%',
  height:600,
  margin:'10px auto',
  border:'1px solid black',
  borderRadius:20,
  overflow:'hidden'
});

export const Entry:ReanimatedKeyframe = new Keyframe({
  0:{
    opacity:0,
    transform:[{translateY:100}]
  },
  1:{
    opacity:1,
    transform:[{translateY:0}]
  }
})