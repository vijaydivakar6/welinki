import React from 'react';
import { View, Text,StyleSheet, Image ,Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker'

export default class ImagePickerComponent extends React.Component {
    
   state ={
       photo:null,
   };

    handleChoosePhoto = () =>{
        const options = {
            noDate:true,
            mediaType:'photo',
        };
        launchImageLibrary(options , response =>{
            console.log("response ,response");
            if(response.uri){
                this.setState({photo:response});
            }
        });
    };


    render() {
        const {photo} = this.state;
        return (
            <View style={[styles.imgPicker]}>
            <View style={{flex:3 ,alignItems:"flex-start" , justifyContent:"flex-start"}}>
                {photo && (
                    <Image
                    source={{uri:photo.uri}}
                     style={{ width:300,height:300}}
                    />
                )}
                <View style={[styles.chooseButton]}>
                <Button title="Choose Photo" onPress={this.handleChoosePhoto} style={{backgroundColor: 'transparent'}}  />
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chooseButton:{
        width:'100%',
        height: '100%',
        borderWidth:1,
        borderColor: "#2C2C2C",
        padding:10
    }
});