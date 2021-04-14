import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs'
import Sidebar from './navigation/sidebar'
import {Home}from './screens'
import { Dashboard }from './screens'

const Stack = createStackNavigator();

const  App =() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName={"Home"}
        >
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Signup" component={Sidebar} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;