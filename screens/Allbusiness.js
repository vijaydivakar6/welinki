import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { COLORS, icons, images } from "../constants";


const Allcategories = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={styles.allCateSec} >
                    <Text style={styles.allCateText}>All Business Listings</Text>
                </View>
            </View>
            <View style={[styles.busiCardSec]}>
                <View>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                </View>
                <View style={styles.businessCard}>
                    <Text style={styles.businessTitle}>Cuion Technologies</Text>
                    <Text style={styles.businessText}>sumalatha@cuion.in</Text>
                    <Text style={styles.businessText}>8073080046</Text>
                    <View style={styles.viewLinks}>
                        <Text style={styles.businessText}>View Links</Text>
                        <Text style={styles.businessText}>View  info</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.busiCardSec]}>
                <View>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                </View>
                <View style={styles.businessCard}>
                    <Text style={styles.businessTitle}>Cuion Technologies</Text>
                    <Text style={styles.businessText}>sumalatha@cuion.in</Text>
                    <Text style={styles.businessText}>8073080046</Text>
                    <View style={styles.viewLinks}>
                        <Text style={styles.businessText}>View Links</Text>
                        <Text style={styles.businessText}>View  info</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.busiCardSec]}>
                <View>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                </View>
                <View style={styles.businessCard}>
                    <Text style={styles.businessTitle}>Cuion Technologies</Text>
                    <Text style={styles.businessText}>sumalatha@cuion.in</Text>
                    <Text style={styles.businessText}>8073080046</Text>
                    <View style={styles.viewLinks}>
                        <Text style={styles.businessText}>View Links</Text>
                        <Text style={styles.businessText}>View  info</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.busiCardSec]}>
                <View>
                    <Image style={[styles.busiImg]} source={images.businessimg} />
                </View>
                <View style={styles.businessCard}>
                    <Text style={styles.businessTitle}>Cuion Technologies</Text>
                    <Text style={styles.businessText}>sumalatha@cuion.in</Text>
                    <Text style={styles.businessText}>8073080046</Text>
                    <View style={styles.viewLinks}>
                        <Text style={styles.businessText}>View Links</Text>
                        <Text style={styles.businessText}>View  info</Text>
                    </View>
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
        color: '#17297C',

    },
    busiCardSec: {
        marginRight: 10,
        marginLeft: 40,
        marginTop: 20
    },
    busiImg: {
        position: 'absolute',
        top: 15,
        zIndex: 99
    },
    businessCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 30,
        marginLeft: 50,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 10,
        paddingLeft: 30,
        paddingBottom: 10,
        paddingRight: 30
    },
    businessTitle: {
        fontWeight: '500',
        color: '#17297C',
        letterSpacing: 1,
        fontSize: 16,
        fontFamily: 'Rubik'
    },
    businessText: {
        fontWeight: '500',
        color: '#17297C',
        letterSpacing: 1,
        fontSize: 14
    },
    viewLinks: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    }

})
export default Allcategories;