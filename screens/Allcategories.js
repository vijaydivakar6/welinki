import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { COLORS, icons, images } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome'

const Allcategories = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={styles.allCateSec} >
                    <Text style={styles.allCateText}>All Categories</Text>
                </View>
                <View >
                    <View>
                        <Image source={icons.allcategory} />
                    </View>
                    <Text>
                    </Text>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    allCateSec: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    allCateText: {
        fontSize: 14,
        lineHeight: 32,
        color: '#17297C'
    },
    catIcons: {
        fontSize: 30,
        color: '#fff',
        backgroundColor: '#05EB6D',
        padding: 10,
        borderRadius: 10,
        width: 50
    }

})
export default Allcategories;