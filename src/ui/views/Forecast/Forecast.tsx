import { View ,Text, FlatList, StyleSheet, ActivityIndicator} from "react-native";
import { useGetDayWeatherQuery, useGetForecastWeatherQuery } from "@/models/store/api/endpoints/endpoints";
import Animated,{FadeInRight,FadeInLeft} from 'react-native-reanimated';
import Error from "../../load/Error";
import DateCard from "./cards/DateCard";

function Forecast({route}:{route:any}):JSX.Element{
  const name:string = route.params.name;
  const {data,isError,isLoading} = useGetForecastWeatherQuery(name);
  
  if (isLoading) return <ActivityIndicator size="large" />;
  if (isError) return <Error />;
  console.log(data)
  return (
      <View>
        <View style={styles.main}>
          <Animated.Text style={styles.title}
           entering={FadeInLeft.delay(200).springify()}>
            {route.params.name}
          </Animated.Text>
        </View>
        <View style={styles.main}>
          <Animated.Text style={styles.subTitle}
           entering={FadeInRight.delay(300).springify()}>
            Detail forecast for a week
          </Animated.Text>
        </View>
        <View style={styles.main}>
          <FlatList 
           data={data.list}
           keyExtractor={({temp})=>temp}
           renderItem={({item,index}):JSX.Element=>(
           <DateCard
            key={index}
            {...item}
            idx={index}
            />
            )}
            horizontal
           />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  subTitle:{
    fontSize:27,
    textAlign:'center',
    fontWeight:'bold'
  },
  main:{
    width:'100%',
    marginTop:10,
  },
  title:{
    textAlign:'center',
    fontSize:32,
    fontWeight:'bold'
  },

});

export default Forecast