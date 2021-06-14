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
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import client from '../API/api';
import {useForm, Controller} from 'react-hook-form';

const Item = ({id, name, onPressEdit, onPressNav, onPressDelete, link}) => (
  <View style={[styles.socialmediaLinks]}>
    <Text style={[styles.linkTitleSocial]}>{name}</Text>
    <View style={[styles.editdeleteIcon]}>
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
);

const Addlinks = () => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {},
  } = useForm({});

  const [errorsCollection, seterrorsCollection] = useState({});
  const [loader, setLoader] = useState(false);
  const [categories, setcategories] = useState({});
  const [editMode, setEditMode] = useState(false);

  const allCategory = () => {
    setLoader(true);
    client
      .get(`/users/linkcategory/view/${20}`)
      .then(({data: {data}}) => {
        setLoader(false);
        setcategories(data);
        console.log(data);
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  };

  useEffect(() => {
    allCategory();
  }, []);

  const onSubmit = ({form}) => {
    // setLoader(true);

    client
      .post('/users/link', {
        ...form,
        links_category_id: categories.id,
      })
      .then(({data: {data}}) => {
        console.log(data);

        Alert.alert('Success', data);

        reset();
        seterrorsCollection({});

        // setLoader(false);
        // console.log(data);
      })
      .catch(error => {
        console.log(error);
        setLoader(true);
        if (error.response.status === 422) {
          setLoader(false);
          seterrorsCollection(error.response.data.errors);
          console.log(error.response.data.errors);
        } else {
          setLoader(false);
          Alert.alert('Error', 'Something went wrong, Please try again');
          console.error(error);
        }
      });
  };

  const onSubmitEdit = ({form}) => {

    console.log(form);
    client
      .patch(`/users/link/${form.id}`, {
          ...form
      })
      .then(({data: {data}}) => {
        setLoader(false);
        setEditMode(false);

        console.log(data);
        Alert.alert('Success', data);

        reset();
        seterrorsCollection({});

        // reset();
      })
      .catch(error => {
        setLoader(false);
        setEditMode(false);
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

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      link={item.link}
      onPressEdit={() => editLink(item)}
      onPressNav={() => console.log(item.id)}
      onPressDelete={() => deleteLink({id: item.id})}
    />
  );

  const deleteLink = ({id}) => {
    client
      .delete(`/users/link/${id}`)
      .then(({data: {msg}}) => {
        Alert.alert('Success', msg);
        allCategory();
      })
      .catch(error => {
        Alert.alert('Error', 'Please try again, Something went wrong');
      });
  };

  const editLink = ({id, link, name}) => {
    setEditMode(true);
    seterrorsCollection({});

    setValue('form', {
      id,
      name,
      link,
    });
  };

  return (
    <ScrollView>
      <View style={[styles.container]}>
        {loader ? (
          <ActivityIndicator
            style={{marginTop: 10}}
            size="large"
            color="#000"
            style={[styles.loaderStyle]}
          />
        ) : (
          <View>
            <View>
              <Text style={styles.pageTitle}>Add Links</Text>
            </View>
            <View style={styles.linktypeBox}>
              <View style={styles.linktypeContentTop}>
                <Image
                  style={[styles.busiImg]}
                  source={{uri: categories.image}}
                />
                <View style={styles.imgLink}>
                  <Text style={styles.pageTitle}>{categories.name}</Text>
                  <LinearGradient
                    start={{x: 0.0, y: 0.25}}
                    end={{x: 0.9, y: 1.0}}
                    colors={['#31A5E5', '#05EB6D']}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>Add Links</Text>
                  </LinearGradient>
                </View>
              </View>
              <View style={styles.linktypeContent}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      label="name"
                      style={{
                        height: 40,
                        borderColor: '#2C2C2C',
                        borderBottomWidth: 0.5,
                        letterSpacing: 1,
                      }}
                      placeholder="Enter link name"
                    />
                  )}
                  name="form.name"
                  defaultValue=""
                />
                {errorsCollection.name && (
                  <Text style={{color: 'red'}}>{errorsCollection.name[0]}</Text>
                )}
              </View>
              <View style={styles.linktypeContent}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      label="link"
                      placeholder="Enter link Url"
                      style={{
                        height: 40,
                        borderColor: '#2C2C2C',
                        borderBottomWidth: 0.1,
                        letterSpacing: 1,
                      }}
                    />
                  )}
                  name="form.link"
                  defaultValue=""
                />
                {errorsCollection.link && (
                  <Text style={{color: 'red'}}>{errorsCollection.link[0]}</Text>
                )}
              </View>
              <Text style={styles.useLink}>(use link with http/https)</Text>
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.9, y: 1.0}}
                colors={['#31A5E5', '#05EB6D']}
                style={styles.linearGradient}>
                <TouchableOpacity
                  onPress={
                    editMode
                      ? handleSubmit(onSubmitEdit)
                      : handleSubmit(onSubmit)
                  }
                  style={styles.buttonText}>
                  <Text>Save</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View style={[styles.socialmediaContent]}>
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={categories.links}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  // onEndReached={handleLoadMore}
                  // onEndReachedThreshold={0.5}
                  // initialNumToRender={6}
                  // onRefresh={onRefreshCallBack}
                  // refreshing={refreshinBoolean}
                />
              </SafeAreaView>
            </View>

            {/* <View style={[styles.socialmediaContent]}>
              <View style={[styles.socialmediaLinks]}>
                <Text style={[styles.linkTitleSocial]}>Amazon</Text>
                <View style={[styles.editdeleteIcon]}>
                  <Image style={[styles.socailIcon]} source={icons.editicon} />
                  <Image
                    style={[styles.socailIcon]}
                    source={icons.deleteicon}
                  />
                  <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                </View>
              </View>
              <View style={[styles.socialmediaLinks]}>
                <Text style={[styles.linkTitleSocial]}>Flipkart</Text>
                <View style={[styles.editdeleteIcon]}>
                  <Image style={[styles.socailIcon]} source={icons.editicon} />
                  <Image
                    style={[styles.socailIcon]}
                    source={icons.deleteicon}
                  />
                  <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                </View>
              </View>
              <View style={[styles.socialmediaLinks]}>
                <Text style={[styles.linkTitleSocial]}>Snapdeal</Text>
                <View style={[styles.editdeleteIcon]}>
                  <Image style={[styles.socailIcon]} source={icons.editicon} />
                  <Image
                    style={[styles.socailIcon]}
                    source={icons.deleteicon}
                  />
                  <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                </View>
              </View>
              <View style={[styles.socialmediaLinks]}>
                <Text style={[styles.linkTitleSocial]}>Website</Text>
                <View style={[styles.editdeleteIcon]}>
                  <Image style={[styles.socailIcon]} source={icons.editicon} />
                  <Image
                    style={[styles.socailIcon]}
                    source={icons.deleteicon}
                  />
                  <Image style={[styles.socailIcon]} source={icons.eyeicon} />
                </View>
              </View>
            </View> */}

            {/* <View style={[styles.busiCardSec]}>
              <View>
                <Image style={[styles.busiImg1]} source={images.businessimg} />
              </View>
              <View style={styles.businessCard}>
                <Text style={styles.businessTitle}>Shopping</Text>
                <View style={styles.viewLinks}>
                  <Image
                    style={[styles.addCatIconBtm]}
                    source={icons.editicon}
                  />
                  <Image
                    style={[styles.addCatIconBtm]}
                    source={icons.deleteicon}
                  />
                  <Image
                    style={[styles.addCatIconBtm]}
                    source={icons.eyeicon}
                  />
                </View>
              </View>
            </View> */}
          </View>
        )}
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
    borderColor: '#31A5E5',
  },
  pageTitleTop: {
    marginTop: 10,
    color: '#17297C',
    fontSize: 14,
    lineHeight: 26,
  },
  inputBoder: {
    borderWidth: 0.5,
    borderColor: '#31A5E5',
    padding: 0,
    marginTop: 10,
  },
  linktypeContentTop: {
    flex: 2,
    flexDirection: 'row',
  },
  linktypeContent: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#3F3D56',
  },
  linktypeBox: {
    backgroundColor: '#FBF2F2',
    marginTop: 10,
    padding: 10,
  },
  linkTitle: {
    color: '#3F3D56',
    fontSize: 14,
    lineHeight: 32,
  },
  linkTitleSocial: {
    color: '#3F3D56',
    fontSize: 16,
    lineHeight: 32,
    letterSpacing: 0.6,
  },
  socialmediaContent: {
    marginTop: 50,
  },
  imgLink: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
  },
  socialmediaLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#3F3D56',
    alignContent: 'center',
    alignItems: 'center',
  },
  editdeleteIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  socailIcon: {
    marginRight: 10,
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
    marginTop: 10,
    width: 120,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 5,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing: 1,
  },
  busiCardSec: {
    marginRight: 10,
    marginLeft: 40,
    marginTop: 50,
  },
  busiImg1: {
    position: 'absolute',
    top: 10,
    zIndex: 9,
    elevation: 20,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 10,
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
    marginTop: 10,
  },
  useLink: {
    marginTop: 10,
    color: '#3F3D56',
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 32,
  },
  addCatIconBtm: {
    marginRight: 15,
  },
  busiImg: {
    width: 50,
    height: 50,
  },
});
export default Addlinks;
