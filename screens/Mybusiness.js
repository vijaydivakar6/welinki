import React from "react";
import { View, Text, StyleSheet, ScrollView,  Button } from "react-native";



const Mybusiness = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={[styles.mybusinessSec]}>
                    <Text style={[styles.mybusinessTitle]} >My Business</Text>
                    <Text style={[styles.noCompanyText]}>No Company Added</Text>
                    <View style={styles.buttonStyle}>
                    <Button title="Add Company" color="#05EB6D"   />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
        padding:20
    },
    mybusinessTitle:{
        fontSize: 20,
        lineHeight: 32,
        color: '#17297C',
        
    },
    noCompanyText:{
        fontSize: 14,
        lineHeight: 26,
        color: '#2C2C2C',
    },
    buttonStyle:{
        width:200,
        marginTop:27
    }

})
export default Mybusiness;