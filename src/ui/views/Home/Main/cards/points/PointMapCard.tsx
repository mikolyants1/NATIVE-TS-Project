import { memo } from "react"
import { StyleSheet, View } from "react-native"
import { getCities, useAppSelector } from "@/models/store/store/store"
import PointCard from "./point/PointCard";


function PointMapCard():JSX.Element{
 const cities:string[] = useAppSelector(getCities);

  return (
    <View style={styles.points}>
      {cities.map((_:string,idx:number):JSX.Element=>(
        <PointCard key={idx} idx={idx} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  points:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'center'
  }
});

export default memo(PointMapCard)