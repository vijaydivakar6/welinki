import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { COLORS, icons, images } from '../constants';
import { useForm, Controller } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeRouter, Route, Link } from "react-router-native";

import client from '../API/api';

import * as RootNavigation from '../navigation/RootNavigation';


const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loader, setLoader] = useState(false);
  const [errorsCollection, seterrorsCollection] = useState({});

  const onSubmit = (data) => {

 
    console.log('====================================');
    console.log('Clicked');
    console.log('====================================');

   

    setLoader(true);

    client
      .post('/vendor/login', {
        email: data.email,
        password: data.password,
        role: 'vendor',
      })
      .then(async ({data}) => {

        setLoader(false);
        try {
          await AsyncStorage.setItem('token', data.token);
          navigation.navigate("SideScreen");

          // alert('hai')
        } catch (e) {
          console.error(e); // saving error
        }
        console.log(data);
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
          console.error(error);
        }
      });
    // console.log(data);
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
            <Text style={[styles.login_text]}>Login</Text>
          </View>
          <View style={[styles.welcome_bk]}>
            <Text style={[styles.welcome_text]}>Welcome back !</Text>
          </View>
          <View style={[styles.welinki_logo]}>
            <Image source={images.Logo} />
          </View>
          <View style={[styles.emailandpass]}>
            <View>
              <Text style={[styles.email_text]}>Email address</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    label="Email"
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginTop: 10,
                    }}
                  />
                )}
                name="email"
                defaultValue=""
              />
              {errorsCollection.email && (
                <Text style={{ color: 'red' }}>{errorsCollection.email[0]}</Text>
              )}
            </View>
            <View>
              <Text style={[styles.password_text]}>Password</Text>

              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    secureTextEntry={true}
                    style={styles.default}
                    style={{
                      height: 40,
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginTop: 10,
                    }}
                  />
                )}
                name="password"
                defaultValue=""
              />

              {errorsCollection.password && (
                <Text style={{ color: 'red' }}>{errorsCollection.password[0]}</Text>
              )}

            </View>
            <View style={styles.forgotSec}>
              <Text onPress={() => navigation.navigate('Forgetpassword')} style={styles.forgotText}>Forgot Password</Text>
            </View>
            {/* <View style={styles.getButton} >
            <Button
                 onPress={handleSubmit(onSubmit)}
            title="Login" color="#05EB6D"  style={styles.ButtonStyle} />
          </View> */}

            {loader ? (
              <ActivityIndicator
                style={{ marginTop: 10 }}
                size="large"
                color="#000"
              />
            ) : (
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.9, y: 1.0 }}
                colors={['#31A5E5', '#05EB6D']}
                style={styles.linearGradient}>
                <Text
                  style={styles.buttonText}
                  onPress={handleSubmit(onSubmit)}>
                  Login
                </Text>
              </LinearGradient>
            )}

            <View style={styles.donthaveSec}>
              <Text onPress={() => navigation.navigate('Signup')} style={styles.donthaveText}>
                Don’t have account? Signup
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

var styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'contain',
    height: '60%',
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
  welcome_bk: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 200,
  },
  welcome_text: {
    fontSize: 22,
    color: '#fff',
    lineHeight: 32,
    letterSpacing: 0.6,
    fontWeight: 'bold',
  },
  welinki_logo: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  emailandpass: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  email_text: {
    fontSize: 16,
    color: '#2C2C2C',
    marginTop: 22,
    letterSpacing: 0.6,
  },
  password_text: {
    fontSize: 16,
    color: '#2C2C2C',
    marginTop: 22,
    letterSpacing: 0.6,
  },
  forgotSec: {
    marginTop: 10,
  },
  forgotText: {
    color: '#17297C',
    fontSize: 12,
    letterSpacing: 0.6,
  },
  getButton: {
    // flex: 1,
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
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
    width: 150,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing: 1,
  },
  donthaveSec: {
    marginTop: 20,
  },
  donthaveText: {
    color: '#17297C',
    letterSpacing: 1,
    fontSize: 16,
  },
});
export default Login;
