import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { memo } from "react"
import { ButtonType } from "@/libs/enum/enum";
import { IButtonProps } from "@/libs/types/type";

interface IProps {
  update:(args:IButtonProps)=>void,
  title:ButtonType,
  allow:boolean
}

 function ScrollButton({update,title,allow}:IProps):JSX.Element{ 
  const addCount = ():void => {
    update({title,allow});
    if (!allow){
      Alert.alert(
        'Warning',
        title == ButtonType.PREV
        ? "it is first city"
        : "it is last city"
      );
    }
  };
  return (
     <View style={styles.button}>
       <TouchableOpacity onPress={addCount}>
         <Text style={styles.text}>
            {title}
         </Text>
       </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
  button:{
    width:60,
    borderRadius:'50%',
    height:60,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:1,
    backgroundColor:`rgb(230,230,230)`,
    opacity:0.5
  },
  text:{
    textAlign:'center',
    marginTop:17,
   color:'black',
   fontSize:17
  },
});

export default memo(ScrollButton);