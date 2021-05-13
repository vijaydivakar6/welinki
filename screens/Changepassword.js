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
  TouchableHighlight,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useForm, Controller} from 'react-hook-form';
import client from '../API/api';

const Changepassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const [loader, setLoader] = useState(false);
  const [errorsCollection, seterrorsCollection] = useState({});

  const onSubmit = data => {
    setLoader(true);
    client
      .post('/change/password', {...data})
      .then(({data}) => {
        setLoader(false);
        seterrorsCollection({})
        Alert.alert('Success', data.msg);
        reset();
      })
      .catch(error => {
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

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.pageTitle}>Change Password</Text>
        </View>

        <View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="password"
                placeholder="Enter new Password"
              />
            )}
            name="password"
            defaultValue=""
          />
          {errorsCollection.password && (
            <Text style={{color: 'red'}}>{errorsCollection.password[0]}</Text>
          )}
        </View>

        <View>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="Email"
                placeholder="Enter new Password"
              />
            )}
            name="password_confirmation"
            defaultValue=""
          />

          {errorsCollection.password_confirmation && (
            <Text style={{color: 'red'}}>
              {errorsCollection.password_confirmation[0]}
            </Text>
          )}
        </View>

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
            <Text onPress={handleSubmit(onSubmit)} style={styles.buttonText}>
              SAVE
            </Text>
          </LinearGradient>
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
    borderColor: '#4C4C4C',
  },
  inputBoder: {
    borderWidth: 0.5,
    borderColor: '#4C4C4C',
    padding: 0,
    marginTop: 10,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
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
});
export default Changepassword;
