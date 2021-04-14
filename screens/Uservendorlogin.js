import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image, TextInput, ImageBackground } from 'react-native'
import { COLORS, icons, images } from "../constants";

const Uservendorlogin =()=>{
  return(
    <ScrollView>
     <ImageBackground style={styles.backgroundimage} source={images.backgrounddesign}>
      <View style={[styles.container]}>
        <View style={[ styles.vendorImg]}>
          <Image style={[ styles.vendorIcon]} source={images.vendoricon} />
        </View>
        <View style={styles.vendorText}>
          <Text style={[styles.vendorTitle]}>Vendor</Text>
          <Text style={[styles.vendorTextPara]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et
            rhoncus risus consectetur.
        </Text>
        </View>
        <View style={[ styles.userImg]}>
          <Image source={images.usericon} />
        </View>
        <View style={styles.userText}>
          <Text style={[ styles.userTitle]}>User</Text>
          <Text style={[ styles.userTextPara]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et
            rhoncus risus consectetur.
        </Text>
        </View>
      </View>
    </ImageBackground>
  </ScrollView>
  )
}

var styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'contain',
    height:'60%',
    flex: 1
  },
  vendorImg: {
    marginTop:50,
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center',
  },
  userImg:{
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center',
  },
  serImg:{
    alignContent:'center',
    justifyContent:'center',
  },
  vendorTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 32,
  },
  vendorTextPara: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '500',
    marginBottom: 10,
    lineHeight: 26,
    paddingTop: 10,
    paddingBottom: 50,
    paddingRight: 50,
    paddingLeft: 50
  },
  userTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#2C2C2C',
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 32,
    paddingTop: 10,
  },
  userTextPara: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2C2C2C',
    fontWeight: '500',
    marginBottom: 10,
    lineHeight: 26,
    paddingTop: 10,
    paddingBottom: 50,
    paddingRight: 50,
    paddingLeft: 50
  },

});

export default Uservendorlogin;