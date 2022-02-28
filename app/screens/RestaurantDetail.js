import React from 'react';
import {View, StyleSheet} from 'react-native'
import {Divider} from "react-native-elements";

import About from "../components/restaurantDetail/About";
import MenuList from "../components/restaurantDetail/MenuList";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }}/>
      <MenuList />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
