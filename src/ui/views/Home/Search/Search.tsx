import { useState } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SearchCityCard from './cards/SearchCityCard';
import { useGetSearchCityMutation } from '@/models/store/api/endpoints/endpoints';
import {LinearGradient} from 'expo-linear-gradient';
import Error from '../../../load/Error';

function Search():JSX.Element {
  const [text,setText] = useState<string>("");
  const [setParam,result] = useGetSearchCityMutation();
  
  const search = ():void => {
    if (text) setParam(text);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollBar}>
        <View style={styles.search}>
          <TextInput
           style={styles.input}
           onChangeText={setText} 
           placeholder='what city we are looking for?'
          />
          <TouchableOpacity onPress={search}>
            <LinearGradient
             style={styles.button}
             colors={['#79FF79','#00DB00',"green"]}
             start={{x:0,y:0}}
             end={{x:1,y:1}}>
              <Text style={styles.text}>
                search
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View>
         <SearchCityCard
          data={result.data}
          isLoading={result.isLoading}
          isError={result.isError}
         />
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      backgroundColor: 'rgb(235,235,235)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    search:{
      display:"flex",
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
    },
    scrollBar:{
      width:'100%',
      height:'100%'
    },
    input:{
      width:'90%',
      marginTop:5,
      marginBottom:5,
      textAlign:'center',
      fontSize:20
    },
    text:{
      fontSize:18,
      fontWeight:"bold",
      textAlign:'center',
      color:"white"
    },
    button:{
      borderColor:'grey',
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:8,
      borderWidth:1,
      width:100,
      height:30,
      marginTop:10,
      marginLeft:"auto",
      marginRight:'auto',
    },
})
export default Search