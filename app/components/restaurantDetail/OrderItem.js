import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

export default function OrderItem({ item }) {

  const { title, price } = item

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999'
  },
  title: {
    fontWeight: "600",
    fontSize: 16
  },
  price: {
    opacity: 0.7,
    fontSize: 16
  }
})
