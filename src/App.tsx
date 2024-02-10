import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ToastProvider} from 'react-native-toast-notifications';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {store} from './redux/store';
import {Login, Splash, Task, TaskDetail, Tasks} from './screens';
import {ApplicationStackParamList} from './models';

const Stack = createStackNavigator<ApplicationStackParamList>();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tasks" component={Tasks} />
                <Stack.Screen name="Task" component={Task} />
                <Stack.Screen name="TaskDetail" component={TaskDetail} />
              </Stack.Navigator>
            </NavigationContainer>
          </ToastProvider>
        </QueryClientProvider>
      </ApplicationProvider>
    </Provider>
  );
}

export default App;
