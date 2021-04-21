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
        borderColor: "#2C2C2C",
    },
    inputBoder: {
        borderWidth: 1,
        borderColor: "#2C2C2C",
        padding: 0,
        marginTop: 10
    },
    pageTitleTop: {
        marginTop: 10,
        color: '#17297C',
        fontSize: 14,
        lineHeight: 26,

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 22,
        width: 140
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})
export default Editprofile;