import React from 'react';

import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';


import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

<<<<<<< HEAD
import {Viewdetails,Listcollection,Mymembership,Getstarted ,Mybusiness ,Allcategories ,Changepassword,Allbusiness ,Viewinfoads ,Addbusiness , Login, Forgetpassword ,Dashboard,Addlinks, Signup,Editprofile} from "../screens"
=======
import {Viewdetails,Mymembership,Getstarted ,Mybusiness ,Allcategories ,Changepassword,Allbusiness ,Viewinfoads ,Addbusiness ,Youtubead, Login, Forgetpassword ,Dashboard,Addlinks, Signup,Editprofile} from "../screens"
>>>>>>> bbe28494e0503ea5c92a266c85ccfc931e7c8225
// import Svg, { Path } from 'react-native-svg';

import { COLORS, icons } from "../constants"
import singupUseForm from '../container/signup/singupUseForm';
// import Listcollection from '../screens/ListCollection';


const Tab = createBottomTabNavigator();
// const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
//     var isSelected = accessibilityState.isSelected
//     if (isSelected) {
//         return (
//             <View style={{ flex: 1, alignItems: "center" }}>
//                 <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
//                     <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
//                     <Svg
//                         width={75}
//                         height={61}
//                         viewBox="0 0 75 61"
//                     >
//                         <Path
//                             d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
//                             fill={COLORS.white}
//                         />
//                     </Svg>
//                     <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
//                 </View>

//                 <TouchableOpacity
//                     style={{
//                         top: -22.5,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         width: 50,
//                         height: 50,
//                         borderRadius: 25,
//                         backgroundColor: COLORS.white
//                     }}
//                     onPress={onPress}
//                 >
//                     {children}
//                 </TouchableOpacity>
//             </View>
//         )


//     }
//     else {
//         return(
//             <TouchableOpacity
//                 style={{
//                     flex: 1,
//                     height: 60,
//                     backgroundColor: COLORS.white
//                 }}
//                 activeOpacity={1}
//                 onPress={onPress}
//             >
//                 {children}
//             </TouchableOpacity>
//         )
//     }
// }
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
            <Tab.Screen name="Allbusiness" 
             children={() => <Viewdetails formHelp={singupUseForm()} />}
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
            <Tab.Screen name="Allads" component={Allcategories}
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
            <Tab.Screen name="All Business" component={Viewinfoads}
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

            <Tab.Screen name="profile" component={Getstarted}
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