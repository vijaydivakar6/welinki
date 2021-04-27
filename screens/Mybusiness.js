import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


const Mybusiness = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={[styles.mybusinessSec]}>
                    <Text style={[styles.mybusinessTitle]} >My Business</Text>
                    <Text style={[styles.noCompanyText]}>No Company Added</Text>
                    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                        <Text style={styles.buttonText} >
                            Add Company
                        </Text>
                    </LinearGradient>
                </View>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    mybusinessTitle: {
        fontSize: 20,
        lineHeight: 32,
        color: '#17297C',
        fontWeight: 'bold',
        letterSpacing: 0.6
    },
    noCompanyText: {
        fontSize: 14,
        lineHeight: 26,
        color: '#2C2C2C',
        letterSpacing: 1,
        marginTop:10
    },
    buttonStyle: {
        width: 200,
        marginTop: 27
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 22,
        width: 160
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        letterSpacing: 1
    },

})
export default Mybusiness;