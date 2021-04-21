import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput, Button, TouchableHighlight } from "react-native";
import { Directions } from "react-native-gesture-handler";
import { COLORS, icons, images } from "../constants";
import ImagePickerComponent from "../components/ImagePicker"
import LinearGradient from 'react-native-linear-gradient';

const Addcategory = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={[styles.myCategorySec]}>
                    <Text style={[styles.myCategoryTitle]}>My Category</Text>
                    <Text style={[styles.myCategoryAddCat]}>Add Category</Text>
                    <Image style={[styles.addCatIconTop]} source={icons.addcategory} />
                </View>
                <View style={styles.linktypeBox}>
                    <View style={styles.linktypeContent}>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: '#2C2C2C',
                                borderBottomWidth: 1,
                            }}
                            placeholder="Enter Category Name "
                        />
                    </View>
                    <View style={styles.chooseCategoryPic}>
                        <View style={[styles.chooseFile]}>
                            <ImagePickerComponent />
                        </View>
                        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                            <Text style={styles.buttonText} >
                                SAVE</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.selectDefaultImageSec}>
                        <Text style={styles.selectImgTitle}>Select default image</Text>
                        <View style={styles.selectDefaultImage}>
                            <Image style={[styles.addCatIcon]} source={images.shoppingimage} />
                            <Image style={[styles.addCatIcon]} source={images.shoppingimage} />
                            <Image style={[styles.addCatIcon]} source={images.shoppingimage} />
                            <Image style={[styles.addCatIcon]} source={images.shoppingimage} />
                            <Image style={[styles.addCatIcon]} source={images.shoppingimage} />
                        </View>
                    </View>
                </View>
                <View style={[styles.busiCardSec]}>
                    <View>
                        <Image style={[styles.busiImg]} source={images.businessimg} />
                    </View>
                    <View style={styles.businessCard}>
                        <Text style={styles.businessTitle}>Cuion Technologies</Text>
                        <View style={styles.viewLinks}>
                            <Image style={[styles.addCatIconBtm]} source={icons.editicon} />
                            <Image style={[styles.addCatIconBtm]} source={icons.deleteicon} />
                            <Image style={[styles.addCatIconBtm]} source={icons.eyeicon} />
                        </View>
                    </View>
                </View>

                <View style={[styles.busiCardSec]}>
                    <View>
                        <Image style={[styles.busiImg]} source={images.businessimg} />
                    </View>
                    <View style={styles.businessCard}>
                        <Text style={styles.businessTitle}>Cuion Technologies</Text>
                        <View style={styles.viewLinks}>
                            <Image style={[styles.addCatIconBtm]} source={icons.editicon} />
                            <Image style={[styles.addCatIconBtm]} source={icons.deleteicon} />
                            <Image style={[styles.addCatIconBtm]} source={icons.eyeicon} />
                        </View>
                    </View>
                </View>
                <View style={styles.pagButtonSec}>
                    <TouchableHighlight style={styles.pagButton}>
                        <Button title="1" color="#05EB6D" style={styles.buttonStyle} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.pagButton}>
                        <Button title="2" color="#05EB6D" style={styles.buttonStyle} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.pagButton}>
                        <Button title="3" color="#05EB6D" style={styles.buttonStyle} />
                    </TouchableHighlight>
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
    pageTitleTop: {
        marginTop: 10,
        color: '#17297C',
        fontSize: 14,
        lineHeight: 26,
    },
    myCategorySec: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    myCategoryTitle: {
        color: '#17297C',
        fontSize: 20,
        lineHeight: 32
    },
    myCategoryAddCat: {
        color: '#17297C',
        fontSize: 16,
        lineHeight: 32
    },
    addCatIconTop: {
        marginTop: 10
    },
    addCatIcon: {
        width: 32,
        height: 24,
        borderRightColor: '#3F3D56',
        borderRightWidth: 1
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
        paddingTop: 20,
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 30
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
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    inputBoder: {
        borderWidth: 1,
        borderColor: "#31A5E5",
        padding: 0,
        marginTop: 10
    },
    linktypeContent: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#3F3D56"

    },
    linktypeBox: {
        backgroundColor: '#FBF2F2',
        marginTop: 32,
        padding: 15,

    },
    linkTitle: {
        color: '#3F3D56',
        fontSize: 14,
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
    selectDefaultImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#C4C4C4',
        padding: 10,
        marginTop: 10
    },
    selectDefaultImageSec: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    selectImgTitle: {
        color: '#3F3D56',
        fontSize: 14,

    },
    chooseCategoryPic: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 17
    },
    savePreviewBtn: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
        color: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        height: 40,
        width: 100,
        borderRadius: 10,
        padding: 0
    },
    pagButtonSec: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    },
    pagButton: {
        paddingRight: 5,
        paddingLeft: 5,
        borderRadius: 50,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginLeft: 50
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})
export default Addcategory;