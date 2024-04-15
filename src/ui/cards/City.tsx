import { View,Text,ImageBackground, Pressable, StyleSheet, ListRenderItemInfo } from 'react-native'
import { useGetDayWeatherQuery, useGetWeekWeatherQuery } from '../../models/store/api/endpoints/endpoints';
import Error from '../load/Error';
import Loading from '../load/Loading';
import { IDay, ISource, IWeekList } from '@/libs/types/type';
import { createSource } from '../../models/functions/create/createSource';
import { useNavigation } from '@react-navigation/native';
import { MainContainer, WeekList } from '../../libs/style/style';
import DataCard from './content/DataCard';
import WeekCard from './content/WeekCard';
import { random } from '../../models/functions/create/createRandom';
import { DataShowType } from '@/libs/enum/enum';

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
   console.log(day.data)
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
          <DataCard
           type={DataShowType.BASIC}
           firstTitle='Country'
           firstData={day.data.sys.country}
          />
          <DataCard
           type={DataShowType.BASIC}
           firstData={day.data.wind.speed}
           firstTitle='Wind speed:'
          />
           <DataCard
            type={DataShowType.BASIC}
            firstTitle="Temp"
            secondTitle="Feels"
            firstData={day.data.main.temp}
            secondData={day.data.main.feels_like}
             />
           <DataCard
            type={DataShowType.FULL}
            firstTitle="Min Temp"
            secondTitle="Max Temp"
            firstData={day.data.main.temp_min}
            secondData={day.data.main.temp_max}
             />
           <View>
             <Text style={styles.main}>
                Coordinates:
             </Text>
           </View>
           <DataCard
            type={DataShowType.FULL}
            firstTitle="Lat"
            secondTitle="Lon"
            firstData={day.data.coord.lat}
            secondData={day.data.coord.lon}
             /> 
           <View style={styles.buttons}>
            {children[0]}
             <DataCard
              type={DataShowType.FULL}
              firstTitle='Sunrise'
              secondTitle='Sunset'
              firstData={day.data.sys.sunrise}
              secondData={day.data.sys.sunset}
             />
            {children[1]}
           </View>
           <DataCard
            type={DataShowType.BASIC}
            firstTitle='Humandity:'
            firstData={day.data.main.huidity}
           />
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