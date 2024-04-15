import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { TabRoutes } from '@/models/routes/TabRoutes';
import { INavRoutes, ITabRouteName } from '@/libs/types/type';

const Tabs = createBottomTabNavigator();

function Home():JSX.Element {
  return (  
    <Tabs.Navigator    
     initialRouteName='Main'
     screenOptions={{tabBarActiveTintColor:"orange"}}>
     {TabRoutes.map((i:INavRoutes<ITabRouteName>):JSX.Element=>(
       <Tabs.Screen key={i.name} {...i} />
      ))}
    </Tabs.Navigator>
  )
}

export default Home