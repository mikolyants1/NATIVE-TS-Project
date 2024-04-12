import {View,Button} from 'react-native'
import { useAction } from '@/models/store/store/store';
import City from '../../cards/City';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import Error from '../../load/Error';
import { getName } from '@/models/functions/get/getName';

function Personal():JSX.Element{
   const {params}:RouteProp<ParamListBase> = useRoute();
   const {addNewCity} = useAction();
   
   if (!params) return <Error />;
   return (
        <>
         <View style={{marginTop:20}}>
           <City city={getName(params)}>
              {[0,1,2].map((i:number)=><View key={i} />)}
           </City>
         </View>
         <Button 
          title='add city'
          onPress={()=>addNewCity(getName(params))}
          />
        </>
    );
};

export default Personal