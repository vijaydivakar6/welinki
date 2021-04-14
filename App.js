import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import Tabs from './navigation/tabs'
import Sidebar from './navigation/sidebar'
import {Home}from './screens'
import { Dashboard }from './screens'
import Icon from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const  App =({navigation}) =>{
  return (
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
  );
}


export default App;