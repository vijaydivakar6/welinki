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
  TouchableOpacity,
  Alert,
} from 'react-native';
import {COLORS, icons, images} from '../constants';

const Uservendorlogin = ({navigation}) => {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.backgroundimage}
        source={images.backgrounddesign}>
        <View style={[styles.container]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Login', {
                isVendor: true,
              })
            }>
            <View>
              <View style={[styles.vendorImg]}>
                <Image style={[styles.vendorIcon]} source={images.vendoricon} />
              </View>
              <View style={styles.vendorText}>
                <Text style={[styles.vendorTitle]}>Vendor</Text>
                <Text style={[styles.vendorTextPara]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et
                  rhoncus risus consectetur.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Alert.alert('Error', 'Please try after sometime')}>
            <View>
              <View style={[styles.userImg]}>
                <Image source={images.usericon} />
              </View>
              <View style={styles.userText}>
                <Text style={[styles.userTitle]}>User</Text>
                <Text style={[styles.userTextPara]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et
                  rhoncus risus consectetur.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
  vendorImg: {
    marginTop: 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  userImg: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  serImg: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  vendorTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 32,
    letterSpacing: 0.6,
  },
  vendorTextPara: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '500',
    marginBottom: 10,
    lineHeight: 26,
    paddingBottom: 50,
    paddingRight: 50,
    paddingLeft: 50,
    letterSpacing: 1,
  },
  userTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#2C2C2C',
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 32,
    paddingTop: 10,
    letterSpacing: 0.6,
  },
  userTextPara: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2C2C2C',
    fontWeight: '500',
    marginBottom: 10,
    lineHeight: 26,
    paddingTop: 10,
    paddingBottom: 50,
    paddingRight: 50,
    paddingLeft: 50,
    letterSpacing: 1,
  },
});

export default Uservendorlogin;
