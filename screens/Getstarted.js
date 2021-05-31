import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image, TextInput, ImageBackground } from 'react-native'
import { COLORS, icons, images } from "../constants";
import LinearGradient from 'react-native-linear-gradient';


const Getstarted = () => {
  return (
    <ScrollView>
      <View>
          
            </View>
      <ImageBackground style={styles.backgroundimage} source={images.backgrounddesign}>
        <View style={[styles.container]} >
          <View style={[styles.welinkilogoImg]}>
            <Image source={images.welinkilogo} />
          </View>
          <View style={[styles.girlstandingImg]}>
            <Image source={images.girlstanding} />
          </View>
          <View style={styles.gettingStart}>
            <Text style={[styles.getstartedTitle]}>Lorem ipsum sesde</Text>
            <Text style={[styles.getstartedText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet, consectetur.</Text>
          </View>
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
            <Text style={styles.buttonText} >
              Get Started
                </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'contain',
    height: '70%',
    width: '100%',
    flex: 1
  },
  welinkilogoImg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%'
  },
  girlstandingImg: {
    flex: 1,
    height: 230,
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gettingStart: {
    marginTop: 50
  },
  getstartedTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#17297C',
    fontWeight: '900',
    marginBottom: 10,
    letterSpacing:1
  },
  getstartedText: {
    fontSize: 14,
    lineHeight: 26,
    color: '#2C2C2C',
    textAlign: 'center',
    paddingTop: 10,
    paddingRight: 25,
    paddingLeft: 25,
    letterSpacing:1
  },
  getButton: {
    flex: 1,
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#ffffff',
    width: 420,
    paddingRight: 20,
    paddingLeft: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
    marginBottom:22,
    marginLeft: 135,
    width: 150,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
   letterSpacing:1
  },

})
export default Getstarted;