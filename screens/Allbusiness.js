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
import InfiniteScroll from 'react-infinite-scroll-component';
import client from '../API/api';

const Allcategories = () => {
  const [loader, setLoader] = useState(false);
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    setLoader(true);
    client
      .get('/vendor/business')
      .then(({data: {data}}) => {
        setLoader(false);
        setBusiness(data);
        console.log(data);
      })
      .catch(error => {
        setLoader(true);
        console.error(error);
      });
  }, []);

  const businessData = business.map((el, index) => (
    <View key={index} style={[styles.busiCardSec]}>
      <View>
        <Image
          style={[styles.busiImg]}
          source={{
            uri: el.image,
          }}
        />
      </View>
      <View style={styles.businessCard}>
        <Text style={styles.businessTitle}>{el.name}</Text>
        <Text style={styles.businessText}>{el.email}</Text>
        <Text style={styles.businessText}>{el.mobile_number}</Text>
        <View style={styles.viewLinks}>
          <Text style={styles.businessText}>View Links</Text>
          <Text style={styles.businessText}>View info</Text>
        </View>
      </View>
    </View>
  ));

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={styles.allCateSec}>
          <Text style={styles.allCateText}>All Business Listings</Text>
        </View>

        {/* <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={this.refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
          }>
          {items}
        </InfiniteScroll> */}

        {loader ? (
          <ActivityIndicator
            style={{marginTop: 10}}
            size="large"
            color="#000"
          />
        ) : (
          businessData
        )}

        {/* <View style={[styles.busiCardSec]}>
          <View>
            <Image style={[styles.busiImg]} source={images.businessimg} />
          </View>
          <View style={styles.businessCard}>
            <Text style={styles.businessTitle}>Cuion Technologies</Text>
            <Text style={styles.businessText}>sumalatha@cuion.in</Text>
            <Text style={styles.businessText}>8073080046</Text>
            <View style={styles.viewLinks}>
              <Text style={styles.businessText}>View Links</Text>
              <Text style={styles.businessText}>View info</Text>
            </View>
          </View>
        </View>

        <View style={[styles.busiCardSec]}>
          <View>
            <Image style={[styles.busiImg]} source={images.businessimg} />
          </View>
          <View style={styles.businessCard}>
            <Text style={styles.businessTitle}>Cuion Technologies</Text>
            <Text style={styles.businessText}>sumalatha@cuion.in</Text>
            <Text style={styles.businessText}>8073080046</Text>
            <View style={styles.viewLinks}>
              <Text style={styles.businessText}>View Links</Text>
              <Text style={styles.businessText}>View info</Text>
            </View>
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
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
    width: 50,
    height: 50,
    position: 'absolute',
    top: 30,
    zIndex: 9,
    elevation: 20,
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
export default Allcategories;
