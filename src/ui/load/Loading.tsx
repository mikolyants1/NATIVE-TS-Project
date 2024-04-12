import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Spin } from "../../libs/style/style";

function Loading():JSX.Element {
  const [spin,setSpin] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setSpin((prv:number)=>(
        prv == 360 ? 0 : prv + 10
      ));
    }, 50);
  },[]);
  return (
    <View style={styles.loading}>
       <Spin spin={spin} />
    </View>
  )
}

const styles = StyleSheet.create({
   loading:{
     display:"flex",
     justifyContent:"center",
     width:"100%"
   }
});

export default Loading