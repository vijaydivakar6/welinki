import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight } from "react-native";
import { COLORS, icons, images } from "../constants";
import LinearGradient from 'react-native-linear-gradient';

const Mycontacts = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View>
                    <Text style={styles.pageTitle}>Add Links</Text>
                </View>
                <View style={styles.linktypeBox}>
                    <View style={styles.linktypeContentTop}>
                        <Image style={[styles.busiImg]} source={images.shoppingimage} />
                        <View style={styles.imgLink}>
                            <Text style={styles.pageTitle}>Shopping</Text>
                            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    Add Links
                                </Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={styles.linktypeContent}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: '#2C2C2C',
                                borderBottomWidth: 0.5,
                                letterSpacing: 1
                            }}
                            placeholder="Enter link name"
                        />
                    </View>
                    <View style={styles.linktypeContent}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: '#2C2C2C',
                                borderBottomWidth: 0.1,
                                letterSpacing: 1
                            }}
                            placeholder="Enter link Url"
                        />
                    </View>
                    <Text style={styles.useLink}>(use link with http/https)</Text>
                    <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                        <Text style={styles.buttonText} >
                            Save
                                </Text>
                    </LinearGradient>
                </View>
                <View style={[styles.socialmediaContent]}>
                    <View style={[styles.socialmediaLinks]}>
                        <Text style={[styles.linkTitleSocial]}>Amazon</Text>
                        <View style={[styles.editdeleteIcon]} >
                            <Image style={[styles.socailIcon]} source={icons.editicon} />
                            <Image style={[styles.socailIcon]} source={icons.deleteicon} />
                            <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                        </View>
                    </View>
                    <View style={[styles.socialmediaLinks]}>
                        <Text style={[styles.linkTitleSocial]}>Flipkart</Text>
                        <View style={[styles.editdeleteIcon]} >
                            <Image style={[styles.socailIcon]} source={icons.editicon} />
                            <Image style={[styles.socailIcon]} source={icons.deleteicon} />
                            <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                        </View>
                    </View>
                    <View style={[styles.socialmediaLinks]}>
                        <Text style={[styles.linkTitleSocial]}>Snapdeal</Text>
                        <View style={[styles.editdeleteIcon]} >
                            <Image style={[styles.socailIcon]} source={icons.editicon} />
                            <Image style={[styles.socailIcon]} source={icons.deleteicon} />
                            <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                        </View>
                    </View>
                    <View style={[styles.socialmediaLinks]}>
                        <Text style={[styles.linkTitleSocial]}>Website</Text>
                        <View style={[styles.editdeleteIcon]} >
                            <Image style={[styles.socailIcon]} source={icons.editicon} />
                            <Image style={[styles.socailIcon]} source={icons.deleteicon} />
                            <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                        </View>
                    </View>
                </View>
                <View style={[styles.busiCardSec]}>
                    <View>
                        <Image style={[styles.busiImg1]} source={images.businessimg} />
                    </View>
                    <View style={styles.businessCard}>
                        <Text style={styles.businessTitle}>Shopping</Text>
                        <View style={styles.viewLinks}>
                            <Image style={[styles.addCatIconBtm]} source={icons.editicon} />
                            <Image style={[styles.addCatIconBtm]} source={icons.deleteicon} />
                            <Image style={[styles.addCatIconBtm]} source={icons.eyeicon} />
                        </View>
                    </View>
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
        marginBottom: 11,
        fontWeight: 'bold',
        letterSpacing: 0.6
    },
    container: {
        padding: 20
    },
    input: {
        height: 55,
        marginTop: 12,
        borderWidth: 0.5,
        padding: 10,
        borderColor: "#31A5E5"
    },
    pageTitleTop: {
        marginTop: 10,
        color: '#17297C',
        fontSize: 14,
        lineHeight: 26,

    },
    inputBoder: {
        borderWidth: 0.5,
        borderColor: "#31A5E5",
        padding: 0,
        marginTop: 10
    },
    linktypeContentTop: {
        flex: 2,
        flexDirection: 'row',
    },
    linktypeContent: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: "#3F3D56"

    },
    linktypeBox: {
        backgroundColor: '#FBF2F2',
        marginTop: 10,
        padding: 10,

    },
    linkTitle: {
        color: '#3F3D56',
        fontSize: 14,
        lineHeight: 32,
    },
    linkTitleSocial: {
        color: '#3F3D56',
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0.6,
    },
    socialmediaContent: {
        marginTop: 50
    },
    imgLink: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    socialmediaLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: "#3F3D56",
        alignContent: 'center',
        alignItems: 'center'
    },
    editdeleteIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    socailIcon: {
        marginRight: 10
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
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginTop: 10,
        width: 120,
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 5,
        color: '#ffffff',
        backgroundColor: 'transparent',
        letterSpacing: 1
    },
    busiCardSec: {
        marginRight: 10,
        marginLeft: 40,
        marginTop: 50
    },
    busiImg1: {
        position: 'absolute',
        top: 10,
        zIndex: 9,
        elevation: 20,
    },
    businessCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 30,
        marginLeft: 50,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 10,
    },
    businessTitle: {
        fontWeight: 'bold',
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
        marginTop: 10
    },
    useLink: {
        marginTop: 10,
        color: '#3F3D56',
        fontSize: 14,
        letterSpacing: 1,
        lineHeight: 32
    },
    addCatIconBtm: {
        marginRight: 15
    }
})
export default Mycontacts;