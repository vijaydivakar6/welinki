import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image,
    TextInput,
    Button,
} from 'react-native';
import { COLORS, icons, images } from '../constants';
import SingleCarousal from '../components/Singlecarousal'
import SinglevideoPlayer from '../components/Singlevideoplayer'

const Viewdetails = () => {
    return (
    <ScrollView>
        <View style={[styles.container]}>
            <View>
                <Text style={styles.pageTitle}>Video Ads</Text>
                <Text style={styles.pageText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet. </Text>
                
            </View>
            <View style={styles.SingleCarousalImg}>
                <SingleCarousal/>
                <SinglevideoPlayer/>
            </View>
            <View>
                <Text style={styles.videosubTitle}>Handy Clutches</Text>
                <Text style={styles.pageText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet.   </Text>
            </View>
        </View>
    </ScrollView>
    )
};


const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 20,
        lineHeight: 32,
        color: '#17297C',
        marginBottom: 11,
        fontWeight:'900',
        letterSpacing:1
      },
      container: {
        padding: 20,
      },
      videosubTitle:{
        fontSize: 16,
        lineHeight: 32,
        color: '#17297C',
        marginBottom: 11,
        marginTop:28,
        letterSpacing:1
      },
      pageText:{
          color:'#2C2C2C',
          fontSize:14,
          lineHeight:28,
        
          letterSpacing:1

      },
      SingleCarousalImg:{
          marginTop:20,
       
      }


});
export default Viewdetails;