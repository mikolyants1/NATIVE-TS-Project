import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { hashedStore, store } from '@/models/store/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from '@/models/routes/StackRoutes';
import { INavRoutes, IStackRouteName, StackNavigator } from '@/libs/types/type';
import { useState } from 'react';
import { ThemeContext } from '@/models/context/ThemeContext';

const Stack = createNativeStackNavigator<StackNavigator>();

export default function App():JSX.Element {
  const [theme,setTheme] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={hashedStore}>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              {StackRoutes.map((i:INavRoutes<IStackRouteName>):JSX.Element=>(
                <Stack.Screen key={i.name} {...i} />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
}


