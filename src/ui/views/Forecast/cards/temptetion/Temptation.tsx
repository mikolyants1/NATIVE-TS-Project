import { StyleSheet, Text, View } from "react-native"
import { memo } from "react"
import { IDayObj } from "@/libs/types/type";

interface IProps {
  name:string,
  date:IDayObj
}
 function Temptation({date,name}:IProps):JSX.Element{
   const DayArr:["morn","day","eve","night"] = ['morn','day','eve','night'];

    return (
      <>
        <View>
          <Text style={styles.feels}>
             {name}
          </Text>
        </View>
         {DayArr.map((item:keyof IDayObj,i:number):JSX.Element=>(
           <View key={i}>
             <Text style={styles.days}>
               {item}:
              <Text style={styles.section}>
                 {date[item]} 
              </Text>
            </Text>
          </View>
         ))}
      </>
    );
  }

  const styles = StyleSheet.create({
    feels:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      
    },
    days:{
      fontSize:18,
      textAlign:'center'
    },
    section:{
      color:'grey',
      fontWeight:'bold'
    }
  });
  export default memo(Temptation)