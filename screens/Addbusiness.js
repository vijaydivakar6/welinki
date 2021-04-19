import React, {useState} from 'react';
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
import Selector from '../components/Selector';
import ImagePickerComponent from '../components/ImagePicker';

import {useForm, useFieldArray,Controller} from 'react-hook-form';

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
    formState: {errors},
  } = useForm({
    defaultValues : { 
      "links": [{"link": "", "name": ""}],
      "keyword": [{"name": ""}],
    },
  });

  const {
      fields : linkType,
      append : linkAppend, 
      remove :  linkRemove
    } = useFieldArray({
    control,
    name: "links",
  });
  
  const {
      fields : keywordType,
      append : keywordAppend, 
      remove :  keywordRemove
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
          <Text>Company Name*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
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
          <Text>Select Category*</Text>
          <View style={[styles.inputBoder]}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
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
          <Text>Business Image/Logo*</Text>
          <View style={[styles.chooseFile]}>
            <ImagePickerComponent />
          </View>
        </View>
        <View style={[styles.selectBox]}>
          <Text>Area Name*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
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
          <Text>Pin Code*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
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
          <Text>GST Number</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
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
          <Text>Mobile Number*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
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
          <Text>Company Links (use link with http/https)</Text>
        </View>
        <View style={[styles.selectLinkBorder]}>
          <View style={[styles.selectLinkUrl]}>
            <Text>Select Link Type</Text>
            <Text>Link Url</Text>
          </View>
          
            {linkType.map(({id,}, index) => {
              return (
                <View key={id} style={[styles.selectLinkInput]}>

                <View>

                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
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
                    render={({field: {onChange, onBlur, value}}) => (
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

               <Button
                onPress={() => linkRemove(index)}
                title="Remove Link"
                color="#05EB6D"
                style={styles.ButtonStyle}
              />

                </View>

                </View>
              );
            })}
             
          
          <Button
                onPress={() => linkAppend({ name: "", links : "" })}
                title="Add New Link"
                color="#05EB6D"
                style={styles.ButtonStyle}
              />
        </View>
        <View style={[styles.selectBox]}>
          <Text>
            Keywords (Your business ideal keywords which people used to find
            vendors like you.)
          </Text>
        </View>
        <View style={[styles.selectLinkBorder]}>
          <View style={[styles.selectLinkUrl]}>
            <Text>Keywords list*</Text>
            <Text>Add Keywords</Text>
          </View>
          {keywordType.map(({id, name,}, index) => {
              return (
          <View key={id} style={[styles.selectLinkInput]}>

                 <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
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
                  
               <Button
                onPress={() => keywordRemove(index)}
                title="Remove Keyword"
                color="#05EB6D"
                style={styles.ButtonStyle}
              />

          </View>
           );
          })}
          <Button
                onPress={() => keywordAppend({name : ""})}
                title="Add Keyword"
                color="#05EB6D"
                style={styles.ButtonStyle}
              />
        </View>
        <View style={[styles.savePreviewBtn]}>
          {/* <Text style={styles.buttonStyle}>SAVE</Text>
          <Text style={styles.buttonStyle}>PREVIEW</Text> */}
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
  selectLinkUrl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'center',
    width: 232,
  },
  selectLinkInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%',
  },
  inputSelect: {
    height: 55,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#31A5E5',
    width: 175,
  },
  inputSelectKeyword: {
    height: 55,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#31A5E5',
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
});
export default Addbusiness;
