import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native'

import colors from "../../config/colors";
import categories from '../../data/categories'

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {categories.map( (item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingLeft: 20
  },
  itemContainer: {
    alignItems: "center",
    marginRight: 30
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain"
  },
  text: {
    fontSize: 13,
    fontWeight: "900"
  }
})

