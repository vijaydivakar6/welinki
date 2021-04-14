import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image, TextInput, ImageBackground } from 'react-native'
import { COLORS, icons, images } from "../constants";

const Login =()=>{
  return(
    <ScrollView>
     <ImageBackground style={styles.backgroundimage} source={images.backgrounddesign}>
      <View style={[styles.container]} >
        <View style={[styles.login_head]}>
          <Image  source={icons.leftarrow} />
          <Text style={[styles.login_text]}>Login</Text>
        </View>
        <View style={[styles.welcome_bk]}>
          <Text style={[styles.welcome_text]}>Welcome back !</Text>
        </View>
        <View style={[styles.welinki_logo]}>
          <Image  source={images.Logo} />
        </View>
        <View style={[styles.emailandpass]}>
          <View>
            <Text style={[styles.email_text]}>Email address</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderBottomWidth: 1,
                marginTop: 10
              }}
              label="Email"
              defaultValue="Dosamarvis@gmail.com" 
            />
          </View>
          <View>
            <Text style={[styles.password_text]}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.default} value="abcfghji" style={{
              height: 40,
              borderColor: 'gray',
              borderBottomWidth: 1,
              marginTop: 10
            }}
              label="Email"
              defaultValue="You can type in me" 
              />
          </View>
          <View style={styles.forgotSec} >
            <Text style={styles.forgotText}>Forgot Password</Text>
          </View>
          <View style={styles.getButton} >
            <Button title="Login" color="#05EB6D"  style={styles.ButtonStyle} />
          </View>
          <View style={styles.donthaveSec}>
            <Text style={styles.donthaveText}>Don’t have account? Signup</Text>
          </View>
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
  login_head: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  login_text: {
    color: '#fff',
    fontSize: 16,
  },
  welcome_bk: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 200
  },
  welcome_text: {
    fontSize: 22,
    color: '#fff',
  },
  welinki_logo: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  emailandpass: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  email_text: {
    fontSize: 14,
    color: '#2C2C2C',
    marginTop: 22,
  },
  password_text: {
    fontSize: 14,
    color: '#2C2C2C',
    marginTop: 22,
  },
  forgotSec: {
    marginTop: 10,
  },
  forgotText: {
    color: '#17297C',
  },
  getButton: {
    // flex: 1,
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#ffffff',
    paddingRight: 20,
    height: 45,
    marginTop: 26,
  
  },
  ButtonStyle: {
    width: '100%',
  },
  donthaveSec: {
    marginTop: 20,
  },
  donthaveText:{
    color: '#17297C',
  }
});
export default Login;