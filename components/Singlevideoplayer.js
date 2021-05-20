import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import VideoPlayer from 'react-native-video-controls';




export default class SingleVideoPlayer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <VideoPlayer
                toggleResizeModeOnFullscreen={true}
                    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                    navigator={this.props.navigator}
                    style={styles.videoSec} />
            </View>
        )
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    videoSec:{
        height:220,
        width:'100%'
    }

});