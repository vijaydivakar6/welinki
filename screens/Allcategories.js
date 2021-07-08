import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Alert,
  ActivityIndicator,
  FlatList,
  Dimensions,
  width,
  TouchableOpacity
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import client from '../API/api';

const Allcategories = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    setLoader(true);
    client
      .get('/categories')
      .then(({data: {data}}) => {
        setLoader(false);
        setcategories(data);
        console.log(data);
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.allCateSec}>
        <Text style={styles.allCateText}>All Categories</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        {loader ? (
          <ActivityIndicator
            style={{marginTop: 10}}
            size="large"
            color="#000"
            style={[styles.loaderStyle]}
          />
        ) : (
          categories.map((el, index) => (
            <View key={index} style={[styles.containerIconSec]}>
              <View style={[styles.containerIcon]}>
                <TouchableOpacity  onPress={() => navigation.navigate('Allbusiness',{ category_parent_id : el.id})}>
                  <Image
                    style={[styles.catImg]}
                    source={{
                      uri: el.image,
                    }}
                  />
                  <Text style={[styles.catText]}>{el.name}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  allCateSec: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catImg: {
    width: 80,
    height: 80,
  },
  allCateText: {
    fontSize: 20,
    lineHeight: 32,
    color: '#17297C',
    fontWeight: 'bold',
    letterSpacing: 0.6,
    marginTop: 30,
  },
  containerIconSec: {
    padding: 20,
    marginTop: 29,
  },
  loaderStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catText:{
    textAlign:'center'
  }
});
export default Allcategories;
