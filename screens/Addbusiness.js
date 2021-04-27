import React, { useState } from 'react';
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
import { COLORS, icons, images } from '../constants';
import Selector from '../components/Selector';
import ImagePickerComponent from '../components/ImagePicker';
import LinearGradient from 'react-native-linear-gradient';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const Addbusiness = () => {

  const [categories, setcategories] = useState([
    {
      label: 'Football',
      value: 'football',
    },
    {
      label: 'Baseball',
      value: 'baseball',
    },
    {
      label: 'Hockey',
      value: 'hockey',
    },
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      "links": [{ "link": "", "name": "" }],
      "keyword": [{ "name": "" }],
    },
  });

  const {
    fields: linkType,
    append: linkAppend,
    remove: linkRemove
  } = useFieldArray({
    control,
    name: "links",
  });

  const {
    fields: keywordType,
    append: keywordAppend,
    remove: keywordRemove
  } = useFieldArray({
    control,
    name: "keyword",
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <ScrollView>
      <View style={[styles.container]}>
      <View>
          <Text style={styles.pageTitle}>My Business</Text>
        </View>
        <View>
          <Text style={[styles.inputTitle]}>Company Name*</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter Company Name"
                // keyboardType="numeric"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="name"
            defaultValue=""
          />
        </View>
        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Select Category*</Text>
          <View style={[styles.inputBoder]}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Selector
                  data={categories}
                  label="Select Category"
                  onchange={value => {
                    onChange(value);
                  }}
                  value={value}
                />
              )}
              name="category"
              defaultValue=""
            />
          </View>
        </View>
        <View style={[styles.imgSelect]}>
          <Text style={[styles.inputTitle]}>Business Image/Logo*</Text>
          <View style={[styles.chooseFile]}>
            <ImagePickerComponent />
          </View>
        </View>
        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Area Name*</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter Area Name"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="area_name"
            defaultValue=""
          />
        </View>
        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Pin Code*</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter Pin Code"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="pincode"
            defaultValue=""
          />
        </View>
        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>GST Number</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter GST Number"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="gst_number"
            defaultValue=""
          />
        </View>
        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Mobile Number*</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter Mobile Number*"
                keyboardType="numeric"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="gst_number"
            defaultValue=""
          />
        </View>
        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Company Links (use link with http/https)</Text>
        </View>
        <View style={[styles.selectLinkBorder]}>
          <View style={[styles.selectLinkUrl]}>
            <Text style={[styles.inputTitle]}>Select Link Type</Text>
            <Text style={[styles.inputTitle]}>Link Url</Text>
          </View>

          {linkType.map(({ id, }, index) => {
            return (
              <View key={id} style={[styles.selectLinkInput]}>

                <View>
                  <Text style={[styles.inputTitle]}>Company Name*</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Company Name"
                    keyboardType="numeric" />
                </View>
                <View style={[styles.selectBox]} >
                  <Text style={[styles.inputTitle]}>Select Category*</Text>
                  <View style={[styles.inputBoder]}>
                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Selector
                          data={categories}
                          label="Select Category"
                          onchange={value => {
                            onChange(value);
                          }}
                          value={value}
                        />
                      )}
                      name="category"
                      defaultValue=""
                    />
                  </View>
                </View>
                <View style={[styles.imgSelect]}>
                  <Text style={[styles.inputTitle]}>Business Image/Logo*</Text>
                  <View style={[styles.chooseFile]}>
                    <ImagePickerComponent />
                  </View>
                </View>
                <View style={[styles.selectBox]}>
                  <Text style={[styles.inputTitle]}>Area Name*</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Area Name"
                    keyboardType="numeric" />
                </View>
                <View style={[styles.selectBox]}>
                  <Text style={[styles.inputTitle]}>Pin Code*</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Pin Code"
                    keyboardType="numeric" />
                </View>
                <View style={[styles.selectBox]}>
                  <Text style={[styles.inputTitle]}>GST Number</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter GST Number"
                    keyboardType="numeric" />
                </View>
                <View style={[styles.selectBox]}>
                  <Text style={[styles.inputTitle]}>Mobile Number*</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile Number*"
                    keyboardType="numeric" />
                </View>
                <View style={[styles.selectBox]}>
                  <Text style={[styles.inputTitle]}>Company Links  (use link with http/https)</Text>
                </View>
                <View style={[styles.selectLinkBorder]}>
                  <View style={[styles.selectLinkUrl]}>
                    <Text style={[styles.inputTitle]}>Select Link Type</Text>
                    <Text style={[styles.inputTitle]}>Link Url</Text>
                  </View>
                  <View style={[styles.selectLinkInput]}>
                    <TextInput
                      style={styles.inputSelect}
                      placeholder="Select Link Type"
                      keyboardType="numeric" />
                    <TextInput
                      style={styles.inputSelect}
                      placeholder="Enter Link Url"
                      keyboardType="numeric" />
                  </View>
                </View>
                <View style={[styles.selectBox]}>
                  <Text>Keywords (Your business ideal keywords which people used to find vendors like you.)</Text>
                </View>
                <View style={[styles.selectLinkBorder]}>
                  <View style={[styles.selectLinkUrl]}>
                    <Text style={[styles.inputTitle]}>Keywords list*</Text>
                    <Text style={[styles.inputTitle]}>Add Keywords</Text>
                  </View>
                  <View style={[styles.selectLinkInput]}>
                    <TextInput
                      style={styles.inputSelectKeyword}
                      placeholder="Enter Keyword"
                      keyboardType="numeric" />
                  </View>
                </View>
                <View style={[styles.savePreviewBtn]}>
                  <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                    <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
                      SAVE
                </Text>
                  </LinearGradient>
                  <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}  >
                      PREVIEW
                </Text>
                  </LinearGradient>
                </View>

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Select Link Type"
                      style={styles.inputSelect}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                  )}
                  name={`links[${index}].name`}
                />

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Select Link Type"
                      style={styles.inputSelect}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                  )}
                  name={`links[${index}].link`}
                />
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                  <Text style={styles.buttonText} onPress={() => linkRemove(index)} >
                    Remove Link
                </Text>
                </LinearGradient>

              </View>

            );
          })}
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
            <Text style={styles.buttonText} onPress={() => linkAppend({ name: "", links: "" })} >
              Add New Link
                </Text>
          </LinearGradient>
        </View>
        <View style={[styles.selectBox]}>
          <Text>
            Keywords (Your business ideal keywords which people used to find
            vendors like you.)
          </Text>
        </View>
        <View style={[styles.selectLinkBorder]}>
          <View style={[styles.selectLinkUrl]}>
            <Text style={[styles.inputTitle]}>Keywords list*</Text>
            <Text style={[styles.inputTitle]}>Add Keywords</Text>
          </View>
          {keywordType.map(({ id, name, }, index) => {
            return (
              <View key={id} style={[styles.selectLinkInput]}>

                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter Keyword"
                      style={styles.inputSelectKeyword}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                  )}
                  name={`keyword[${index}].name`}
                />
                <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
                  <Text style={styles.buttonText} onPress={() => keywordRemove(index)}>
                    Remove Keyword
                </Text>
                </LinearGradient>


              </View>
            );
          })}
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
            <Text style={styles.buttonText} onPress={() => keywordAppend({ name: "" })}>
              Add Keyword
                </Text>
          </LinearGradient>
        </View>
        <View style={[styles.savePreviewBtn]}>
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
            <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
              SAVE
                </Text>
          </LinearGradient>
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
            <Text style={styles.buttonText}  >
              PREVIEW
                </Text>
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
    fontWeight:'bold',
    letterSpacing:0.6
  },
  container: {
    padding: 20,
  },
  input: {
    height: 55,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#2C2C2C',
  },
  selectBox: {
    marginTop: 15,
  },
  inputBoder: {
    borderWidth: 1,
    borderColor: '#2C2C2C',
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
    borderColor: '#2C2C2C',
    padding: 10,
    marginTop: 10,
    flex: 1,
  },
  selectLinkUrl: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'center',
    width: 232,
  },
  selectLinkInput: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '100%',
  },
  inputSelect: {
    height: 55,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#2C2C2C',
    width: 175,
  },
  inputSelectKeyword: {
    height: 55,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#2C2C2C',
    width: '100%',
  },
  savePreviewBtn: {
    marginTop: 10,
  },
  savePreviewBtn: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#ffffff',
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    width: 150,
    backgroundColor: '#05EB6D',
    marginVertical: 8,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
    marginRight:22
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  inputTitle:{
    color:'#17297C',
    lineHeight:26,
    fontSize:14,
    letterSpacing:0.2,
  }
});
export default Addbusiness;
