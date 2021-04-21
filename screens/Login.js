import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image, TextInput, ImageBackground } from 'react-native'
import { COLORS, icons, images } from "../constants";
import { useForm, Controller } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = data => console.log(data);

  return (
    <ScrollView>
      <ImageBackground style={styles.backgroundimage} source={images.backgrounddesign}>
        <View style={[styles.container]} >
          <View style={[styles.login_head]}>
            <Image source={icons.leftarrow} />
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
                      marginTop: 10
                    }}
                    rules={{ required: true }}
                  />
                )}
                name="email"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.name && <Text>Name is required.</Text>}
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
                      marginTop: 10
                    }}
                    rules={{ required: true }}
                  />
                )}
                name="password"
                rules={{ required: true }}
                defaultValue=""
              />
              {errors.name && <Text>Name is required.</Text>}

            </View>
            <View style={styles.forgotSec} >
              <Text style={styles.forgotText}>Forgot Password</Text>
            </View>
            {/* <View style={styles.getButton} >
            <Button
                 onPress={handleSubmit(onSubmit)}
            title="Login" color="#05EB6D"  style={styles.ButtonStyle} />
          </View> */}
            <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.90, y: 1.0 }} colors={['#31A5E5', '#05EB6D']} style={styles.linearGradient}>
              <Text style={styles.buttonText} onPress={handleSubmit(onSubmit)}>
                Login
                </Text>
            </LinearGradient>
            <View style={styles.donthaveSec}>
              <Text style={styles.donthaveText}>Don’t have account? Signup</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

var styles = StyleSheet.create({
  backgroundimage: {
    resizeMode: 'contain',
    height: '60%',
    flex: 1
  },
  login_head: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
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
    marginTop: 200
  },
  welcome_text: {
    fontSize: 22,
    color: '#fff',
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
    fontSize: 14,
    color: '#2C2C2C',
    marginTop: 22,
  },
  password_text: {
    fontSize: 14,
    color: '#2C2C2C',
    marginTop: 22,
  },
  forgotSec: {
    marginTop: 10,
  },
  forgotText: {
    color: '#17297C',
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
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  donthaveSec: {
    marginTop: 20,
  },
  donthaveText: {
    color: '#17297C',
  }
});
export default Login;