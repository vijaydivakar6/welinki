import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  Button,
  Platform,
  View,
  Image,
} from "react-native";

import IAP from "react-native-iap";

const Payment = () => {
  const [purchased, setPurchased] = useState(false); //set to true if the user has active subscription
  const [products, setProducts] = useState({}); //used to store list of products
   
  useEffect(() => {
    IAP.initConnection()
      .catch(() => {
        console.log("error connecting to store...");
      })
      .then(() => {
        IAP.getSubscriptions(items)
          .catch(() => {
            console.log("error finding items");
          })
        })
          .then((res) => {
            console.log("hey");
          })
      }, []);
  
  return (
    <View>
      <Text>Hai </Text>
    </View>
  )

}

export default Payment;