import React from 'react';
import {View, StyleSheet} from 'react-native'
import {Divider} from "react-native-elements";

import About from "../components/restaurantDetail/About";
import MenuList from "../components/restaurantDetail/MenuList";

export default function RestaurantDetail({ route }) {
  return (
    <View style={styles.container}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }}/>
      <MenuList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
})

