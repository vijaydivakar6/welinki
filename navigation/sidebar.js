import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Dashboard, Login, Getstarted ,Signup, Forgetpassword ,Uservendorlogin ,Allcategories} from "../screens"
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from './tabs'

const Drawer = createDrawerNavigator();

const sideBar = () => {
  return (

      <Drawer.Navigator screenOptions={{
          headerShown:true,
          headerStyle:{
            backgroundColor:'#16d09b',
            color:'#fff'
          }
        }}
        >
        <Drawer.Screen name="Allcategories" component={Tabs} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Getstarted" component={Getstarted} />
        <Drawer.Screen name="Forgetpassword" component={Forgetpassword} />
        <Drawer.Screen name="Uservendorlogin" component={Uservendorlogin} />
        <Drawer.Screen name="Login" component={Login} />
       
      </Drawer.Navigator>
    
  );
}


export default sideBar