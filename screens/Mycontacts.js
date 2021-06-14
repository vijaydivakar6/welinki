import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  Platform,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useForm, Controller} from 'react-hook-form';
import ImagePickerComponent from '../components/ImagePicker';
import Selector from '../components/Selector';
import client from '../API/api';

const Mycontacts = () => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {},
  } = useForm({});

  const [errorsCollection, seterrorsCollection] = useState({});
  const [loader, setLoader] = useState(false);

  const [imageFile, setImageFile] = useState({});

  const [selector, setSelector] = useState([
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Twitter', value: 'Twitter' },
    { label: 'Instagram', value: 'Instagram' },
    { label: 'linkedIn', value: 'linkedIn' },
    { label: 'Other', value: 'Other' },
  ])

  const [imageOption, setImageOption] = useState({
    noDate: true,
    mediaType: 'photo',
    quality: 1,
  });

  const onSubmit = async ({form}) => {
    console.log('clicked', form);

    setLoader(true);

    const formData = new FormData();

    if (imageFile?.uri) {
      formData.append('image', {
        name: imageFile.fileName,
        type: imageFile.type,
        uri:
          Platform.OS === 'android'
            ? imageFile.uri
            : imageFile.uri.replace('file://', ''),
      });
    }

    formData.append('data', JSON.stringify(form));

    client
      .post('/users/contact', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(data => {
        setLoader(false);

        console.log(data);

        // reset();
      })
      .catch(error => {
        setLoader(false);
        console.log(error);
        if (error.response.status === 422) {
          setLoader(false);
          seterrorsCollection(error.response.data.errors);
          console.log(error.response.data.errors);
        } else {
          Alert.alert('Error', 'Please try again, Something went wrong');
          setLoader(false);
          console.error(error);
        }
      });
  };

  const handleChoosePhoto = value => {
    value && setImageFile(value);
  };

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.pageTitle}>My Contacts</Text>
        </View>
        <View>
          <Text style={styles.pageTitleTop}>Name*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="name"
              />
            )}
            name="form.name"
            defaultValue=""
          />
        </View>
        <View>
          <Text style={styles.pageTitleTop}>Phone*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="phone_number"
              />
            )}
            name="form.phone_number"
            defaultValue=""
          />
        </View>

        <View>
          <Text style={styles.pageTitleTop}>Contact Image*</Text>
          <View style={[styles.chooseFile]}>
              {
                  imageFile && imageFile?.uri && (
                    <Image
                      source={{uri: imageFile.uri}}
                      style={[styles.imageStyle]}
                    />
                  )
              }
            <ImagePickerComponent
              options={imageOption}
              onchange={handleChoosePhoto}
              style={{width: 200, height: 200}}
            />
          </View>
        </View>

        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.9, y: 1.0}}
          colors={['#31A5E5', '#05EB6D']}
          style={styles.linearGradient}>
          <Text 
          onPress={handleSubmit(onSubmit)}
          style={styles.buttonText}>ADD</Text>
        </LinearGradient>

        <View style={styles.linktypeBox}>
          <View style={styles.linktypeContent}>
            <Text style={styles.linkTitle}>Link type</Text>
            <Text style={styles.linkTitle}>Contact link</Text>
          </View>
          <View style={styles.linktypeContent}>
            <View style={{width:150}}>
            {/* <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Selector
                      data={selector}
                      label="Select Category"
                      onchange={value => {
                        onChange(value);
                      }}
                      value={value}
                    />
                  )}
                  name="form.category_parent_id"
                  defaultValue=""
                /> */}
            </View>

            <View  style={{width:150}}>
            {/* <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="phone"
              />
            )}
            name="form.phone"
            defaultValue=""
          /> */}
            </View>
          </View>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.9, y: 1.0}}
            colors={['#31A5E5', '#05EB6D']}
            style={styles.linearGradient}>
            <Text onPress={handleSubmit(onSubmit)} style={styles.buttonText}>SAVE</Text>
          </LinearGradient>
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
    fontWeight: 'bold',
    letterSpacing: 0.6,
  },
  container: {
    padding: 20,
  },
  input: {
    height: 55,
    marginTop: 12,
    borderWidth: 0.5,
    padding: 10,
    borderColor: '#4C4C4C',
  },
  pageTitleTop: {
    marginTop: 10,
    color: '#17297C',
    fontSize: 14,
    lineHeight: 26,
    letterSpacing: 0.6,
  },
  inputBoder: {
    borderWidth: 1,
    borderColor: '#4C4C4C',
    padding: 0,
    marginTop: 10,
  },
  linktypeContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#4C4C4C',
  },
  linktypeBox: {
    backgroundColor: '#FBF2F2',
    marginTop: 32,
    padding: 15,
    borderRadius: 20,
  },
  linkTitle: {
    color: '#3F3D56',
    fontSize: 14,
    lineHeight: 32,
    letterSpacing: 1,
    color: '#4c4c4c',
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
  chooseFile: {
    marginTop: 10,
  },
  buttonStyle: {
    height: 40,
    width: 160,
    borderRadius: 10,
    marginTop: 20,
    padding: 0,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
    width: 100,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 5,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing: 1,
  },
  imageStyle : {
      width:50,
      height:50,
  }
});
export default Mycontacts;
