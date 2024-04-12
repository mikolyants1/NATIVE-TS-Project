import { View ,Text, FlatList, StyleSheet, ActivityIndicator} from "react-native";
import { useGetDayWeatherQuery, useGetForecastWeatherQuery } from "@/models/store/api/endpoints/endpoints";
import { IRouteProps } from "@/libs/types/type";
import Error from "../../load/Error";
import DateCard from "./cards/DateCard";

function Forecast({route}):JSX.Element{
  const name:string = route.params.name;
  const {data,isError,isLoading} = useGetForecastWeatherQuery(name);
  
  if (isLoading) return <ActivityIndicator size="large" />;
  if (isError) return <Error />;

  return (
      <View>
        <View style={styles.main}>
          <Text style={styles.title}>
            {route.params.name}
          </Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.subTitle}>
            Detail forecast for a week
          </Text>
        </View>
        <View style={styles.main}>
          <FlatList 
           data={data.list}
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