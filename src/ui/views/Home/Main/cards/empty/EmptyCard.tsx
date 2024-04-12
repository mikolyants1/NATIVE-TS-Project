import { StyleSheet, Text, View } from "react-native";

export function EmptyCard():JSX.Element{
    return (
      <View>
        <Text style={styles.text}>
          Your city list is empty
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  text:{
    fontSize:20
  }
});