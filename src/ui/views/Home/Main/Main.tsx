import React, { useCallback, useState } from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { getCities, useAction, useAppSelector } from '@/models/store/store/store'
import { PointContext } from '@/models/context/PointContext';
import { IButtonProps, IRouteProps } from '@/libs/types/type';
import { ButtonType } from '@/libs/enum/enum';
import City from '../../../cards/City';
import ScrollButton from './buttons/ScrollButton';
import PointMapCard from './cards/points/PointMapCard';
import { EmptyCard } from './cards/empty/EmptyCard';

function Main():JSX.Element {
  const cities:string[] = useAppSelector(getCities);
  const [step,setStep] = useState<number>(0);
  const {removeCity} = useAction();

  const deleteItem = ():void => {
    removeCity(cities[step]);
    setStep((prv:number)=>(
     prv == 0 ? prv : prv - 1
    ));
  }

  const updateStep = useCallback((args:IButtonProps):void=>{
    if (args.title == ButtonType.PREV){
      setStep((prv:number)=>args.allow ? prv - 1 : prv);
    } else {
      setStep((prv:number)=>args.allow ? prv + 1 : prv);
    }
  },[step]);

  return (
    <PointContext.Provider value={step}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollBar}>
         {cities.length ? (
          <>
            <City city={cities[step]}>
              <ScrollButton
               title={ButtonType.PREV}
               update={updateStep}
               allow={step !== 0}
               />
              <ScrollButton
               title={ButtonType.NEXT}
               update={updateStep}
               allow={step !== cities.length - 1}
               />
              <Button
               title='delete City'
               onPress={deleteItem}
               />
            </City>
            <PointMapCard />
          </>
          ) : <EmptyCard />}
        </ScrollView>
      </SafeAreaView>
    </PointContext.Provider>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    scrollBar:{
      width:'100%',
      height:'100%'
    },
})
export default Main