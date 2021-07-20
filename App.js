import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import Sidebar from './screens/sideScreen';
import Loader from './components/Loader';
import {
  Home, Dashboard, Login, Getstarted, Signup, Forgetpassword, Uservendorlogin, Allcategories
  , Addbusiness, Allbusiness, Viewinfoads, Mybusiness, Youtubead, Imagead, Videoad, Mymembership, Addcategory, Mycontacts, Editprofile, Changepassword, Addlinks, Viewdetails, Galleryview, Youtubeview
} from "./screens"
import { Provider } from 'react-redux';
import { DrawerContent } from './screens/Drawercontent';
import { DrawerContentLeft } from './screens/Drawercontentleft';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';
import { navigationRef } from './navigation/RootNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainTabScreen from './screens/MainTabScreen';


const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: false,
        headerStyle: {
          backgroundColor: '#16d09b',
        },
      }}
    >
      <HomeStack.Screen name="Sidebar" options={({ navigation }) => ({
        headerRight: () => (
          <Icon name="user-circle-o" style={{ fontSize: 30, color: '#fff', marginRight: 15 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            title="Right"
            color="#000"
          />
        ),
        headerLeft: () => (
          <Icon name="bars" style={{ fontSize: 30, color: '#fff', marginLeft: 15 }}
            onPress={() => navigation.dangerouslyGetParent().dangerouslyGetParent().openDrawer()}
            title="Left"
            color="#000"
          />
        ),
      })}    >{props => <Sidebar {...props} />}</HomeStack.Screen>   
    </HomeStack.Navigator>

)


const AuthStack  = createStackNavigator();

const AuthStackScreen = ( ) => (
    <AuthStack.Navigator screenOptions={{
      headerShown: false,
      headerTitle: false,
      headerStyle: {
        backgroundColor: '#16d09b',
      },
    }} >
      <AuthStack.Screen name="Getstarted" component={Getstarted} />
      <AuthStack.Screen name="Uservendorlogin" component={Uservendorlogin} />
      <AuthStack.Screen name="Login" component={Login}   />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Forgetpassword" component={Forgetpassword} />
    </AuthStack.Navigator>

)



const DrawerR = createDrawerNavigator();
const RightDrawer = () => (
    <DrawerR.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="home" drawerPosition="right" drawerOpenRoute='RightSideMenu' >
      <DrawerR.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <DrawerR.Screen name="Sidebar" component={Sidebar} />
      <DrawerR.Screen name="MainTabScreen" component={MainTabScreen} />
      <DrawerR.Screen name="Allcategories" component={Allcategories} />
    </DrawerR.Navigator>
)

const DrawerL = createDrawerNavigator();
const LeftDrawer  = () => (
    <DrawerL.Navigator  drawerContent={props => <DrawerContentLeft {...props} />} initialRouteName="RightDrawer" drawerPosition="left" drawerOpenRoute='LeftSideMenu'>
      <DrawerL.Screen name="Allcategories" component={Allcategories} />
      <DrawerL.Screen name="RightDrawer" component={RightDrawer}  />
      <DrawerL.Screen name="Sidebar" component={Sidebar} />
    </DrawerL.Navigator>
  )



const AppStack = createStackNavigator();
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
    <NavigationContainer ref={navigationRef}  >
      <AppStack.Navigator headerMode="none" >
    {isAuth ? (
      <AppStack.Screen
      name="Home"
      component={LeftDrawer}
      options={{
        animationEnabled: false
      }}
      />
    ) : (
      <AppStack.Screen
       name="Auth"
       component={AuthStackScreen}
       options={{
         animationEnabled: false
       }}
       />
    )}
  </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
