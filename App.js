import React, { useEffect, useLayoutEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import Sidebar from './navigation/sidebar';
import Loader from './components/Loader';
import {
  Allbusiness,
  Allcategories,
  Forgetpassword,
  Getstarted,
  Login,
  Signup,
  Uservendorlogin,
  Viewinfoads,
  Payment
} from './screens';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

import { navigationRef } from './navigation/RootNavigation';



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

  if (loader) {
    return <Loader />;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      // initialRouteName={'Getstarted'}
      >
        {/* <Stack.Screen name="tab" component={Signup} /> */}
        {isAuth ? (
          <>
            {/* <Stack.Screen name="HomeScreen" component={MainTabScreen} /> */}
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
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
