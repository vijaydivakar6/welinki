import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {COLORS, icons, images} from '../constants';

export default function ImageCarousal({data}) {
  useEffect(() => {
    console.log(data, 'props');
    setCarouselItems(data);

    console.log('carouselItems', carouselItems);
  }, []);

  const [activeIndex, setactiveIndex] = useState(0);

  const [carouselItems, setCarouselItems] = useState([]);

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => console.log(item.id)}>
        <View style={styles.imgAdContent}>
          <Image style={[styles.busiImg]} source={{uri: item.image}} />
          <Text style={styles.firstTitleText}>{item.name}</Text>
          <Text style={styles.secondText}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
    
          <Carousel
            layout={'default'}
            loop={true}
            autoplay={true}
            // ref={ref => (this.carousel = ref)}
            data={carouselItems}
            sliderWidth={370}
            itemWidth={200}
            renderItem={_renderItem}
            onSnapToItem={index => setactiveIndex(index)}
          />
      </View>
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  firstTitleText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#17297C',
    fontWeight: '600',
    letterSpacing: 0.6,
    marginTop: 10,
  },
  secondText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2C2C2C',
    textAlign: 'center',
  },
  imgAdContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  busiImg: {
    width: 150,
    height: 150,
  },
});

// export default ImageCarousal;
