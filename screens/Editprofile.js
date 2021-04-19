import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button ,TouchableHighlight } from "react-native";
import { COLORS, icons, images } from "../constants";

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
    pageTitleTop:{
    marginTop:10,
    color:'#17297C',
    fontSize: 14,
    lineHeight:26,

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
export default Editprofile;