import {View,Text,Button, StyleSheet, ActivityIndicator, Easing} from 'react-native';
import { memo } from 'react';
import { ISearchItem, NavFunction } from '@/libs/types/type';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated,{FadeInDown} from 'react-native-reanimated';
import Error from '@/ui/load/Error';
import { Entry } from '@/libs/style/style';

interface IProps {
  data:ISearchItem|undefined,
  isLoading:boolean,
  isError:boolean
}

function SearchCityCard({data,isError,isLoading}:IProps):JSX.Element{
  const navigation = useNavigation<NavFunction>();

  const navigate = (name:string) => ():void => {
    navigation.navigate('Personal',{name})
  }

  if (isLoading){
    return (
      <ActivityIndicator
       style={{marginTop:40}}
       color="green"
       size="large"
       />
    );
  }
  if (isError) return <Error />;
  if (!data) return <View />;

    return (
      <Animated.View
       style={styles.wrap}
       entering={Entry}>
          <LinearGradient
           colors={["gold","gold","#F0F0F0","#404040","#404040"]}
           start={{x:0,y:0}}
           end={{x:0.4,y:0.5}}
           style={styles.container}>
          <View>
            <Text style={styles.title}>
              {data.name}
            </Text>
            <Text style={styles.main}>
              country {" "}
              <Text style={styles.section}>
                {data.sys.country}
              </Text>
            </Text>
          </View>
          <View>
            <View>
              <Text style={styles.main}>
                 coordinates:
              </Text>
            </View>
            <View>
              <Text style={styles.main}>
                 Lat:
                <Text style={styles.section}>
                   {data.coord.lat}
                </Text>
                 {"  "}
                 Lon:
                <Text style={styles.section}>
                   {data.coord.lon}
                </Text>
              </Text>
            </View>
          </View>
          <Button 
           title='more' 
           onPress={navigate(data.name)}
           />  
        </LinearGradient>
        </Animated.View>
    )  
}

const styles = StyleSheet.create({
    wrap:{
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      marginTop:20,
      width:'90%',
      height:170,
      display:"flex",
      justifyContent:"center",
      borderColor:"grey",
      borderRadius:10,
      overflow:"hidden"        
    },
    title:{
      textAlign:'center',
      fontSize:28,
      color:'white',
      fontWeight:'bold',
      marginTop:20
    },
    main:{
      fontSize:22,
      fontWeight:'bold',
      textAlign:'center',
      color:'white'
    },
    section:{
      color:'grey',
      fontWeight:'bold'
    }
});

export default memo(SearchCityCard);
