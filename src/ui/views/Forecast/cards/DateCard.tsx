import { StyleSheet, Text, View } from "react-native"
import { memo, useMemo } from "react"
import Temptation from "./temptetion/Temptation";
import { IDateArr, IDayObj } from "@/libs/types/type";
import { createDateArr } from "@/models/functions/create/createDay";
import Animated,{FadeInLeft} from 'react-native-reanimated';

interface IProps {
  idx:number,
  temp:IDayObj,
  feels_like:IDayObj,
  weather:[{description:string}],
  speed:string,
}

 function DateCard({weather,feels_like,temp,speed,idx}:IProps):JSX.Element{
  const arrItem:IDateArr[] = useMemo(() =>createDateArr({temp,feels_like}),[]);
  
      return (
          <Animated.View style={styles.container}
           entering={FadeInLeft.delay((idx + 1) * 400)}>
            <View style={styles.main}>
              <Text style={styles.subTitle}>
                  Date {idx + 1}
              </Text>
            </View>
            <View>
              <Text style={styles.weather}>
                {weather[0].description}
              </Text>
            </View>
            <View>
              <Text style={styles.weather}>
                speed:
                <Text style={styles.section}>
                   {speed}
                </Text>
              </Text>
            </View>
            <View>
             {arrItem.map((i:IDateArr):JSX.Element=>(
               <Temptation key={i.name} {...i} />
             ))}
          </View>
        </Animated.View>
      );
  };

  const styles = StyleSheet.create({
    weather:{
      textAlign:'center',
      fontSize:22
    },
    container: {
      width:200,
      height:340,
      backgroundColor:'white',
      borderColor:'black',
      borderWidth:2,
      borderRadius:20,
      marginLeft:10,
      marginRight:10
    },
    subTitle:{
      fontSize:26,
      textAlign:'center',
      fontWeight:'bold'
    },
    section:{
      color:'grey',
      fontWeight:'bold'
    },
    main:{
      width:'100%',
      marginTop:10,
    },
  });

  export default memo(DateCard)