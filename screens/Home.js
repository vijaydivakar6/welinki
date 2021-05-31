import React from "react";
import {View,Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,FlatList}from "react-native";
import LottieView from 'lottie-react-native';
const Home =()=>{
  return(
      <View>
        <LottieView source={require('../assets/design.json')} autoPlay loop />
         <Text>Hai Home</Text>
      </View>
  )
}

const styles= StyleSheet.create({
  
})
export default Home;