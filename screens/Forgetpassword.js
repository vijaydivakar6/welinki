import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image, TextInput, ImageBackground, ActivityIndicator,Alert  } from 'react-native'
import { COLORS, icons, images } from "../constants";
import { useForm, Controller } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';

import client from '../API/api';


const Forgetpassword = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const [loader, setLoader] = useState(false);
  const [errorsCollection, seterrorsCollection] = useState({});

  const onSubmit = data => {    
    console.log('====================================');
    console.log('Clicked', data);
    console.log('====================================');

    setLoader(true);

    client
      .post('/vendor/reset_password', {
        email: data.email,
        role: 'vendor',
      })
      .then(async ({data}) => {
        setLoader(false);
        Alert.alert('Success',data.msg)
        console.log(data);
      })
      .catch(error => {
        // console.log(error);
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
    console.log(data);
  
  };


  return (
    <ScrollView>
      <ImageBackground style={styles.backgroundimage} source={images.backgrounddesign}>
        <View style={[styles.container]} >
          <View style={[styles.welcome_bk]}>
            <Text style={[styles.welcome_text]}>Forgot Password</Text>
          </View>
          <View style={[styles.welinki_logo]}>
            <Image source={images.Logo} />
          </View>
          <View style={[styles.forgot_textSec]}>
            <Text style={[styles.forgot_text]}>Forgot your password? No problem. Just let us know your email address and we will email you a password reset link.</Text>
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
                      marginTop: 10
                    }}                  />
                )}
                name="email"
                rules={{ required: true }}
                defaultValue=""
              />
                {errorsCollection.email && (
                <Text style={{color: 'red'}}>{errorsCollection.email[0]}</Text>)}
                </View>

            {
              loader ?
              <ActivityIndicator
              style={{marginTop: 10}}
              size="large"
              color="#000"
             />
              :
              (<LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
              <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
                Send
                </Text>
            </LinearGradient>)
            }
       
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'contain',
    height: '60%',
    flex: 1
  },
  welcome_bk: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 230
  },
  welcome_text: {
    fontSize: 22,
    color: '#fff',
    letterSpacing:0.6,
    lineHeight:32
  },
  welinki_logo: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25
  },
  forgot_textSec:{
  marginTop:42
  },
  emailandpass: {
    flex: 1,
    width: '100%',
    padding: 40,
  },
  email_text: {
    fontSize: 14,
    color: '#2C2C2C',
    letterSpacing:0.6
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
  forgot_text: {
    fontSize: 14,
    lineHeight: 26,
    paddingRight: 40,
    paddingLeft: 40,
    letterSpacing:1,
    color:'#2c2c2c'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing:1
  },

})

export default Forgetpassword;