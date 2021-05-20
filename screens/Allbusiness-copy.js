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
} from 'react-native';
import {COLORS, icons, images} from '../constants';
import InfiniteScroll from 'react-infinite-scroll-component';
import client from '../API/api';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
  },
];

const Item = ({name, email, mobile_number, image}) => {
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>;
};

const Allcategories = () => {
  const [loader, setLoader] = useState(false);
  const [business, setBusiness] = useState([]);
  const [page, setPage] = useState(1);

  // _fetchAllBeers = () => {
  //   const { page } = this.state;
  //   const URL = `/beers?page=${page}&per_page=10`;

  //   axiosService
  //     .request({
  //       url: URL,
  //       method: 'GET'
  //     })
  //     .then(response => {
  //       this.setState((prevState, nextProps) => ({
  //         data:
  //           page === 1
  //             ? Array.from(response.data)
  //             : [...this.state.data, ...response.data],
  //         loading: false
  //       }));
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
  // };

  useEffect(() => {
    setLoader(true);
    client
      .get('/vendor/business', {
        params: page,
      })
      .then(({data: {data}}) => {
        setLoader(false);
        // if (page === 1) {
        setBusiness(data);
        // } else {
        //   setBusiness(...business, data);
        // }

        console.log(data);
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  }, []);

  // const businessData = business.map((el, index) => (
  //   <View key={index} style={[styles.busiCardSec]}>
  //     <View>
  //       <Image
  //         style={[styles.busiImg]}
  //         source={{
  //           uri: el.image,
  //         }}
  //       />
  //     </View>
  //     <View style={styles.businessCard}>
  //       <Text style={styles.businessTitle}>{el.name}</Text>
  //       <Text style={styles.businessText}>{el.email}</Text>
  //       <Text style={styles.businessText}>{el.mobile_number}</Text>
  //       <View style={styles.viewLinks}>
  //         <Text style={styles.businessText}>View Links</Text>
  //         <Text style={styles.businessText}>View info</Text>
  //       </View>
  //     </View>
  //   </View>
  // ));


  const renderItem = ({item}) => {
    <Item
      name={item.name}
      // email={business.email}
      // mobile_number={business.mobile_number}
      // image={business.image}
    ></Item>;
  };

  return (
    // <View style={styles.container}>
    //   <View style={[styles.container]}>
    //     <View style={styles.allCateSec}>
    //       <Text style={styles.allCateText}>All Business Listings</Text>
    //     </View>

    //     {loader ? (
    //       <ActivityIndicator
    //         style={{marginTop: 10}}
    //         size="large"
    //         color="#000"
    //       />
    //     ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    //     )}
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

// const styles = StyleSheet.create({
//   containerItem: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   container: {
//     marginBottom: 50,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   allCateSec: {
//     flexDirection: 'row',
//     alignContent: 'center',
//     justifyContent: 'center',
//   },
//   allCateText: {
//     fontSize: 20,
//     lineHeight: 32,
//     color: '#17297C',
//     letterSpacing: 0.6,
//     fontWeight: 'bold',
//     marginTop: 25,
//   },
//   busiCardSec: {
//     borderWidth:10,
//     borderColor:'red',
//     marginRight: 10,
//     marginLeft: 40,
//     marginTop: 20,
//   },
//   busiImg: {
//     width: 50,
//     height: 50,
//     position: 'absolute',
//     top: 30,
//     zIndex: 9,
//     elevation: 20,
//   },
//   businessCard: {
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     marginRight: 30,
//     marginLeft: 50,
//     flex: 1,
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     paddingTop: 10,
//     paddingLeft: 30,
//     paddingBottom: 10,
//     paddingRight: 30,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,

//     elevation: 10,
//   },
//   businessTitle: {
//     fontWeight: '500',
//     color: '#17297C',
//     letterSpacing: 1,
//     fontSize: 16,
//     fontFamily: 'Rubik',
//     fontWeight: 'bold',
//     lineHeight: 32,
//   },
//   businessText: {
//     fontWeight: '500',
//     color: '#17297C',
//     letterSpacing: 1,
//     fontSize: 14,
//     lineHeight: 26,
//   },
//   viewLinks: {
//     flexDirection: 'row',
//     alignContent: 'center',
//     justifyContent: 'space-between',
//   },
// });
export default Allcategories;
