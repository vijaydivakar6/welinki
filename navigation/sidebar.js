import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Dashboard, Login, Getstarted ,Signup, Forgetpassword ,Uservendorlogin ,Allcategories
   ,Addbusiness ,Allbusiness ,Viewinfoads ,Mybusiness ,Youtubead ,Imagead ,Videoad ,Mymembership ,Addcategory ,Mycontacts ,Editprofile ,Changepassword ,Addlinks ,Viewdetails} from "../screens"
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from './tabs';
import { DrawerContent } from '../screens/Drawercontent';
import LinearGradient from 'react-native-linear-gradient';


const Drawer = createDrawerNavigator();

const sideBar = () => {
      
  return (

      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> } screenOptions={{
          headerShown:true,
          headerStyle:{
            backgroundColor:'#16d09b',
            color:'#fff'
          },
          headerBackground: (
            <LinearGradient
              colors={['#a13388', '#10356c']}
              style={{ flex: 1 }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
            />
            
          ),
          
        }}>
        <Drawer.Screen name="Allcategories" component={Tabs} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Getstarted" component={Getstarted} />
        <Drawer.Screen name="Uservendorlogin" component={Uservendorlogin} />
        <Drawer.Screen name="Forgetpassword" component={Forgetpassword} />
        <Drawer.Screen name="Addbusiness" component={Addbusiness} />
        <Drawer.Screen name="Allbusiness" component={Allbusiness} />
        <Drawer.Screen name="Addlinks" component={Addlinks} />
        <Drawer.Screen name="Viewinfoads" component={Viewinfoads} />
        <Drawer.Screen name="Mybusiness" component={Mybusiness} />
        <Drawer.Screen name="Youtubead" component={Youtubead} />
        <Drawer.Screen name="Imagead" component={Imagead} />
        <Drawer.Screen name="Videoad" component={Videoad} />
        <Drawer.Screen name="Mymembership" component={Mymembership} />
        <Drawer.Screen name="Addcategory" component={Addcategory} />
        <Drawer.Screen name="Mycontacts" component={Mycontacts} />
        <Drawer.Screen name="Editprofile" component={Editprofile} />
        <Drawer.Screen name="Changepassword" component={Changepassword} />
        <Drawer.Screen name="Viewdetails" component={Viewdetails} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Login" component={Login} />
       
      </Drawer.Navigator>
    
  );
}


export default sideBar