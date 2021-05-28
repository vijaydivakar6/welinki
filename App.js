import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import Tabs from './navigation/tabs'
import Sidebar from './navigation/sidebar'
import {Home}from './screens'
import { Dashboard }from './screens'
import { Provider } from 'react-redux'
import store from './store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import Loader from './components/Loader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const  App =({navigation}) =>{

  return (
    <Provider store={store}>
        <Loader/>
         <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
        initialRouteName={"Home"}
        >
      {/* <Stack.Screen name="Login" component={Tabs} /> */}
      <Stack.Screen name="Home" component={Sidebar} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default App;