import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { COLORS, icons, images } from "../constants";
import ImageCarousal from "../components/ImageCarousal";
import VideoCarousal from "../components/VideoCarousal";
import client from '../API/api';
import axios from "axios";



const Viewinfoads = () => {

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        console.log('added');
        setLoader(true);
        axios
          .get(`http://3dd8e1a82b4e.ngrok.io/vendor/business`)
          .then(({data: {data}}) => {
               console.log(data,'dsdsds');
          })
          .catch(error => {
            setLoader(true);
            console.log(error);
            // console.log(data,'error');
          });
      }, []);

    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={styles.allCateSec} >
                    <Text style={styles.allCateText}>Cuion Technologies</Text>
                    <Text style={styles.infoPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet. </Text>
                </View>

                <View style={styles.imgAdTitle}>
                    <Image style={[styles.busiImg]} source={icons.imageAd} />
                    <Text style={styles.imgAdTitleAd}>Image Ad’s</Text>
                </View>
                <View style={styles.imgAdSec}>
                    <ImageCarousal />
                </View>
                <View style={styles.imgAdTitle}>
                    <Image style={[styles.busiImg]} source={icons.videoAd} />
                    <Text  style={styles.imgAdTitleAd}>Video Ad’s</Text>
                </View>
                <View style={styles.imgAdSec}>
                    <VideoCarousal />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff'

    },
    allCateSec: {
        flexDirection: 'column',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
    },
    allCateText: {
        fontSize: 20,
        lineHeight: 32,
        color: '#17297C',
        marginTop: 26,
        fontWeight: '500',
        fontFamily: 'rubik',
        letterSpacing: 0.6,
        fontWeight:'bold'
    },
    infoPara: {
        fontSize: 14,
        lineHeight: 26,
        color: '#2C2C2C',
        fontWeight: '500',
        fontFamily: 'rubik',
        letterSpacing: 1,
        marginTop:10
    },
    imgAdTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#05EB6D",
        padding: 10,
        width: 135,
       borderRadius:5
    },
    imgAdTitleAd:{
       letterSpacing:0.6,
       color:'#17297C',
       fontWeight:'900',
    },
    busiImg: {
        marginRight: 10
    },
    imgAdSec: {
        marginRight: 20,
        marginLeft: 20
    }

})
export default Viewinfoads;