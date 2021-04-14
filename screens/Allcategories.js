import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { COLORS, icons, images } from "../constants";


const Allcategories = () => {
    return (
        <ScrollView>
            <View style={[styles.container]} >
                <View style={styles.allCateSec} >
                    <Text style={styles.allCateText}>All Categories</Text>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
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
        color: '#17297C'
    },
    containerIcon:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        textAlign:'center',
        paddingTop:10,
        paddingBottom:10
    },
    catText:{
        textAlign:'center'
    },

})
export default Allcategories;