import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'

export default function MenuItem({ food }) {
  return (
    <View style={styles.itemContainer}>

      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
      </View>

      <View>
        <Image style={styles.itemImage} source={{ uri: food.image }} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  itemInfo: {
    width: 240,
    justifyContent: "space-evenly"
  },
  itemTitle: {
    fontSize: 19,
    fontWeight: "600"
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  }
})

