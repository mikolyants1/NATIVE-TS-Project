import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import {ArrowLeft} from 'react-native-feather';

export function LinkBack():JSX.Element {
    const nav = useNavigation();
    return (
     <TouchableOpacity
      onPress={nav.goBack.bind(nav)}>
        <ArrowLeft
         stroke="blue"
         strokeWidth={3}
        />
     </TouchableOpacity>
    )
}