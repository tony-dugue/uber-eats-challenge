import React from 'react';
import {View, ScrollView} from 'react-native'
import {Divider} from "react-native-elements";

import foods from "../../data/foods";

import MenuItem from "./MenuItem";

export default function MenuList() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map( (food, index) => (
      <View key={index}>
        <MenuItem food={food} />
        <Divider width={0.5} orientation="vertical" />
      </View>
    ))}
    </ScrollView>
  );
}

