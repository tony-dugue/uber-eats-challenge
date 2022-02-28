import React from 'react';
import {TouchableOpacity } from 'react-native'

import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ restaurantData, navigation }) {
  return (
    <>
      {restaurantData?.map( (restaurant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          key={index}
          onPress={ () => navigation.navigate("Restaurant", {restaurant: restaurant})}
        >
          <RestaurantItem item={restaurant} />
        </TouchableOpacity>
      ))}
    </>
  );
}

