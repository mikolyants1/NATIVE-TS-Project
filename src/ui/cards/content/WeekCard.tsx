import { StyleSheet, Text, View } from 'react-native'
import { memo } from 'react';
import { IWeekList } from '../../../libs/types/type';

interface IProps {
    idx:number,
    item:IWeekList
}
 function Week({item,idx}:IProps):JSX.Element{
    return (
        <View style={styles.week}>
          <View>
            <Text style={styles.date}>
               Date {idx + 1}
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
        </View>
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