import React, {useEffect, useLayoutEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from './navigation/tabs';
import Sidebar from './navigation/sidebar';

import {
  Allbusiness,
  Allcategories,
  Forgetpassword,
  Getstarted,
  Login,
  Signup,
  Uservendorlogin,
  Viewinfoads,
} from './screens';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator} from 'react-native';

import Tab from './navigation/tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(async () => {
    console.log('useEffecffff');
    setLoader(true);
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsAuth(true);
      }
      console.log(token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName={'Getstarted'}
      >
        <Stack.Screen name="tab" component={Signup} />
        {/* {isAuth ? (
          <>
            <Tab/>
            <Stack.Screen name="Allcategories" component={Allcategories} />
            <Stack.Screen name="Allbusiness" component={Allbusiness} />
            <Stack.Screen name="Viewinfoads" component={Viewinfoads} />
          </>
        ) : (
          <>
            <Stack.Screen name="Getstarted" component={Getstarted} />
            <Stack.Screen name="Uservendorlogin" component={Uservendorlogin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
