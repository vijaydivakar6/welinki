import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button } from "react-native";
import { COLORS, icons, images } from "../constants";
import ImagePickerComponent from "../components/ImagePicker"
import DatePickerComponent from "../components/DatePicker";
import LinearGradient from 'react-native-linear-gradient';
const Imagead = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View>
                    <Text style={styles.pageTitle}>Image Ad</Text>
                </View>
                <View>
                    <Text  style={[styles.inputTitle]}>Ad’s Title*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the title"
                        keyboardType="numeric" />
                </View>
                <View style={[styles.imgSelect]}>
                    <Text  style={[styles.inputTitle]}>Thumbnail Image*</Text>
                    <View style={[styles.chooseFile]}>
                        <ImagePickerComponent />
                    </View>
                </View>
                <View style={[styles.datPicker]}>
                    <DatePickerComponent />
                </View>
                <View style={[styles.selectBox]}>
                    <Text  style={[styles.inputTitle]}>Image Banner : Select Images </Text>
                    <View style={[styles.chooseFile]}>
                        <ImagePickerComponent />
                    </View>
                </View>
                <View style={styles.desCription}>
                    <Text  style={[styles.inputTitle]}>Description</Text>
                </View>
                <View style={styles.textAreaContainer} >

                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Description of Ad"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={[styles.savePreviewBtn]}>
                    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                        <Text style={styles.buttonText} >
                            SAVE
                </Text>
                    </LinearGradient>
                    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                        <Text style={styles.buttonText} >
                            PREVIEW
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
        borderWidth: 1,
        padding: 10,
        borderColor: "#C4C4C4",
    },
    selectBox: {
        marginTop: 15
    },
    inputBoder: {
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 0,
        marginTop: 10
    },
    imgSelect: {
        marginTop: 10
    },
    chooseFile: {
        marginTop: 10,
    },
    selectLinkBorder: {
        borderWidth: 1,
        borderColor: "#C4C4C4",
        padding: 10,
        marginTop: 10
    },
    textAreaContainer: {
        borderWidth: 1,
        padding: 5,
        marginTop: 10,
        borderColor: "#C4C4C4",
    },
    textArea: {
        height: 70,
        justifyContent: "flex-start",
    },
    desCription: {
        marginTop: 10
    },
    savePreviewBtn: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
        color: '#ffffff',
        marginTop: 26,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 10,
        marginRight: 20,
        marginRight: 25

    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        letterSpacing:1
    },
    inputTitle:{
        color:'#17297C',
        lineHeight:26,
        fontSize:14,
        letterSpacing:0.2,
      }
})
export default Imagead;