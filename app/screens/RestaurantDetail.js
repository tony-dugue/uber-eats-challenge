import React from 'react';
import {View} from 'react-native'
import {Divider} from "react-native-elements";

import About from "../components/restaurantDetail/About";
import MenuList from "../components/restaurantDetail/MenuList";
import ViewCart from "../components/restaurantDetail/ViewCart";

import foods from '../data/foods'

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }}/>
      <MenuList foods={foods} restaurantName={route.params.restaurant.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.restaurant.name} />
    </View>
  );
}
