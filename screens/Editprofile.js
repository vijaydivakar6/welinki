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
  TouchableHighlight,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useForm, Controller} from 'react-hook-form';
import client from '../API/api';

const Profile = () => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm();

  const [loader, setLoader] = useState(false);
  const [india, setIndia] = useState(false);
  const [errorsCollection, seterrorsCollection] = useState({});

  const getProfile = () => {
    client
      .get('/update/profile')
      .then(({data: {data}}) => {
        let {
          name,
          email,
          mobile,
          address,
          pincode,
          gst_number,
          city,
          state: {name: stateName},
          country: {name: countryName},
        } = data;
        (countryName == 'India') && setIndia(true);
        setValue('form', {
          name,
          email,
          mobile,
          pincode,
          gst_number,
          address,
          city,
          state: stateName,
          country: countryName,
        });
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const onSubmit = ({form}) => {
    setLoader(true);
    client
      .post('/update/profile', {...form})
      .then(({data}) => {
        setLoader(false);
        getProfile();
        seterrorsCollection({});
        Alert.alert('Success', data.msg);
        // reset();
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
          <Text style={styles.pageTitle}>Edit Profile</Text>
        </View>
        <View>
          <Text style={styles.pageTitleTop}>Name</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="name"
              />
            )}
            name="form.name"
            defaultValue=""
          />
          {errorsCollection.name && (
            <Text style={{color: 'red'}}>{errorsCollection.name[0]}</Text>
          )}
        </View>
        <View>
          <Text style={styles.pageTitleTop}>E-mail Id</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="email"
                editable={false}
              />
            )}
            name="form.email"
            defaultValue=""
          />
        </View>
        <View>
          <Text style={styles.pageTitleTop}>Mobile</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="mobile"
              />
            )}
            name="form.mobile"
            defaultValue=""
          />
          {errorsCollection.mobile && (
            <Text style={{color: 'red'}}>{errorsCollection.mobile[0]}</Text>
          )}
        </View>
        <View>
          <Text style={styles.pageTitleTop}>Pincode</Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="pincode"
              />
            )}
            name="form.pincode"
            defaultValue=""
          />

          {errorsCollection.pincode && (
            <Text style={{color: 'red'}}>{errorsCollection.pincode[0]}</Text>
          )}
        </View>
        <View>
          <Text style={styles.pageTitleTop}>Gst Number</Text>

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="gst_number"
              />
            )}
            name="form.gst_number"
            defaultValue=""
          />

          {errorsCollection.gst_number && (
            <Text style={{color: 'red'}}>{errorsCollection.gst_number[0]}</Text>
          )}
        </View>

        <View>
          <Text style={styles.pageTitleTop}>Country</Text>

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="state"
                editable={false}
              />
            )}
            name="form.country"
            defaultValue=""
          />

          {errorsCollection.country && (
            <Text style={{color: 'red'}}>{errorsCollection.country[0]}</Text>
          )}
        </View>

        <View>
          <Text style={styles.pageTitleTop}>Address</Text>

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="address"
              />
            )}
            name="form.address"
            defaultValue=""
          />

          {errorsCollection.address && (
            <Text style={{color: 'red'}}>{errorsCollection.address[0]}</Text>
          )}
        </View>

        <View>
          <Text style={styles.pageTitleTop}>City</Text>

          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                label="city"
              />
            )}
            name="form.city"
            defaultValue=""
          />

          {errorsCollection.city && (
            <Text style={{color: 'red'}}>{errorsCollection.city[0]}</Text>
          )}
        </View>

        {india && (
          <View>
            <Text style={styles.pageTitleTop}>State</Text>

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  label="state"
                  editable={false}
                />
              )}
              name="form.state"
              defaultValue=""
            />

            {errorsCollection.state && (
              <Text style={{color: 'red'}}>{errorsCollection.state[0]}</Text>
            )}
          </View>
        )}

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
    letterSpacing: 0.6,
    fontWeight: 'bold',
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
  pageTitleTop: {
    marginTop: 10,
    color: '#17297C',
    fontSize: 14,
    lineHeight: 26,
    letterSpacing: 0.6,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
    width: 100,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing: 0.6,
  },
});
export default Profile;
