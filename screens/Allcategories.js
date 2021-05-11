import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import client from '../API/api';

const Allcategories = () => {
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
      <View style={[styles.container]}>
        <View style={styles.allCateSec}>
          <Text style={styles.allCateText}>All Categories</Text>
        </View>
        {
            loader ?
            <ActivityIndicator
            style={{marginTop: 10}}
            size="large"
            color="#000"
           />
           : ( categories.map((el, index) => (
            <View key={index} style={[styles.containerIcon]}>
              <View>
                <Image style={[styles.catImg]} source={{
                    uri : el.image
                }} />
                <Text  onPress={() => Alert.alert('clicked')} style={[styles.catText]}>{el.name}</Text>
              </View>
            </View>)
          ))

        }
        {/* <View style={[styles.containerIcon]}>
          <View>
            <Image style={[styles.catImg]} source={icons.allcategory} />
            <Text style={[styles.catText]}>Automobile</Text>
          </View>
          <View>
            <Image style={[styles.catImg]} source={icons.allcategory} />
            <Text style={[styles.catText]}>Automobile</Text>
          </View>
          <View>
            <Image style={[styles.catImg]} source={icons.allcategory} />
            <Text style={[styles.catText]}>Automobile</Text>
          </View>
        </View> */}

        {/* <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View>
                <View style={[styles.containerIcon]}>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                    <View>
                        <Image style={[styles.catImg]} source={icons.allcategory} />
                        <Text style={[styles.catText]}>Automobile</Text>
                    </View>
                </View> */}
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
  catImg : {
    width: 50,
    height: 50,
  },
  allCateText: {
    fontSize: 20,
    lineHeight: 32,
    color: '#17297C',
    fontWeight: 'bold',
    letterSpacing: 0.6,
    marginTop: 25,
  },
  containerIcon: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 29,
    flexWrap: 'wrap',
  },
  catText: {
    textAlign: 'center',
  },
});
export default Allcategories;
