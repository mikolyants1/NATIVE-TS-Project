import { View,Text,ImageBackground, Pressable, StyleSheet, ListRenderItemInfo } from 'react-native'
import { useGetDayWeatherQuery, useGetWeekWeatherQuery } from '../../models/store/api/endpoints/endpoints';
import Error from '../load/Error';
import Loading from '../load/Loading';
import { ISource, IWeekList } from '../../libs/types/type';
import { createSource } from '../../models/functions/create/createSource';
import { useNavigation } from '@react-navigation/native';
import { MainContainer, WeekList } from '../../libs/style/style';
import DataCard from './content/DataCard';
import WeekCard from './content/WeekCard';
import { random } from '../../models/functions/create/createRandom';

interface IProps {
    city:string,
    children:JSX.Element[]
}

function City({city,children}:IProps):JSX.Element{
  const source:ISource = createSource();
  const navigation = useNavigation();
  const [day,week] = [
    useGetDayWeatherQuery(city),
    useGetWeekWeatherQuery(city)
  ]
  
  const navigate = (name:string):void => {
    navigation.navigate('Forecast',{name});
  };

  if (day.isLoading || week.isLoading) return <Loading />;
  if (day.isError || week.isError) return <Error />;

   return (
      <MainContainer>
        <ImageBackground style={styles.image} source={source}>
          <View style={styles.block}>
            <Text style={styles.title}>
              {day.data.name}
            </Text>
          </View>
          <View>
            <Text style={styles.main}>
               {day.data.weather[0].main}
            </Text>
          </View>
          <View>
            <Text style={styles.main}>
              Country:
              <Text style={styles.section}>
                 {day.data.sys.country} 
              </Text>
            </Text>
          </View>
          <View>
            <Text style={styles.main}>
               Wind speed:
               <Text style={styles.section}>
                  {day.data.wind.speed}
               </Text>
             </Text>
           </View>
           <DataCard
            title="Temp"
            subTitle="Feels"
            temp={day.data.main.temp}
            feels_like={day.data.main.feels_like}
             />
           <DataCard
            title="Min Temp"
            subTitle="Max Temp"
            temp={day.data.main.temp_min}
            feels_like={day.data.main.temp_max}
             />
           <View>
             <Text style={styles.main}>
                Coordinates:
             </Text>
           </View>
           <DataCard
            title="Lat"
            subTitle="Lon"
            temp={day.data.coord.lat}
            feels_like={day.data.coord.lon}
             /> 
           <View style={styles.buttons}>
            {children[0]}
             <View>
               <Text style={styles.main}>
                 Sunrise:
                 <Text style={styles.section}>
                    {day.data.sys.sunrise}
                 </Text>
                  {"  "}
                  Sunset:
                 <Text style={styles.section}>
                    {day.data.sys.sunset}
                 </Text>
               </Text>
             </View>
            {children[1]}
           </View>
           <View>
             <Text style={styles.main}>
                Humidity:
               <Text style={styles.section}>
                  {day.data.main.humidity}
               </Text>
             </Text>
           </View>
           <WeekList
            data={week.data.list}
            keyExtractor={(_:IWeekList)=>random(week.data.list.length)}
            renderItem={(i:ListRenderItemInfo<IWeekList>):JSX.Element=>(
              <WeekCard item={i.item} idx={i.index} />
            )}
            horizontal 
            />
           <View>
             <Pressable style={styles.link}
              onPress={()=>navigate(day.data.name)}>
               <Text style={styles.main}>
                 Detail forecast
               </Text>
             </Pressable>
           </View>
           {children[2]}
         </ImageBackground>
       </MainContainer>
    );
};

export const styles = StyleSheet.create({
    section:{
      color:'grey',
      fontWeight:'bold'
    },
    main:{
      fontSize:22,
      fontWeight:'bold',
      textAlign:'center',
      color:'white',
      marginTop:7,
    },
    image:{
      width:'100%',
      height:'100%',
    },
    block:{
      marginBottom:10
    },
    link:{
      width:'100%',
      marginBottom:45
    },
    buttons:{
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    title:{
      textAlign:'center',
      fontSize:34,
      color:'white',
      fontWeight:'bold',
      marginTop:20
    },
})
export default City