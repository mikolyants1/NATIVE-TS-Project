import { StyleSheet, Text, View } from 'react-native'
import { memo } from 'react';
import { IWeekList } from '../../../libs/types/type';
import Animated,{FadeInLeft} from 'react-native-reanimated';

interface IProps {
    idx:number,
    item:IWeekList
}
 function Week({item,idx}:IProps):JSX.Element{
   const num:number = idx + 1;
    return (
        <Animated.View style={styles.week}
         entering={FadeInLeft.delay(num * 100)}>
          <View>
            <Text style={styles.date}>
               Date {num}
            </Text>
          </View>
          <View>
            <Text style={styles.deg}>
               day:
              <Text style={styles.section}>
                 {item.temp.day}
              </Text>
            </Text>
            <Text style={styles.deg}>
                night:
              <Text style={styles.section}>
                 {item.temp.night}
              </Text>
            </Text>
          </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    date:{
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
      color:'white'
    },
    deg:{
      fontSize:17,
      fontWeight:'bold',
      textAlign:'center',
      color:'white'
    },
    week:{
      marginTop:10,
      width:120
    },
    section:{
      color:'grey',
      fontWeight:'bold'
    },
});

export default memo(Week)