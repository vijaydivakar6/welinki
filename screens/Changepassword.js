import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button ,TouchableHighlight } from "react-native";
import { COLORS, icons, images } from "../constants";

const Changepassword = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View>
                    <Text style={styles.pageTitle}>Change Password</Text>
                </View>
                <View >
                    <TextInput
                        style={styles.input} placeholder="Enter old Password" />
                </View>
                <View >
                    <TextInput
                        style={styles.input} placeholder="Enter new Password" />
                </View>
                <View >
                    <TextInput
                        style={styles.input} placeholder="Confirm new Password" />
                </View>
                <TouchableHighlight style={styles.buttonStyle}>
                    <Button title="SAVE" color="#05EB6D"  />
                
                    </TouchableHighlight> 
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
    inputBoder: {
        borderWidth: 1,
        borderColor: "#31A5E5",
        padding: 0,
        marginTop: 10
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
        width:160,
        borderRadius:10,
        marginTop :20,
        padding:0
    }
})
export default Changepassword;