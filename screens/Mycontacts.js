import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight } from "react-native";
import { COLORS, icons, images } from "../constants";
import ImagePickerComponent from "../components/ImagePicker"

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
                        style={styles.input} placeholder="Enter old Password" />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Phone*</Text>
                    <TextInput
                        style={styles.input} placeholder="Enter new Password" />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Contact Image*</Text>
                    <View style={[styles.chooseFile]}>
                        <ImagePickerComponent />
                    </View>
                </View>
                <TouchableHighlight style={styles.buttonStyle}>
                    <Button title="ADD" color="#05EB6D" />

                </TouchableHighlight>

                <View style={styles.linktypeBox}>
                    <View style={styles.linktypeContent}>
                        <Text style={styles.linkTitle}>Link type</Text>
                        <Text style={styles.linkTitle}>Contact link</Text>
                    </View>
                    <View style={styles.linktypeContent}>
                        <Text style={styles.linkTitle}>Select type</Text>
                        <Text style={styles.linkTitle}>Enter link Url</Text>
                    </View>
                    <TouchableHighlight style={styles.buttonStyle}>
                        <Button title="SAVE" color="#05EB6D" />

                    </TouchableHighlight>
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
    pageTitleTop: {
        marginTop: 10,
        color: '#17297C',
        fontSize: 14,
        lineHeight: 26,

    },
    inputBoder: {
        borderWidth: 1,
        borderColor: "#31A5E5",
        padding: 0,
        marginTop: 10
    },
    linktypeContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#3F3D56"
        
    },
    linktypeBox:{
    backgroundColor:'#FBF2F2',
    marginTop:32,
    padding:10,
 
    },
    linkTitle:{
        color: '#3F3D56',
        fontSize: 14,
        lineHeight: 32,
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
    buttonStyle: {
        height: 40,
        width: 160,
        borderRadius: 10,
        marginTop: 20,
        padding: 0
    }
})
export default Mycontacts;