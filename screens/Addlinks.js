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
                                borderBottomWidth: 1,
                            }}
                            placeholder="Enter link name"
                        />
                    </View>
                    <View style={styles.linktypeContent}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: '#2C2C2C',
                                borderBottomWidth: 1,
                            }}
                            placeholder="Enter link Url"
                        />
                    </View>
                    <Text>(use link with http/https)</Text>
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
        fontWeight: 'bold'
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
    pageTitleTop: {
        marginTop: 10,
        color: '#17297C',
        fontSize: 14,
        lineHeight: 26,

    },
    inputBoder: {
        borderWidth: 1,
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
        borderBottomWidth: 1,
        borderBottomColor: "#3F3D56"

    },
    linktypeBox: {
        backgroundColor: '#FBF2F2',
        marginTop: 32,
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
        borderBottomWidth: 1,
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
export default Mycontacts;