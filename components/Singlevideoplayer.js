import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export default function Singlevideoplayer({url}) {
  return (
    <View style={styles.container}>
      <VideoPlayer
        toggleResizeModeOnFullscreen={true}
        source={{uri: url}}
        // navigator={navigator}
        style={styles.videoSec}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  videoSec: {
    height: 220,
    width: '100%',
  },
});
