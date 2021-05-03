import React from 'react';
import { View, Text,StyleSheet, Image ,Button ,TouchableOpacity} from 'react-native';
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
       
                <TouchableOpacity style={[styles.chooseButton]} onPress={this.handleChoosePhoto} >
                <Text  style={[styles.chooseButtonText]}>Choose Photo</Text>
                </TouchableOpacity>
             
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chooseButton:{
        width:'100%',
        height: 55,
        borderWidth:1,
        borderColor: "#C4C4C4",
        padding:15,
        color:'#3F3D56'
    },
    chooseButtonText:{
        color:'#3F3D56'
    }
});