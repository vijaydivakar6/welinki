import React from 'react';
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
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import {useForm, useFieldArray,Controller} from 'react-hook-form';
import { useSelector, useDispatch  } from 'react-redux'

import {registerUser}  from '../features/signup/singupSlice'

const Signup = () => {

  // const singup = useSelector(state => state.singup)
  //  console.log(singup);

  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    // console.log(data);
    dispatch(
      registerUser({
       ...data
      })
    )
  };

  return (
    <ScrollView>
      <ImageBackground
        style={styles.backgroundimage}
        source={images.backgrounddesign}>
        <View style={[styles.container]}>
          <View style={[styles.login_head]}>
            <Image source={icons.leftarrow} />
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
                    rules={{required: true}}
                  />
                )}
                name="name"
                rules={{required: true}}
                defaultValue=""
              />
              {errors.name && <Text>Name is required.</Text>}
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
                rules={{required: true}}
              />
              {errors.email && <Text>Email is required.</Text>}
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
                name="phone_no"
                rules={{required: true}}
              />
              {errors.phone_no && <Text>Phone is required.</Text>}
            </View>
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
                rules={{required: true}}
              />
              {errors.password && <Text>Password is required.</Text>}
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
                name="confirm_password"
                rules={{required: true}}
              />
              {errors.confirm_password && (
                <Text>Confirm Password is required.</Text>
              )}
            </View>
            <View style={styles.getButton}>
              <Button
                onPress={handleSubmit(onSubmit)}
                title="Sign-up"
                color="#05EB6D"
                style={styles.ButtonStyle}
              />
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
    height: '40%',
    width:'100%',
    flex: 1
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
  },
  name_text: {
    fontSize: 14,
    color: '#7E7979',
    marginTop: 22,
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
});
export default Signup;
