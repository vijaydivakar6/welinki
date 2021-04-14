import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { COLORS, icons, images } from "../constants";
import  Carousalcomponent  from "../components/Carousal"

const Dashboard = () => {
  return (
    <ScrollView>
      <ImageBackground style={styles.backgroundimage} source={images.backgrounddesign}>
        <View style={[styles.container]} >
          <View style={styles.skipText}>
            <Text style={[styles.skipTextTitle]}>Skip</Text>
          </View>
          <View style={[styles.girlImage]}>
            <Image
              style={styles.tinyLogo}
              source={images.girlsit}
            />
          </View>
          <View style={[styles.CarousalStyle]}>
            <Carousalcomponent/>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'cover',
    height: '60%',
    flex: 2
  },
  skipText: {
    fontSize: 16,
    fontWeight: '900',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 20
  },
  skipTextTitle: {
    color: '#fff'
  },
  girlImage: {
    marginTop: 120,
    justifyContent: 'center',
    alignContent: 'center',
    flex:1
  },
  tinyLogo:{
    width:'100%'
  },
  CarousalStyle: {
    marginTop: 10,
    marginBottom: 100,
  }
})

export default Dashboard;