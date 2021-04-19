import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import ImagePickerComponent from '../components/ImagePicker';
import DatePickerComponent from '../components/DatePicker';

import {useForm, useFieldArray, Controller} from 'react-hook-form';

const Youtubead = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.pageTitle}>Video Ad</Text>
        </View>

        <View>
          <Text>Ad’s Title*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Enter the title"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="name"
                style={styles.input}
                rules={{required: true}}
              />
            )}
            name="name"
            rules={{required: true}}
            defaultValue=""
          />
          {errors.name && <Text>Name is required.</Text>}
        </View>

        <View style={[styles.imgSelect]}>
          <Text>Thumbnail Image*</Text>
          <View style={[styles.chooseFile]}>
            <ImagePickerComponent />
          </View>
        </View>

        <View style={[styles.datPicker]}>
          <DatePickerComponent />
        </View>

        <View style={[styles.selectBox]}>
          <Text>Video Url (Max size 25mb & mp4 format only allowed*) </Text>
          <View style={[styles.chooseFile]}>
            <ImagePickerComponent />
          </View>
        </View>

        <View style={styles.desCription}>
          <Text>Description</Text>
        </View>

        <View style={styles.textAreaContainer}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something"
                placeholderTextColor="grey"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="name"
                rules={{required: true}}
              />
            )}
            name="description"
            rules={{required: true}}
            defaultValue=""
          />
          {errors.name && <Text>Name is required.</Text>}
        </View>

        <View style={[styles.savePreviewBtn]}>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="SAVE"
            color="#05EB6D"
            style={styles.buttonStyle}
          />
          <Button title="PREVIEW" color="#05EB6D" style={styles.buttonStyle} />
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 20,
    lineHeight: 32,
    color: '#17297C',
    marginBottom: 11,
  },
  container: {
    padding: 20,
  },
  input: {
    height: 55,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#31A5E5',
  },
  selectBox: {
    marginTop: 15,
  },
  inputBoder: {
    borderWidth: 1,
    borderColor: '#31A5E5',
    padding: 0,
    marginTop: 10,
  },
  imgSelect: {
    marginTop: 10,
  },
  chooseFile: {
    marginTop: 10,
  },
  selectLinkBorder: {
    borderWidth: 1,
    borderColor: '#31A5E5',
    padding: 10,
    marginTop: 10,
  },
  textAreaContainer: {
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
  },
  textArea: {
    height: 70,
    justifyContent: 'flex-start',
  },
  desCription: {
    marginTop: 10,
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
    width: 150,
    backgroundColor: '#05EB6D',
    marginVertical: 8,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
  },
  chooseFile: {
    marginTop: 10,
  },
});
export default Youtubead;
