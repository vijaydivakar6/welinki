import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight } from "react-native";
import { COLORS, icons, images } from "../constants";
import LinearGradient from 'react-native-linear-gradient';

const Editprofile = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View>
                    <Text style={styles.pageTitle}>Edit Profile</Text>
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Name</Text>
                    <TextInput
                        style={styles.input} />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Email Id</Text>
                    <TextInput
                        style={styles.input} />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>Pincode</Text>
                    <TextInput
                        style={styles.input} />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>State</Text>
                    <TextInput
                        style={styles.input} />
                </View>
                <View >
                    <Text style={styles.pageTitleTop}>City</Text>
                    <TextInput
                        style={styles.input} />
                </View>
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
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
        letterSpacing:0.6,
        fontWeight:'bold'
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
    pageTitleTop: {
        marginTop: 10,
        color: '#17297C',
        fontSize: 14,
        lineHeight: 26,
        letterSpacing:0.6
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
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        letterSpacing:0.6
    },
})
export default Editprofile;