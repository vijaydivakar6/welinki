import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image, TextInput, ImageBackground } from 'react-native'
import { COLORS, icons, images } from "../constants";

const Forgetpassword =()=>{
  return(
    <ScrollView>
     <ImageBackground style={styles.backgroundimage} source={images.backgrounddesign}>
      <View style={[styles.container]} >
        <View style={[styles.welcome_bk]}>
          <Text style={[styles.welcome_text]}>Forgot Password</Text>
        </View>
        <View style={[styles.welinki_logo]}>
          <Image source={images.Logo} />
        </View>
        <View style={[styles.forgot_textSec]}>
          <Text style={[styles.forgot_text]}>Forgot your password? No problem. Just let us know your email address and we will email you a password reset link.</Text>
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
          <View style={styles.getButton} >
            <Button title="send" color="#05EB6D"  style={styles.ButtonStyle} />
          </View>
        </View>
      </View>
    </ImageBackground>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'contain',
    height:'60%',
    flex: 1
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
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:25
  },
  emailandpass: {
    flex: 1,
    width: '100%',
    padding: 40,
  },
  email_text: {
    fontSize: 14,
    color: '#2C2C2C',
  },
  getButton: {
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
  },
  forgot_text:{
   fontSize:14,
   lineHeight:26,
   paddingRight:40,
   paddingLeft:40
  }

})

export default Forgetpassword;