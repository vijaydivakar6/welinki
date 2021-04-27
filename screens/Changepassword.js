import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight } from "react-native";
import { COLORS, icons, images } from "../constants";
import LinearGradient from 'react-native-linear-gradient';

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
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                    <Text style={styles.buttonText} >
                        SAVE
                </Text>
                </LinearGradient>
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
        letterSpacing:0.6,
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
    inputBoder: {
        borderWidth: 0.5,
        borderColor: "#4C4C4C",
        padding: 0,
        marginTop: 10
    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 22,
        width: 120,
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 5,
        color: '#ffffff',
        backgroundColor: 'transparent',
        letterSpacing:1
    },
})
export default Changepassword;