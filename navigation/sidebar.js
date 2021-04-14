import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Dashboard, Login, Getstarted ,Signup, Forgetpassword ,Uservendorlogin ,Allcategories} from "../screens"

const Drawer = createDrawerNavigator();

const sideBar = () => {
  return (

      <Drawer.Navigator initialRouteName="Signup">
        <Drawer.Screen name="Home" component={Signup} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    
  );
}


export default sideBar