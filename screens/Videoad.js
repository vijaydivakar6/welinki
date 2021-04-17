import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button } from "react-native";
import { COLORS, icons, images } from "../constants";
import ImagePickerComponent from "../components/ImagePicker"
import DatePickerComponent from "../components/DatePicker";

const Videoad = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View>
                    <Text style={styles.pageTitle}>Video Ad</Text>
                </View>
                <View>
                    <Text>Ad’s Title*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the title"
                        keyboardType="numeric" />
                </View>
                <View style={[styles.imgSelect]}>
                    <Text>Thumbnail Image*</Text>
                    <View style={[styles.chooseFile]}>
                        <ImagePickerComponent />
                    </View>
                </View>
                <View style={[styles.datPicker]}>
                    <DatePickerComponent />
                </View>
                <View style={[styles.selectBox]}>
                    <Text>Video  Url  (Max size 25mb &  mp4 format only allowed*) </Text>
                    <View style={[styles.chooseFile]}>
                        <ImagePickerComponent />
                    </View>
                </View>
                <View style={styles.desCription}>
                <Text>Description</Text>
                </View>
                <View style={styles.textAreaContainer} >
              
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
                <View style={[styles.savePreviewBtn]}>
                <Button title="SAVE" color="#05EB6D"  style={styles.buttonStyle} />
                <Button title="CANCEL" color="#05EB6D"  style={styles.buttonStyle} />
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
        marginBottom: 11
    },
    container: {
        padding: 20
    },
    input: {
        height: 55,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#31A5E5",
    },
    selectBox: {
        marginTop: 15
    },
    inputBoder: {
        borderWidth: 1,
        borderColor: "#31A5E5",
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
        borderColor: "#31A5E5",
        padding: 10,
        marginTop: 10
    },
    textAreaContainer: {
        borderWidth: 1,
        padding: 5,
        marginTop:10
    },
    textArea: {
        height: 70,
        justifyContent: "flex-start"
    },
    desCription:{
        marginTop:10
    },
    savePreviewBtn: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
        color: '#ffffff',
        marginTop: 26,
        flexDirection:'row',
        justifyContent:'space-between',
        
      },
      buttonStyle:{
         width:150,
          backgroundColor:'#05EB6D',
          marginVertical: 8,
          color:'#fff',
          padding:10,
          textAlign:'center'
      }
})
export default Videoad;