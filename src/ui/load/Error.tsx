import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Error():JSX.Element {
  const [point,setPoint] = useState<string>("");

  useEffect(()=>{
   setInterval(()=>{
     setTimeout(()=>setPoint(""),0);
     setTimeout(()=>setPoint("."),200);
     setTimeout(()=>setPoint(".."),400);
     setTimeout(()=>setPoint("..."),600);
   },800);
  },[]);

  return (
    <View style={styles.error}>
      <Text>
        error {point}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  error:{
    width:"100%",
    textAlign:"center"
  }
})

export default Error