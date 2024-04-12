import { memo, useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { PointContext } from "@/models/context/PointContext";

interface IProps {
  idx:number
}

function Point({idx}:IProps):JSX.Element{
 const step = useContext<number>(PointContext);
 const color:string = step == idx ? "blue" : "black";
 
    return (
      <View style={styles.container}>
        <Text style={[styles.text,{color}]}>
           ·
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
     width:30
    },
    text:{
      fontWeight:'bold',
      fontSize:37,
      textAlign:'center'
    }
})
export default memo(Point)