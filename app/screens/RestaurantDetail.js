import React from 'react';
import {View, StyleSheet} from 'react-native'
import {Divider} from "react-native-elements";

import About from "../components/restaurantDetail/About";

export default function RestaurantDetail() {
  return (
    <View style={styles.container}>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
})

