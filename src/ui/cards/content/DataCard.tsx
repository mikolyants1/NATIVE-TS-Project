import { StyleSheet, Text, View } from 'react-native'
import { memo } from 'react';

interface IProps {
    title:string,
    subTitle:string,
    temp:string,
    feels_like:string
}

 function DataCard({title,subTitle,temp,feels_like}:IProps):JSX.Element{
    return (
        <View>
          <Text style={styles.main}>
            {title}:
            <Text style={styles.section}>
              {temp}
            </Text>
             {"  "}
              {subTitle}:
            <Text style={styles.section}>
              {feels_like}
            </Text>
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