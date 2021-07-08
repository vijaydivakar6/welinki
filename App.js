import React, {useEffect, useLayoutEffect, useState} from 'react';
import { Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';
import Sidebar from './screens/sideScreen';
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
  Payment,
  Editprofile,
} from './screens';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, ActivityIndicator} from 'react-native';

import {navigationRef} from './navigation/RootNavigation';

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
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: false,
          headerStyle: {
            backgroundColor: '#16d09b',
          },
        }}
        initialRouteName={isAuth ? 'SideScreen' : 'Getstarted'} >
        <Stack.Screen name="SideScreen" options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) }
              title="Right"
              color="#000"
            />
          ),
          headerLeft: () => (
            <Button
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Left"
              color="#000"
            />
          ),
          
        })} >{props => <Sidebar {...props}  />}</Stack.Screen>
        <Stack.Screen name="Getstarted" component={Getstarted} />
        <Stack.Screen name="Uservendorlogin" component={Uservendorlogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
