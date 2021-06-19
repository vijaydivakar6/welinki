import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TextInput,
  ImageBackground,
  Alert,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import {COLORS, icons, images} from '../constants';
import {useForm, watch, Controller} from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import Selector from '../components/Selector';
import {useNavigation} from '@react-navigation/native';
import {signupUser} from '../features/signup/singupSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '../API/api';

function Signup({navigation}) {
  // const navigation = useNavigation();
  // const Signup = ({navigation ,formHelp : { register} }) => {

  // const dispatch = useDispatch()

  // const singup = useSelector(state => state.singup)

  const [countries, setcountries] = useState([]);
  const [stateCollection, setstateCollection] = useState([]);
  const [isIndia, setisIndia] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorsCollection, seterrorsCollection] = useState({});

  useEffect(() => {
    setLoader(true);
    client
      .get(`/vendor/countries`)
      .then(({data: {data}}) => {
        setLoader(false);
        setcountries(data.map(el => ({label: el.name, value: el.id})));
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  },[]);

  const countryOnChange = value => {
    if (value == 76) {
      setLoader(true);
      setisIndia(true);
      client
        .get(`/vendor/states`)
        .then(({data: {data}}) => {
          setLoader(false);
          setstateCollection(data.map(el => ({label: el.name, value: el.id})));
        })
        .catch(error => {
          setLoader(true);
          console.error(error);
        });
    } else {
      setisIndia(false);
    }
  }

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    seterrorsCollection({})
    console.log('====================================');
    console.log('Clicked', data);
    console.log('====================================');

    setLoader(true);
    client
      .post('/vendor/register', {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        country_id: String(data.country_id),
        state_id: String(data.state_id),
        password: data.password,
        password_confirmation: data.password_confirmation,
        role: 'vendor',
      })
      .then(async ({data}) => {
        setLoader(false);
        try {
          await AsyncStorage.setItem('token', data.token)
        } catch (e) {
          console.error(e);  // saving error
        }
        // console.log(data);
      })
      .catch(error => {
        setLoader(true);
        if (error.response.status === 422) {
          setLoader(false);
          seterrorsCollection(error.response.data.errors);
          console.log(error.response.data.errors);
        } else {
          setLoader(true);
          console.error(error);
        }
      });
  };

  return (
    <ScrollView>
      <ImageBackground
        style={styles.backgroundimage}
        source={images.backgrounddesign}>
        <View style={[styles.container]}>
          <View style={[styles.login_head]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.leftarrow} />
            </TouchableOpacity>
            <Text style={[styles.login_text]}>Signup</Text>
          </View>
          <View style={[styles.signup_banner]}>
            <Image source={images.signup_img} />
          </View>

          <View style={[styles.emailandpass]}>
            <View>
              <Text style={[styles.name_text]}>Name</Text>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginTop: 10,
                    }}
                  />
                )}
                name="name"
                defaultValue=""
              />
              {errorsCollection.name && (
                <Text style={{color: 'red'}}>{errorsCollection.name[0]}</Text>
              )}
            </View>

            <View>
              <Text style={[styles.email_text]}>Email address</Text>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginTop: 10,
                    }}
                  />
                )}
                name="email"
              />
              {errorsCollection.email && (
                <Text style={{color: 'red'}}>{errorsCollection.email[0]}</Text>
              )}
            </View>
            <View>
              <Text style={[styles.email_text]}>Phone No</Text>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginTop: 10,
                    }}
                  />
                )}
                name="mobile"
              />
              {errorsCollection.mobile && (
                <Text style={{color: 'red'}}>{errorsCollection.mobile[0]}</Text>
              )}
            </View>

            <View style={[styles.email_text]}>
              <Text style={[styles.select_text]}>Select Country*</Text>

              <View style={[styles.selectorBorder]}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Selector
                      data={countries}
                      label="Select Country"
                      onchange={value => {
                        onChange(value);
                        countryOnChange(value);
                      }}
                      value={value}
                      />
                  )}
                  name="country_id"
                  defaultValue=""
                    />
                {errorsCollection.country_id && (
                  <Text style={{color: 'red'}}>
                    {errorsCollection.country_id[0]}
                  </Text>
                )}
              </View>
            </View>
            {isIndia && (
              <View style={[styles.email_text]}>
                <Text>Select State*</Text>

                <View style={[styles.input]}>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <Selector
                        data={stateCollection}
                        label="Select State"
                        onchange={value => {
                          onChange(value);
                        }}
                        value={value}
                      />
                    )}
                    name="state_id"
                    defaultValue=""
                  />
                  {errorsCollection.state_id && (
                    <Text style={{color: 'red'}}>
                      {errorsCollection.state_id[0]}
                    </Text>
                  )}
                </View>
              </View>
            )}

            <View>
              <Text style={[styles.password_text]}>Password</Text>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginTop: 10,
                    }}
                  />
                )}
                name="password"
              />
              {errorsCollection.password && (
                <Text style={{color: 'red'}}>
                  {errorsCollection.password[0]}
                </Text>
              )}
            </View>

            <View>
              <Text style={[styles.password_text]}>Confrim Password</Text>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginTop: 10,
                    }}
                  />
                )}
                name="password_confirmation"
              />
              {errorsCollection.password_confirmation && (
                <Text style={{color: 'red'}}>
                  {errorsCollection.password_confirmation[0]}
                </Text>
              )}
            </View>
            {/* <View style={styles.getButton}>
              <Button
                onPress={handleSubmit(onSubmit)}
                title="Sign-up"
                color="#05EB6D"
                style={styles.ButtonStyle}
              />
            </View> */}

            {/* {
               !countries.length > 0 ?
               <ActivityIndicator style={{marginTop:10}} size="large" color="#000" /> :
               <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
               <Text style={styles.buttonText} onPress={() => navigation.navigate('profile')}>
                 Sign-up
               </Text>
             </LinearGradient>
            } */}

            {loader ? (
              <ActivityIndicator
                style={{marginTop: 10}}
                size="large"
                color="#000"
              />
            ) : (
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.9, y: 1.0}}
                colors={['#31A5E5', '#05EB6D']}
                style={styles.linearGradient}>
                <Text
                  style={styles.buttonText}
                  onPress={handleSubmit(onSubmit)}

                  //  onPress={() => navigation.navigate('Mycontacts')}
                >
                  Sign-up
                </Text>
              </LinearGradient>
            )}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

var styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'contain',
    height: '48%',
    width: '100%',
    flex: 1,
  },
  login_head: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  login_text: {
    color: '#fff',
    fontSize: 16,
  },
  signup_banner: {
    flex: 1,
    height: 250,
    width: '100%',
    paddingTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailandpass: {
    flex: 1,
    width: '100%',
    padding: 20,
    marginTop: 100,
    backgroundColor: 'transparent',
  },
  name_text: {
    fontSize: 14,
    color: '#7E7979',
    marginTop: 22,
    letterSpacing: 1,
  },
  email_text: {
    fontSize: 14,
    color: '#7E7979',
    marginTop: 22,
  },
  password_text: {
    fontSize: 14,
    color: '#7E7979',
    marginTop: 22,
  },
  forgotSec: {
    marginTop: 10,
  },
  forgotText: {
    color: '#17297C',
  },
  getButton: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#ffffff',
    paddingRight: 20,
    height: 45,
    marginTop: 26,
  },
  ButtonStyle: {
    width: '100%',
  },
  donthaveSec: {
    marginTop: 20,
  },
  donthaveText: {
    color: '#17297C',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
    width: 150,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing: 1,
  },
  inputBoder: {
    borderWidth: 1,
    borderColor: '#2C2C2C',
    padding: 0,
    marginTop: 10,
  },
  selectorBorder:{
    borderBottomWidth: 0.9,
    borderColor: '#2C2C2C',
  },
  select_text:{
    fontSize: 14,
    color: '#2C2C2C',
  }
});
export default Signup;
