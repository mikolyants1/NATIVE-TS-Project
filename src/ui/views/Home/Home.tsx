import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { TabRoutes } from '@/models/routes/TabRoutes';
import { INavRoutes, ITabRouteName, IThemeContext } from '@/libs/types/type';
import { useContext } from 'react';
import { ThemeContext } from '@/models/context/ThemeContext';

const Tabs = createBottomTabNavigator();

function Home():JSX.Element {
  const {theme} = useContext<IThemeContext>(ThemeContext);

  return (  
       <Tabs.Navigator    
        initialRouteName='Main'>
         {TabRoutes.map((i:INavRoutes<ITabRouteName>):JSX.Element=>(
           <Tabs.Screen key={i.name} {...i} />
         ))}
       </Tabs.Navigator>
  )
}

export default Home