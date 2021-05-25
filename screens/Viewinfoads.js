import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import ImageCarousal from '../components/ImageCarousal';
import VideoCarousal from '../components/VideoCarousal';
import client from '../API/api';
import axios from 'axios';

const Viewinfoads = ({ route, navigation }) => {

  const {business_id} = route.params;


  const [loader, setLoader] = useState(false);
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    setLoader(true);
    client
      .get(`/vendor/business/view/${business_id}`)
      .then(({data: {data}}) => {
        setLoader(false);
        setBusiness(data);
        // console.log('data origon',data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        setLoader(false);
      });
  }, []);

  return (
    <ScrollView>
      {loader ? (
        <ActivityIndicator style={{marginTop: 50}} size="large" color="#000" />
      ) : (
        <View style={[styles.container]}>
          <View style={styles.allCateSec}>
            <Text style={styles.allCateText}>{business?.name}</Text>
            <Text style={styles.infoPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et
              rhoncus risus. Lorem ipsum dolor sit amet.{' '}
            </Text>
          </View>

          {business.galleries && (
            <View>
              <View style={styles.imgAdTitle}>
                <Image style={[styles.busiImg]} source={icons.imageAd} />
                <Text style={styles.imgAdTitleAd}>Image Ad’s</Text>
              </View>
              <View style={styles.imgAdSec}>
                <ImageCarousal type="gallery" data={business.galleries} />
              </View>
            </View>
          )}
       
         
          {business.videos && (
               <View style={styles.imgAdSec}>
            <View>
              <View style={styles.imgAdTitle}>
                <Image style={[styles.busiImg]} source={icons.imageAd} />
                <Text style={styles.imgAdTitleAd}>Video Ad’s</Text>
              </View>
              <View style={styles.imgAdSec}>
                <ImageCarousal type="videos" data={business.videos} />
              </View>
            </View>
            </View>
          )}
            {/* <VideoCarousal /> */}
         
          {/* <View style={styles.imgAdTitle}>
            <Image style={[styles.busiImg]} source={icons.videoAd} />
            <Text style={styles.imgAdTitleAd}>Youtube Ad’s</Text>
          </View> */}
          
            {/* <VideoCarousal /> */}
            {business.youtubes && (
                <View style={styles.imgAdSec}>
            <View>
              <View style={styles.imgAdTitle}>
                <Image style={[styles.busiImg]} source={icons.imageAd} />
                <Text style={styles.imgAdTitleAd}>Youtube Ad’s</Text>
              </View>
              <View style={styles.imgAdSec}>
                <ImageCarousal type="youtubes" data={business.youtubes} />
              </View>
            </View>
            </View>
          )}
          
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  allCateSec: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  allCateText: {
    fontSize: 20,
    lineHeight: 32,
    color: '#17297C',
    marginTop: 26,
    fontWeight: '500',
    fontFamily: 'rubik',
    letterSpacing: 0.6,
    fontWeight: 'bold',
  },
  infoPara: {
    fontSize: 14,
    lineHeight: 26,
    color: '#2C2C2C',
    fontWeight: '500',
    fontFamily: 'rubik',
    letterSpacing: 1,
    marginTop: 10,
  },
  imgAdTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#05EB6D',
    padding: 10,
    width: 135,
    borderRadius: 5,
  },
  imgAdTitleAd: {
    letterSpacing: 0.6,
    color: '#17297C',
    fontWeight: '900',
  },
  busiImg: {
    marginRight: 10,
  },
  imgAdSec: {
    marginRight: 20,
    marginLeft: 20,
  },
});
export default Viewinfoads;
