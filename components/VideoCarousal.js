import React, { Component } from 'react';
import {
  Text, 
  View,
  SafeAreaView ,StyleSheet ,Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { COLORS, icons, images } from "../constants";

 class VideoCarousal extends Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Handy Clutches",
              text: "Lorem ipsum dolor sit ametdolor",
          },
          {
            title:"Handy Clutches",
            text: "Lorem ipsum dolor sit ametdolor",
          },
          {
            title:"Handy Clutches",
            text: "Lorem ipsum dolor sit ametdolor",
          }
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View  style={styles.imgAdContent}>
            <Image style={[styles.busiImg]} source={images.businessimg} />
            <Text style={styles.firstTitleText }>{item.title}</Text>
            <Text style={styles.secondText}>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1 }}>
            <View style={{ flex: 1, flexDirection:'column', justifyContent: 'center', alignItems:'center' ,width:'100%'}}>
                <Carousel
                  layout={"default"}
                  loop={true}
             autoplay={true}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={370}
                  itemWidth={180}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

var styles = StyleSheet.create({
  firstTitleText:{
    fontSize: 18 ,
    textAlign: 'center' , 
    color:'#17297C' , 
    fontWeight:'900' ,
  },
  secondText:{
    fontSize: 14,
    lineHeight: 30 ,
    color:'#2C2C2C' ,
    textAlign: 'center', 
  },
  imgAdContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    width:'100%'
}, 
 });


 export default VideoCarousal;