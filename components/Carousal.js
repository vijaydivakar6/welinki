import React, { Component } from 'react';
import {
  Text, 
  View,
  SafeAreaView ,StyleSheet  } from 'react-native';
import Carousel from 'react-native-snap-carousel';


 class Carousalcomponent extends Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Lorem ipsum sesde",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet, consectetur.",
          },
          {
              title:"Lorem ipsum sesde",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet, consectetur.",
          },
          {
              title:"Lorem ipsum sesde",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut et rhoncus risus. Lorem ipsum dolor sit amet, consectetur.",
          }
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View>
            <Text style={styles.firstTitleText }>{item.title}</Text>
            <Text style={styles.secondText}>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignItems:'center' ,width:'100%'}}>
                <Carousel
                  layout={"default"}
                  loop={true}
             autoplay={true}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
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
    marginBottom:10 
  },
  secondText:{
    fontSize: 14,
    lineHeight: 30 ,
    color:'#2C2C2C' ,
    textAlign: 'center', 
  }
 });


 export default Carousalcomponent;