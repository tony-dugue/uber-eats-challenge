import React from 'react';
import {TouchableOpacity } from 'react-native'

import RestaurantItem from "./RestaurantItem";

export default function RestaurantList({ restaurantData }) {
  return (
    <>
      {restaurantData.map( (restaurant, index) => (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }} key={index}>
          <RestaurantItem item={restaurant} />
        </TouchableOpacity>
      ))}
    </>
  );
}

