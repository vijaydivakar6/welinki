import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight } from "react-native";
import { COLORS, icons, images } from "../constants";
import ImagePickerComponent from "../components/ImagePicker"
import LinearGradient from 'react-native-linear-gradient';

const Mycontacts = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View>
                    <Text style={styles.pageTitle}>My Contacts</Text>
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Name*</Text>
                    <TextInput
                        style={styles.input} />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Phone*</Text>
                    <TextInput
                        style={styles.input}  />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Contact Image*</Text>
                    <View style={[styles.chooseFile]}>
                        <ImagePickerComponent />
                    </View>
                </View>
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                    <Text style={styles.buttonText} >
                        ADD
                </Text>
                </LinearGradient>

                <View style={styles.linktypeBox}>
                    <View style={styles.linktypeContent}>
                        <Text style={styles.linkTitle}>Link type</Text>
                        <Text style={styles.linkTitle}>Contact link</Text>
                    </View>
                    <View style={styles.linktypeContent}>
                        <Text style={styles.linkTitle}>Select type</Text>
                        <Text style={styles.linkTitle}>Enter link Url</Text>
                    </View>
                    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                        <Text style={styles.buttonText} >
                            SAVE
                </Text>
                    </LinearGradient>
                </View>
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 20,
        lineHeight: 32,
        color: '#17297C',
        marginBottom: 11,
        fontWeight:'bold',
        letterSpacing:0.6
    },
    container: {
        padding: 20
    },
    input: {
        height: 55,
        marginTop: 12,
        borderWidth: 0.5,
        padding: 10,
        borderColor: "#4C4C4C",
    },
    pageTitleTop: {
        marginTop: 10,
        color: '#17297C',
        fontSize: 14,
        lineHeight: 26,
        letterSpacing:0.6,
    },
    inputBoder: {
        borderWidth: 1,
        borderColor: "#4C4C4C",
        padding: 0,
        marginTop: 10
    },
    linktypeContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: "#4C4C4C"

    },
    linktypeBox: {
        backgroundColor: '#FBF2F2',
        marginTop: 32,
        padding: 15,
        borderRadius:20

    },
    linkTitle: {
        color: '#3F3D56',
        fontSize: 14,
        lineHeight: 32,
        letterSpacing:1,
        color:'#4c4c4c'
    },
    savePreviewBtn: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
        color: '#ffffff',
        marginTop: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chooseFile:{
     marginTop:10
    },
    buttonStyle: {
        height: 40,
        width: 160,
        borderRadius: 10,
        marginTop: 20,
        padding: 0
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 22,
        width: 100
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 5,
        color: '#ffffff',
        backgroundColor: 'transparent',
        letterSpacing:1,
    },
})
export default Mycontacts;