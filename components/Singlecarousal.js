import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class SingleCarousal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                // "https://source.unsplash.com/1024x768/?nature",
                // "https://source.unsplash.com/1024x768/?water",
                // "https://source.unsplash.com/1024x768/?girl",
                // "https://source.unsplash.com/1024x768/?tree",
                require('../assets/images/ROJFuWCsfmA.png'),
                require('../assets/images/ROJFuWCsfmA.png'),
                require('../assets/images/ROJFuWCsfmA.png'),
                require('../assets/images/ROJFuWCsfmA.png'),
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={400}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 15,
                        marginHorizontal: 10,
                        padding: 0,
                        margin: 0
                    }}
                    //   onCurrentImagePressed={index =>
                    //     console.warn(`image ${index} pressed`)
                    //   }
                    style={styles.carousalImgAlign} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,


    },
    carousalImgAlign: {
        width: '100%'
    }
});