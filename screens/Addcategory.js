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
  FlatList,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Directions} from 'react-native-gesture-handler';
import {COLORS, icons, images} from '../constants';

import LinearGradient from 'react-native-linear-gradient';
import client from '../API/api';

import {useForm, useFieldArray, Controller} from 'react-hook-form';
import ImagePickerComponent from '../components/ImagePicker';

const Item = ({id, name, onPressEdit, onPressNav, onPressDelete, image}) => (
  // <TouchableOpacity onPress={onPress}>
  <View key={id} style={[styles.busiCardSec]}>
    <View>
      <Image
        style={[styles.busiImg]}
        source={{
          uri: image,
        }}
      />
    </View>
    <View style={styles.businessCard}>
      <Text style={styles.businessTitle}>{name}</Text>
      <View style={styles.viewLinks}>
        <TouchableOpacity onPress={onPressEdit}>
          <Image style={[styles.addCatIconBtm]} source={icons.editicon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDelete}>
          <Image style={[styles.addCatIconBtm]} source={icons.deleteicon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressNav}>
          <Image style={[styles.addCatIconBtm]} source={icons.eyeicon} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
  // </TouchableOpacity>
);

const Addcategory = () => {
  const [loader, setLoader] = useState(false);
  const [business, setBusiness] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [imageArray, setImageArray] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshinBoolean, SetRefreshinBoolean] = useState(false);
  const [errorsCollection, seterrorsCollection] = useState({});
  const [imageFile, setImageFile] = useState({});
  const [imageName, setImageName] = useState('');

  const [editLinks, setEditLinks] = useState(null);

  const [editMode, setEditMode] = useState(false);

  const [imageOption, setImageOption] = useState({
    noDate: true,
    mediaType: 'photo',
    quality: 1,
  });

  const fetchAllBusiness = () => {
    setLoader(true);
    console.log('page', page);
    client
      .get(`/users/linkscategories`, {
        params: {page},
      })
      .then(({data: {data}}) => {
        // console.log('data origon',data);
        setDataArray(data);
        setLoader(false);
        SetRefreshinBoolean(false);
        if (page === 1) {
          setBusiness(data);
        } else {
          setBusiness([...business, ...data]);
        }
        console.log(data);
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  };

  const fetchAllImages = () => {
    setLoader(true);
    client
      .get(`/users/linkscategories/images`)
      .then(({data: {data}}) => {
        // console.log('data origon',data);
        setImageArray(data);
        setLoader(false);
        console.log(data);
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAllBusiness();
    fetchAllImages();
  }, [page]);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {},
  } = useForm({});


  const onSubmit = ({form}) => {
    console.log(form);

    console.log(imageFile);

    if (Object.keys(imageFile).length == 0 || !imageName) {
      Alert.alert('Error', 'Please upload image or select from below');
    }

    setLoader(true);

    const formData = new FormData();

    if (imageFile?.uri) {
      console.log('adeed image');
      formData.append('image', {
        name: imageFile.fileName,
        type: imageFile.type,
        uri:
          Platform.OS === 'android'
            ? imageFile.uri
            : imageFile.uri.replace('file://', ''),
      });
    } else {
      form['image'] = imageName;
    }

    formData.append('data', JSON.stringify(form));

    client
      .post('/users/linkcategory', formData, {
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

  const deleteLink = ({id}) => {
    console.log(id);
    client
      .delete(`users/linkcategory/${id}`)
      .then(({data: {msg}}) => {
        Alert.alert('Success', msg);
      })
      .catch(error => {
        Alert.alert('Error', 'Please try again, Something went wrong');
      });

  };

  const editLink = ({id, image, name}) => {
    setEditMode(true)

    setEditLinks(image);

    setValue('form', {
      id,
      name,
    });

  };


  const onSubmitEdit = ({form}) => {
    setLoader(true);
    const formData = new FormData();

    if (imageFile?.uri) {
      console.log('adeed image');
      formData.append('image', {
        name: imageFile.fileName,
        type: imageFile.type,
        uri:
          Platform.OS === 'android'
            ? imageFile.uri
            : imageFile.uri.replace('file://', ''),
      });
    } else {
      form['image'] = imageName;
    }
    
    formData.append('data', JSON.stringify(form));

    client
      .patch(`/users/linkcategory/${form.id}`, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({data : {data}}) => {
        setLoader(false);
        setEditMode(false)
        setEditLinks(null)
        

        console.log(data);
        Alert.alert('Success', data);

        reset()
        fetchAllBusiness();
        setImageFile({})

        // reset();
      })
      .catch(error => {
        setLoader(false);
        setEditMode(false)
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

  }

  const handleChoosePhoto = value => {
    value && setImageFile(value);
  };

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      image={item.image}
      onPressEdit={() => editLink(item)}
      onPressNav={() => console.log(item.id)}
      onPressDelete={() => deleteLink({id: item.id})}
    />
  );

  const handleLoadMore = () => {
    console.log(dataArray, 'dataArray');
    if (dataArray.length > 0) {
      setPage(page + 1);
      console.log(page);
    }
    console.log('Load more trigger');
  };

  const onRefreshCallBack = () => {
    setPage(1);
    SetRefreshinBoolean(true);
    fetchAllBusiness();
  };

  return (
    <ScrollView>
    <View>
      <View style={[styles.container]}>
        <View style={[styles.myCategorySec]}>
          <Text style={[styles.myCategoryTitle]}>My Category</Text>
          <Text style={[styles.myCategoryAddCat]}>Add Category</Text>
          <Image style={[styles.addCatIconTop]} source={icons.addcategory} />
        </View>

        <View style={styles.linktypeBox}>
          <View
          //  style={styles.linktypeContent}
          >
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Enter Category Name "
                  style={{
                    height: 50,
                    borderColor: '#4C4C4C',
                    borderBottomWidth: 0.5,
                    letterSpacing: 1,
                  }}
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
          <View style={styles.chooseCategoryPic}>
            <View style={[styles.chooseFile]}>
              {(imageFile && imageFile?.uri && (
                <Image
                  source={{uri: imageFile.uri}}
                  style={[styles.imageStyle]}
                />
              )) ||
                (!imageName.includes(editLinks) && (
                  <Image
                    source={{uri: editLinks}}
                    style={[styles.imageStyle]}
                  />
                ))}

              <ImagePickerComponent
                options={imageOption}
                onchange={handleChoosePhoto}
                style={{width: 200, height: 200}}
              />
            </View>
            <LinearGradient
              start={{x: 0.0, y: 0.25}}
              end={{x: 0.9, y: 1.0}}
              colors={['#31A5E5', '#05EB6D']}
              style={styles.linearGradient}>
              <Text onPress={editMode ? handleSubmit(onSubmitEdit) : handleSubmit(onSubmit)} style={styles.buttonText}>
                {
                  editMode ? 'Save' : 'Add'
                }
              </Text>
            </LinearGradient>
          </View>

          <View style={styles.selectDefaultImageSec}>
            <Text style={styles.selectImgTitle}>Select default image</Text>
            <View style={styles.selectDefaultImage}>
              {imageArray.map(({name, image}) => (
                <TouchableOpacity key={name} onPress={() => setImageName(name)}>
                  <Image
                    style={[
                      styles.addCatIcon,
                      (name == editLinks) && styles.conditionalBorder,
                    ]}
                    source={{uri: image}}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <SafeAreaView style={styles.container}>
          <FlatList
            data={business}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={6}
            onRefresh={onRefreshCallBack}
            refreshing={refreshinBoolean}
          />
        </SafeAreaView>

        {/* <View style={[styles.busiCardSec]}>
          <View>
            <Image style={[styles.busiImg]} source={images.businessimg} />
          </View>
          <View style={styles.businessCard}>
            <Text style={styles.businessTitle}>Shopping</Text>
            <View style={styles.viewLinks}>
              <Image style={[styles.addCatIconBtm]} source={icons.editicon} />
              <Image style={[styles.addCatIconBtm]} source={icons.deleteicon} />
              <Image style={[styles.addCatIconBtm]} source={icons.eyeicon} />
            </View>
          </View>
        </View> */}

        {/* <View style={styles.pagButtonSec}>
          <TouchableHighlight style={styles.pagButton}>
            <Text style={styles.pagButtonText}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.pagButton}>
            <Text style={styles.pagButtonText}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.pagButton}>
            <Text style={styles.pagButtonText}>3</Text>
          </TouchableHighlight>
        </View> */}
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
  pageTitleTop: {
    marginTop: 10,
    color: '#17297C',
    fontSize: 14,
    lineHeight: 26,
  },
  myCategorySec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myCategoryTitle: {
    color: '#17297C',
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0.6,
    fontWeight: 'bold',
  },
  myCategoryAddCat: {
    color: '#17297C',
    fontSize: 16,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  addCatIconTop: {
    marginTop: 10,
  },
  addCatIcon: {
    width: 32,
    height: 24,
    borderColor: '#4C4C4C',
    borderRightWidth: 1,
  },
  busiCardSec: {
    marginRight: 0,
    marginLeft: 20,
    marginTop: 20,
  },
  busiImg: {
    position: 'absolute',
    top: 15,
    zIndex: 9,
    height:70,
    width:70,
    borderRadius:10,
    borderColor:'#0FD9DD',
    borderWidth: 2,
  },
  businessCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 50,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 30,
    paddingBottom: 20,
    paddingRight: 30,
  },
  businessTitle: {
    fontWeight: 'bold',
    color: '#17297C',
    letterSpacing: 1,
    fontSize: 16,
    fontFamily: 'Rubik',
  },
  businessText: {
    fontWeight: '500',
    color: '#17297C',
    letterSpacing: 1,
    fontSize: 14,
  },
  viewLinks: {
    flexDirection: 'row',
    marginTop: 20,
  },
  addCatIconBtm: {
    marginRight: 10,
  },
  inputBoder: {
    borderWidth: 1,
    borderColor: '#31A5E5',
    padding: 0,
    marginTop: 10,
  },
  linktypeContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#3F3D56',
  },
  linktypeBox: {
    backgroundColor: '#FBF2F2',
    marginTop: 32,
    padding: 15,
  },
  linkTitle: {
    color: '#3F3D56',
    fontSize: 14,
    lineHeight: 32,
  },
  socialmediaContent: {
    marginTop: 50,
  },
  imgLink: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
  },
  selectDefaultImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    padding: 10,
    marginTop: 10,
  },
  selectDefaultImageSec: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  selectImgTitle: {
    color: '#3F3D56',
    fontSize: 14,
    lineHeight: 32,
    letterSpacing: 1,
  },
  chooseCategoryPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  savePreviewBtn: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    height: 40,
    width: 100,
    borderRadius: 10,
    padding: 0,
  },
  pagButtonSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  pagButton: {
    height: 32,
    width: 32,
    borderRadius: 70,
    backgroundColor: 'transparent',
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: '#17297C',
  },
  pagButtonText: {
    color: '#000',
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft: 100,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 5,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing: 1,
  },
  conditionalBorder: {
    borderColor: 'red',
    borderWidth: 2,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});

export default Addcategory;
