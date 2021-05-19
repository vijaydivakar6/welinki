import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  Button,
  Alert,
  Platform,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import Selector from '../components/Selector';
import ImagePickerComponent from '../components/ImagePicker';
import LinearGradient from 'react-native-linear-gradient';
import {useForm, useFieldArray, Controller} from 'react-hook-form';
import client from '../API/api';
import axios from 'axios';

const Addbusiness = () => {
  const [loader, setLoader] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [business, setBusiness] = useState([]);
  const [categories, setcategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [imageFile, setImageFile] = useState({});
  const [errorsCollection, seterrorsCollection] = useState({});
  const [formDataState, setFormDataState] = useState({});

  const [imageOption, setImageOption] = useState({
    noDate: true,
    mediaType: 'photo',
    quality: 1,
  });

  const getBusiness = () => {
    client
      .get('/vendor/business/store')
      .then(({data: {data}}) => {
        console.log(data, 'data');
        setBusiness(data);
        
        let {name,category_parent_id,area_name,mobile_number_1,pincode,email_1,gst_number,business_links,business_keywords} = data;


        setValue('form', {
          name,
          category_parent_id,
          area_name,
          mobile_number_1,
          pincode,
          email_1,
          gst_number,
        });

        setValue('form.keywords', business_keywords); 
        setValue('form.links', business_links); 


      })
      .catch(error => {
        console.log(error);
      });
  };

  const getAllCategories = () => {
    client
      .get('/all/categories')
      .then(({data: {data}}) => {
        console.log(data, 'data');
        setAllCategories(data);
        console.log('clicked 1');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onChangeCategory = value => {
    let category_children = allCategories.find(el => el.id == value);

    console.log(category_children?.category_children);
    setSubCategories(category_children?.category_children);
  };

  useEffect(() => {
    getAllCategories();
    getBusiness();
  }, []);


  // useEffect(() => {
  //   linkAppend({})
  // }, [linkType])

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      links: [{id : null,link: '', name: ''}],
      keyword: [{id :null, name: ''}],
    },
  });

  const {
    fields: linkType,
    append: linkAppend,
    remove: linkRemove,
  } = useFieldArray({
    control,
    name: 'form.links',
  });

  const {
    fields: keywordType,
    append: keywordAppend,
    remove: keywordRemove,
  } = useFieldArray({
    control,
    name: 'form.keywords',
  });

  const onSubmit = async ({form}) => {


    console.log('clicked',form);

        console.log(keywordType);

    // const formData = new FormData();

    // formData.append('image', {
    //   name: imageFile.fileName,
    //   type: imageFile.type,
    //   uri:
    //     Platform.OS === 'android'
    //       ? imageFile.uri
    //       : imageFile.uri.replace('file://', ''),
    // });

    // formData.append(
    //   'data',
    //   JSON.stringify({
    //     name: 'supriya',
    //     category_parent_id: 8,
    //     area_name: 'banga',
    //     pincode: '56001098',
    //     gst_number: '098765430980998',
    //     mobile_number_1: '9078654321',
    //     email_1: 'ashfak@cui.in',
    //     links: [{type: 'http:', link: 'https://www.npmjs.com'}],
    //     keywords: [{name: 'juhf'}],
    //     category_children_id: '',
    //   }),
    // );

    // client
    //   .post('/vendor/business/store', formData, {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then(data => {
    //     // setLoader(false);

    //     console.log(data);

    //     // reset();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     if (error.response.status === 422) {
    //       setLoader(false);
    //       seterrorsCollection(error.response.data.errors);
    //       console.log(error.response.data.errors);
    //     } else {
    //       Alert.alert('Error', 'Please try again, Something went wrong');
    //       setLoader(false);
    //       console.error(error);
    //     }
    //   });

   
  };

  const handleChoosePhoto = value => {
    value && setImageFile(value);
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
            name="form.name"
            defaultValue=""
          />
          {errorsCollection.name && (
            <Text style={{color: 'red'}}>{errorsCollection.name[0]}</Text>
          )}
        </View>

        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Select Category*</Text>
          <View style={[styles.inputBoder]}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Selector
                  data={allCategories.map(el => ({
                    label: el.name,
                    value: el.id,
                  }))}
                  label="Select Category"
                  onchange={value => {
                    onChange(value);
                    onChangeCategory(value);
                  }}
                  value={value}
                />
              )}
              name="form.category_parent_id"
              defaultValue=""
            />
          </View>
          {errorsCollection.category_parent_id && (
            <Text style={{color: 'red'}}>
              {errorsCollection.category_parent_id[0]}
            </Text>
          )}
        </View>

        {subcategories?.length > 0 && (
          <View style={[styles.selectBox]}>
            <Text style={[styles.inputTitle]}>Select Sub Category*</Text>
            <View style={[styles.inputBoder]}>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Selector
                    data={subcategories.map(el => ({
                      label: el.name,
                      value: el.id,
                    }))}
                    label="Select Category"
                    onchange={value => {
                      onChange(value);
                    }}
                    value={value}
                  />
                )}
                name="form.category_children_id"
                defaultValue=""
              />
            </View>
            {errorsCollection.category_children_id && (
              <Text style={{color: 'red'}}>
                {errorsCollection.category_children_id[0]}
              </Text>
            )}
          </View>
        )}

        <View style={[styles.imgSelect]}>
          <Text style={[styles.inputTitle]}>Business Image/Logo*</Text>
          <View style={[styles.chooseFile]}>
            <ImagePickerComponent
              options={imageOption}
              onchange={handleChoosePhoto}
              style={{width: 200, height: 200}}
            />
          </View>
          {errorsCollection.image && (
            <Text style={{color: 'red'}}>{errorsCollection.image[0]}</Text>
          )}
        </View>

        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Area Name*</Text>
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
            name="form.area_name"
            defaultValue=""
          />
          {errorsCollection.area_name && (
            <Text style={{color: 'red'}}>{errorsCollection.area_name[0]}</Text>
          )}
        </View>

        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Pin Code*</Text>
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
            name="form.pincode"
            defaultValue=""
          />
          {errorsCollection.pincode && (
            <Text style={{color: 'red'}}>{errorsCollection.pincode[0]}</Text>
          )}
        </View>

        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>GST Number</Text>
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
            name="form.gst_number"
            defaultValue=""
          />
          {errorsCollection.gst_number && (
            <Text style={{color: 'red'}}>{errorsCollection.gst_number[0]}</Text>
          )}
        </View>

        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Mobile Number*</Text>
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
            name="form.mobile_number_1"
            defaultValue=""
          />
          {errorsCollection.mobile_number_1 && (
            <Text style={{color: 'red'}}>
              {errorsCollection.mobile_number_1[0]}
            </Text>
          )}
        </View>

        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>Email ID*</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Enter Email Id*"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="form.email_1"
            defaultValue=""
          />
          {errorsCollection.email_1 && (
            <Text style={{color: 'red'}}>{errorsCollection.email_1[0]}</Text>
          )}
        </View>

        <View style={[styles.selectBox]}>
          <Text style={[styles.inputTitle]}>
            Company Links (use link with http/https)
          </Text>
        </View>
        <View style={[styles.selectLinkBorder]}>
          <View style={[styles.selectLinkUrl]}>
            <Text style={[styles.inputTitle]}>Select Link Type</Text>
            <Text style={[styles.inputTitle]}>Link Url</Text>
          </View>

          {linkType.map(({id,type,link}, index) => {
            return (
              <View key={index} style={[styles.selectLinkInput]}>

                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        placeholder="Select Link Type"
                        style={styles.inputSelect}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={type || value}
                      />
                    )}
                    name={`form.links[${index}].type`}
                  />
                </View>

                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        placeholder="Select Link Type"
                        style={styles.inputSelect}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={link || value}
                      />
                    )}
                    name={`form.links[${index}].link`}
                  />
                </View>

                <LinearGradient
                  start={{x: 0.0, y: 0.25}}
                  end={{x: 0.9, y: 1.0}}
                  colors={['#31A5E5', '#05EB6D']}
                  style={styles.linearGradient}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => linkRemove(index)}>
                    Remove Link
                  </Text>
                </LinearGradient>
              </View>
            );
          })}

          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.9, y: 1.0}}
            colors={['#31A5E5', '#05EB6D']}
            style={styles.linearGradient}>
            <Text
              style={styles.buttonText}
              onPress={() => linkAppend({id : null, name: '', links: ''})}>
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
          {keywordType.map(({id, name}, index) => {
            return (
              <View key={index} style={[styles.selectLinkInput]}>

                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      placeholder="Enter Keyword"
                      style={styles.inputSelectKeyword}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      defaultValue={name}
                    />
                  )}
                  name={`form.keywords[${index}].name`}
                />

                <LinearGradient
                  start={{x: 0.0, y: 0.25}}
                  end={{x: 0.9, y: 1.0}}
                  colors={['#31A5E5', '#05EB6D']}
                  style={styles.linearGradient}>
                  <Text
                    style={styles.buttonText}
                    onPress={() => keywordRemove(index)}>
                    Remove Keyword
                  </Text>
                </LinearGradient>
              </View>
            );
          })}
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.9, y: 1.0}}
            colors={['#31A5E5', '#05EB6D']}
            style={styles.linearGradient}>
            <Text
              style={styles.buttonText}
              onPress={() => keywordAppend({name: null, id : null})}>
              Add Keyword
            </Text>
          </LinearGradient>
        </View>

        <View style={[styles.savePreviewBtn]}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.9, y: 1.0}}
            colors={['#31A5E5', '#05EB6D']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
              SAVE
            </Text>
          </LinearGradient>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.9, y: 1.0}}
            colors={['#31A5E5', '#05EB6D']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>PREVIEW</Text>
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
    borderWidth: 1,
    padding: 10,
    borderColor: '#C4C4C4',
  },
  selectBox: {
    marginTop: 15,
  },
  inputBoder: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
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
    borderColor: '#C4C4C4',
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
    borderColor: '#C4C4C4',
    width: 175,
  },
  inputSelectKeyword: {
    height: 55,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#C4C4C4',
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
    marginRight: 22,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  inputTitle: {
    color: '#17297C',
    lineHeight: 26,
    fontSize: 14,
    letterSpacing: 0.2,
  },
});
export default Addbusiness;
