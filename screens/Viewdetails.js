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
import client from '../API/api';
import {COLORS, icons, images} from '../constants';
import SingleCarousal from '../components/Singlecarousal';
import SinglevideoPlayer from '../components/Singlevideoplayer';

const Viewdetails = ({ route, navigation }) => {
  const {imgcarousal_id} = route.params;
  const [loader, setLoader] = useState(false);
  const [video, setVideo] = useState({});

  // /vendor/gallery/view/2

  useEffect(() => {
    console.log('loaded',imgcarousal_id);
    setLoader(true);
    client
      .get(`/vendor/gallery/view/${imgcarousal_id}`)
      .then(({data: {data}}) => {
        console.log(data);
        setVideo(data);
        setLoader(false);
      })
      .catch(error => {
        console.log(error.respon.status);
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
            <Text style={styles.pageTitle}> {video.name}</Text>
            {/* <Text style={styles.pageText}>{video.description}</Text> */}
          </View>
          <View style={styles.SingleCarousalImg}>
            {
              video?.galleryphotos &&
              <SingleCarousal url={video.galleryphotos.map((el) => el.name)} />
            }
          </View>
          <View>
            {/* <Text style={styles.videosubTitle}>Handy Clutches</Text> */}
            <Text style={styles.pageText}> {video.description} </Text>
          </View>
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
    fontWeight: '900',
    letterSpacing: 1,
  },
  container: {
    padding: 20,
  },
  videosubTitle: {
    fontSize: 16,
    lineHeight: 32,
    color: '#17297C',
    marginBottom: 11,
    marginTop: 28,
    letterSpacing: 1,
  },
  pageText: {
    color: '#2C2C2C',
    fontSize: 14,
    lineHeight: 28,
    letterSpacing: 1,
  },
  pageTitle: {
    fontSize: 20,
    lineHeight: 32,
    color: '#17297C',
    marginBottom: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  container: {
    padding: 20,
  },
  videosubTitle: {
    fontSize: 16,
    lineHeight: 32,
    color: '#17297C',
    marginBottom: 11,
    marginTop: 28,
    letterSpacing: 1,
  },
  pageText: {
    color: '#2C2C2C',
    fontSize: 14,
    lineHeight: 28,

    letterSpacing: 1,
  },
  SingleCarousalImg: {
    marginTop: 20,
  },
});
export default Viewdetails;
