import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import InfiniteScroll from 'react-infinite-scroll-component';
import client from '../API/api';

const Item = ({name,onPress, email, mobile_number, image}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.busiCardSec]}>
      <View>
        <Image
          style={[styles.busiImg]}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.businessCard}>
        <Text style={styles.businessTitle}>{name}</Text>
        <Text style={styles.businessText}>{email}</Text>
        <Text style={styles.businessText}>{mobile_number}</Text>
        <View style={styles.viewLinks}>
          <Text style={styles.businessText}>View Links</Text>
          <Text style={styles.businessText}>View info</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const Allbusiness = () => {
  
  const [loader, setLoader] = useState(false);
  const [business, setBusiness] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshinBoolean, SetRefreshinBoolean] = useState(false);

  const fetchAllBusiness = () => {
    setLoader(true);
    console.log('page', page);
    client
      .get('/vendor/business', {
        params: {page},
      })
      .then(({data: {data}}) => {
        // console.log('data origon',data);
        setDataArray(data);
        setLoader(false);
        SetRefreshinBoolean(false);
        if (page === 1) {
          setBusiness(data);
        } else {
          setBusiness([...business, ...data]);
        }
        console.log(data);
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAllBusiness();
  }, [page]);

  const renderItem = ({item}) => (
    <Item
      name={item.name}
      email={item.email}
      mobile_number={item.mobile_number}
      image={item.image}
      onPress={() => console.log(item.id)}
    />
  );

  const handleLoadMore = () => {
    console.log(dataArray, 'dataArray');
    if (dataArray.length > 0) {
      setPage(page + 1);
      console.log(page);
    }
    console.log('Load more trigger');
  };

  const onRefreshCallBack = () => {
    setPage(1);
    SetRefreshinBoolean(true);
    fetchAllBusiness();
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.allCateSec}>
        <Text style={styles.allCateText}>All Business Listings</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={business}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={6}
          onRefresh={onRefreshCallBack}
          refreshing={refreshinBoolean}
        />
      </SafeAreaView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    marginBottom: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  allCateSec: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  allCateText: {
    fontSize: 20,
    lineHeight: 32,
    color: '#17297C',
    letterSpacing: 0.6,
    fontWeight: 'bold',
    marginTop: 25,
  },
  busiCardSec: {
    marginRight: 10,
    marginLeft: 40,
    marginTop: 20,
  },
  busiImg: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: 30,
    zIndex: 9,
    elevation: 20,
    borderRadius:10
  },
  businessCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 50,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 30,
    paddingBottom: 10,
    paddingRight: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 10,
  },
  businessTitle: {
    fontWeight: '500',
    color: '#17297C',
    letterSpacing: 1,
    fontSize: 16,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    lineHeight: 32,
  },
  businessText: {
    fontWeight: '500',
    color: '#17297C',
    letterSpacing: 1,
    fontSize: 14,
    lineHeight: 26,
  },
  viewLinks: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
export default Allbusiness;
