import React from 'react';
import {View, ScrollView} from 'react-native'
import {Divider} from "react-native-elements";

import MenuItem from "./MenuItem";

export default function MenuList({ foods, restaurantName, hideCheckbox, marginLeft }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    {foods.map( (food, index) => (
      <View key={index}>
        <MenuItem food={food} restaurantName={restaurantName} hideCheckbox={hideCheckbox} marginLeft={marginLeft} />
        <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }}/>
      </View>
    ))}
    </ScrollView>
  );
}

