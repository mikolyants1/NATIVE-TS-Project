import { StyleSheet, Text, View } from 'react-native'
import { memo } from 'react';
import { DataShowType } from '@/libs/enum/enum';

interface IProps {
    type:DataShowType,
    firstTitle:string,
    secondTitle?:string,
    firstData:string,
    secondData?:string
}

 function DataCard({type,firstData,firstTitle,secondData,secondTitle}:IProps):JSX.Element{
    return (
        <View>
          <Text style={styles.main}>
            {firstTitle}:
            <Text style={styles.section}>
              {firstData}
            </Text>
            {type == DataShowType.FULL && (
              <>
                {"  "}
                {secondTitle}:
                <Text style={styles.section}>
                  {secondData}
                </Text>
              </>
            )}
          </Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default memo(DataCard)