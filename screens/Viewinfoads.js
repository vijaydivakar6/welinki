import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { COLORS, icons, images } from "../constants";

const Viewinfoads = () => {

    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={styles.allCateSec} >
                    <Text style={styles.allCateText}>Cuion Technologies</Text>
                    <Text style={styles.infoPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet. </Text>
                </View>
                <View style={styles.imgAdSec}>
                    <View style={styles.imgAdContent}>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                    <Text style={styles.imgAdTitle}>Handy Clutches</Text>
                    <Text style={styles.imgAdPara}>Lorem ipsum dolor sit ametdolor</Text>
                    </View>
                    <View style={styles.imgAdContent}>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                    <Text style={styles.imgAdTitle}>Handy Clutches</Text>
                    <Text style={styles.imgAdPara}>Lorem ipsum dolor sit ametdolor</Text>
                    </View>
                </View>
                <View style={styles.imgAdSec}>
                    <View style={styles.imgAdContent}>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                    <Text style={styles.imgAdTitle}>Handy Clutches</Text>
                    <Text style={styles.imgAdPara}>Lorem ipsum dolor sit ametdolor</Text>
                    </View>
                    <View style={styles.imgAdContent}>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                    <Text style={styles.imgAdTitle}>Handy Clutches</Text>
                    <Text style={styles.imgAdPara}>Lorem ipsum dolor sit ametdolor</Text>
                    </View>
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
        letterSpacing: 0.6
    },
    infoPara: {
        fontSize: 14,
        lineHeight: 26,
        color: '#2C2C2C',
        fontWeight: '500',
        fontFamily: 'rubik',
        letterSpacing: 0.6
    },
    imgAdSec:{
        flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30
    },
    imgAdContent:{
        flex:1,
      justifyContent:'center',
      alignContent:'center',
      textAlign:'center',
      padding:20
    },
    imgAdTitle:{
        fontSize: 14,
        lineHeight: 26,
        color: '#17297C',
        fontWeight: '500',
        fontFamily: 'rubik',
        letterSpacing: 0.6
    }

})
export default Viewinfoads;