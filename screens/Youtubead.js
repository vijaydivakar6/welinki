import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TextInput,Button } from "react-native";
import { COLORS, icons, images } from "../constants";
import ImagePickerComponent from "../components/ImagePicker"


const Youtubead = () => {
    return (
        <ScrollView>
          <View style={[styles.container]} >
              <View>
                  <Text style={styles.pageTitle}>Youtube Ad</Text>
              </View>
                <View>
                    <Text>Ad’s Title*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter the title"
                        keyboardType="numeric" />
                </View>
                <View style={[styles.imgSelect]}>
                    <Text>Thumbnail Image*</Text>
                    <View style={[styles.chooseFile]}>
                        <ImagePickerComponent />
                    </View>
                </View>
                <View style={[styles.selectBox]}>
                    <Text>Youtube Url (use the video-Id from the URL)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Example- WYu6fBWg6zs"
                        keyboardType="numeric" />
                </View>
                

            </View>
            </ScrollView>

)
}


const styles = StyleSheet.create({
    pageTitle:{
        fontSize: 20,
        lineHeight: 32,
        color: '#17297C',
        marginBottom:11
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
    selectBox: {
        marginTop: 15
    },
    inputBoder: {
        borderWidth: 1,
        borderColor: "#31A5E5",
        padding: 0,
        marginTop: 10
    },
    imgSelect: {
        marginTop: 10
    },
    chooseFile: {
        marginTop: 10,
    },
    selectLinkBorder:{
        borderWidth: 1,
        borderColor: "#31A5E5",
        padding:10,
        marginTop:10
    }
})
export default Youtubead;