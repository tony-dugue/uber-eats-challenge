import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function MenuItem({ food }) {
  return (
    <View style={styles.itemContainer}>

      <BouncyCheckbox
        iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
        fillColor="green"
      />

      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text style={styles.itemPrice}>{food.price}</Text>
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
    flex: 1,
    justifyContent: "space-evenly",
    paddingRight: 15,
  },
  itemTitle: {
    fontSize: 19,
    fontWeight: "600"
  },
  itemPrice: {
    paddingTop: 5
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  }
})

