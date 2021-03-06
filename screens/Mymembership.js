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
  ActivityIndicator,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import client from '../API/api';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const Mymembership = () => {
  const [loader, setLoader] = useState(false);
  const [membership, setMembership] = useState({});

  useEffect(() => {
    setLoader(true);
    client
      .get('/vendor/membership')
      .then(({data: {data}}) => {
        console.log(data);
        setMembership(data);
        setLoader(false);
      })
      .catch(error => {
        setLoader(true);
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      {loader ? (
        <ActivityIndicator style={{marginTop: 10}} size="large" color="#000" />
      ) : (
        <View style={[styles.container]}>
          <View>
            <Text style={styles.pageTitle}>My Membership</Text>
          </View>
          <View style={[styles.memershipImg]}>
            <Image source={images.workchart} />
          </View>
          <View style={[styles.memebershipBox]}>
           
            <View style={[styles.memershipContent]}>
              <Text style={styles.contentTitle}>Status </Text>
              <Text style={styles.contentTitle}>{membership?.membership_status.toUpperCase()}</Text>
            </View>
            <View style={[styles.memershipContent]}>
              <Text style={styles.contentTitle}>Type </Text>
              <Text style={styles.contentTitle}>{membership?.membership_type.toUpperCase()}</Text>
            </View>
            <View style={[styles.memershipContent]}>
              <Text style={styles.contentTitle}>Date </Text>
              <Text style={styles.contentTitle}> {membership?.subscription_date}</Text>
            </View>
            <View style={[styles.memershipContent]}>
              <Text style={styles.contentTitle}>Expiry Date</Text>
              <Text style={styles.contentTitle}>{membership?.expiry_date}</Text>
            </View>
            <View style={[styles.memershipContent]}>
              <Text style={styles.contentTitle}>Remaining </Text>
              <Text style={styles.contentTitle}> {membership?.remaining} </Text>
            </View>
          </View>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.9, y: 1.0}}
            colors={['#31A5E5', '#05EB6D']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>RENEW</Text>
          </LinearGradient>
        </View>
      )}
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
    backgroundColor: '#fff',
  },
  memershipImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  memebershipBox: {
    backgroundColor: '#FAF8F5',
    marginTop: 37,
  },
  memershipContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
  },
  contentTitle: {
    fontSize: 16,
    lineHeight: 32,
    color: '#17297C',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  savePreviewBtn: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    color: '#ffffff',
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 150,
    backgroundColor: '#05EB6D',
    marginVertical: 8,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 22,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    letterSpacing: 1,
    fontWeight: '900',
  },
});

export default Mymembership;
