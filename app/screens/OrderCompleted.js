import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native'
import LottieView from 'lottie-react-native'

import {useSelector} from "react-redux";

import colors from "../config/colors";

import { db, firebase } from '../../firebase'

import MenuList from "../components/restaurantDetail/MenuList";

export default function OrderCompleted() {

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

  const [lastOrder, setLastOrder] = useState([{
    title: "Chilaquiles",
    description: "Chilaquiles avec fromage et sauce. Un delicieux plat mexicain 🇲🇽",
    price: "14.50€",
    image: "https://img.cuisineaz.com/660x660/2018/06/12/i140368-tortillas-tomates-oeuf.jpeg"
  }])

  const total = items
    .map( item => Number(item.price.replace('€', '')))
    .reduce( (prev, curr) => prev + curr, 0)

  const totalCurrency = total.toLocaleString("fr", {
    style: "currency",
    currency: "EUR"
  })

  useEffect(() => {
    const unsubscribe = db.collection("orders")
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot( snapshot => {
        snapshot.docs.map( doc => {
          console.log(doc.data())
          setLastOrder(doc.data().items)
        })
      })
    return () => unsubscribe()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 15, alignItems: 'center', height: "100%" }}>

        <LottieView
          style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
          source={require('../assets/animations/check-mark.json')}
          autoPlay speed={0.5} loop={false}
        />

        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
          Votre commande au {restaurantName} a été passée pour {totalCurrency}
        </Text>

        <ScrollView>
          <MenuList foods={lastOrder} hideCheckbox={true} />

          <LottieView
            style={{ height: 200, alignSelf: 'center' }}
            source={require('../assets/animations/cooking.json')}
            autoPlay speed={0.5}
          />
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})

