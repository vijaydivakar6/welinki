import React from 'react';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';


import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import {Imagead,Addcategory,Mycontacts,Youtubeview,Galleryview,Viewdetails,Listcollection,Mymembership,Getstarted ,Mybusiness ,Allcategories ,Changepassword,Allbusiness ,Viewinfoads ,Addbusiness , Login, Forgetpassword ,Dashboard,Addlinks, Signup,Editprofile} from "../screens"
// import Svg, { Path } from 'react-native-svg';

import { COLORS, icons } from "../constants"
import singupUseForm from '../container/signup/singupUseForm';
// import Listcollection from '../screens/ListCollection';


const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: true,
            style: {
                borderTopWidth: 0,
                backgroundColor: "#fff",
                elevation: 0
            }
        }}>
            <Tab.Screen name="Mycontacts" 
             children={() => <Allbusiness  />}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.bx_home} resizeMode="contain" style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.PRIMARY : COLORS.secondary
                        }}
                        />
                    ),
                    // tabBarButton: (props) => (
                    //     <TabBarCustomButton
                    //         {...props}
                    //     />
                    // )
                }}
            />
            <Tab.Screen name="Allbusiness" component={Allbusiness}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.bx_ad} resizeMode="contain" style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.PRIMARY : COLORS.secondary
                        }}
                        />
                    ),
                    // tabBarButton: (props) => (
                    //     <TabBarCustomButton
                    //         {...props}
                    //     />
                    // )
                }}
            />
            <Tab.Screen name="Viewinfoads" component={Viewinfoads}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.bx_building} resizeMode="contain" style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.PRIMARY : COLORS.secondary
                        }}
                        />
                    ),
                    // tabBarButton: (props) => (
                    //     <TabBarCustomButton
                    //         {...props}
                    //     />
                    // )
                }}
            />

            <Tab.Screen name="profile" component={Login}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.bx_profile} resizeMode="contain" style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? COLORS.PRIMARY : COLORS.secondary
                        }}
                        />
                    ),
                    // tabBarButton: (props) => (
                    //     <TabBarCustomButton
                    //         {...props}
                    //     />
                    // )
                }}
            />
        </Tab.Navigator>
    )
}
export default Tabs