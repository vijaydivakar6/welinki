import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Dashboard, Login, Getstarted ,Signup, Forgetpassword ,Uservendorlogin ,Allcategories
   ,Addbusiness ,Allbusiness ,Viewinfoads ,Mybusiness ,Youtubead ,Imagead ,Videoad ,Mymembership ,Addcategory ,Mycontacts ,Editprofile ,Changepassword ,Addlinks ,Viewdetails,Galleryview,Youtubeview} from "../screens"
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from '../screens/MainTabScreen';
import { DrawerContent } from '../screens/Drawercontent';
import LinearGradient from 'react-native-linear-gradient';
import MainTabScreen from '../screens/MainTabScreen';

const DrawerL = createDrawerNavigator();
const DrawerR = createDrawerNavigator();

function RightDrawer() {
  
      
  return (

      <DrawerR.Navigator drawerContent={props => <DrawerContent {...props}/> } screenOptions={{
          headerShown:true,
          headerTitle: false,
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
          
        }} initialRouteName="Home" drawerPosition="right" >
         
        <DrawerR.Screen name="Allcategories" component={MainTabScreen} />
        <DrawerR.Screen name="Dashboard" component={Dashboard} />
        <DrawerR.Screen name="Getstarted" component={Getstarted} />
        <DrawerR.Screen name="Uservendorlogin" component={Uservendorlogin} />
        <DrawerR.Screen name="Forgetpassword" component={Forgetpassword} />
        <DrawerR.Screen name="Addbusiness" component={Addbusiness} />
        <DrawerR.Screen name="Allbusiness" component={Allbusiness} />
        <DrawerR.Screen name="Addlinks" component={Addlinks} />
        <DrawerR.Screen name="Viewinfoads" component={Viewinfoads} />
        <DrawerR.Screen name="Mybusiness" component={Mybusiness} />
        <DrawerR.Screen name="Youtubead" component={Youtubead} />
        <DrawerR.Screen name="Imagead" component={Imagead} />
        <DrawerR.Screen name="Videoad" component={Videoad} />
        <DrawerR.Screen name="Mymembership" component={Mymembership} />
        <DrawerR.Screen name="Addcategory" component={Addcategory} />
        <DrawerR.Screen name="Mycontacts" component={Mycontacts} />
        <DrawerR.Screen name="Editprofile" component={Editprofile} />
        <DrawerR.Screen name="Changepassword" component={Changepassword} />
        <DrawerR.Screen name="Viewdetails" component={Viewdetails} />
        <DrawerR.Screen name="Galleryview" component={Galleryview} />
        <DrawerR.Screen name="Youtubeview" component={Youtubeview} />
      </DrawerR.Navigator>
    
  );
}

function LeftDrawer() {
  return (
    <DrawerL.Navigator initialRouteName="RightDrawer"   drawerPosition="left">
       <DrawerL.Screen name="RightDrawer" component={RightDrawer} />
      <DrawerL.Screen name="Addcategory" component={Addcategory} />
      <DrawerL.Screen name="Allbusiness" component={Allbusiness} />
    </DrawerL.Navigator>
  )
}

export default LeftDrawer