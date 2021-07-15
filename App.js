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

const AuthStack  = createStackNavigator();

const AuthStackScreen = ( props) => (
    <AuthStack.Navigator screenOptions={{
      headerShown: false,
      headerTitle: false,
      headerStyle: {
        backgroundColor: '#16d09b',
      },
    }} >
      <AuthStack.Screen name="Getstarted" component={Getstarted} />
      <AuthStack.Screen name="Uservendorlogin" component={Uservendorlogin} />
      <AuthStack.Screen name="Login" component={Login} {...props}  />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Forgetpassword" component={Forgetpassword} />
    </AuthStack.Navigator>

)

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
      <HomeStack.Screen name="Getstarted" component={Getstarted} />
      <HomeStack.Screen name="Uservendorlogin" component={Uservendorlogin} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Signup" component={Signup} />
      <HomeStack.Screen name="Forgetpassword" component={Forgetpassword} />    
    </HomeStack.Navigator>

)


const DrawerR = createDrawerNavigator();
const RightDrawer = () => (
    <DrawerR.Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="home" drawerPosition="right" drawerOpenRoute='RightSideMenu' >
      <DrawerR.Screen name="home" component={HomeStackScreen} />
      <DrawerR.Screen name="Sidebar" component={Sidebar} />
      <DrawerR.Screen name="MainTabScreen" component={MainTabScreen} />
    </DrawerR.Navigator>
)

const DrawerL = createDrawerNavigator();
const LeftDrawer  = () => (
    <DrawerL.Navigator  drawerContent={props => <DrawerContentLeft {...props} />} initialRouteName="RightDrawer" drawerPosition="left" drawerOpenRoute='LeftSideMenu'>
      <DrawerL.Screen name="Home" component={RightDrawer}  />
      <DrawerR.Screen name="Sidebar" component={Sidebar} />
    </DrawerL.Navigator>
  )


const RootStack = createStackNavigator();
const RootStackScreen = ({ isAuth }) => (
  <RootStack.Navigator headerMode="none" >
    {isAuth ? (
      <RootStack.Screen
        name="App"
        component={LeftDrawer}
        options={{
          animationEnabled: false
        }}
        />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
        />
    )}
  </RootStack.Navigator>
);


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
      <RootStackScreen isAuth={isAuth}/>
    </NavigationContainer>
  );


};

export default App;
