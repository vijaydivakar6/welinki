import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';

const ImagePickerComponent = ({options, onchange,style}) => {
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    options;
    launchImageLibrary(options, value => {
        value.uri && setPhoto(value);
        onchange(value)
    });
  };

  return (
    <View style={[styles.imgPicker]}>
      <View>
        <TouchableOpacity
          style={[styles.chooseButton]}
          onPress={handleChoosePhoto}>
          <Text style={[styles.chooseButtonText]}>Add Category picture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  chooseButton: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 15,
    color: '#3F3D56',
  },
  chooseButtonText: {
    color: '#3F3D56',
  },
});
