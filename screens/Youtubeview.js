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

import YouTube from 'react-native-youtube';

const Youtubeview = ({route}) => {
  const {id} = route.params;
  const [loader, setLoader] = useState(false);
  const [video, setVideo] = useState({});

  //   /vendor/gallery/view/2

  useEffect(() => {
    console.log('loaded');
    setLoader(true);
    client
      .get(`/vendor/youtube/view/${id}`)
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
            <YouTube
              videoId="EzyR_MynRwU" // The YouTube video ID
              play // control playback of video with true/false
              fullscreen // control whether the video should play in fullscreen or inline
              loop // control whether the video should loop when ended
              // onReady={e => this.setState({ isReady: true })}
              // onChangeState={e => this.setState({ status: e.state })}
              // onChangeQuality={e => this.setState({ quality: e.quality })}
              // onError={e => this.setState({ error: e.error })}
              style={{alignSelf: 'stretch', height: 300}}
            />
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
export default Youtubeview;
