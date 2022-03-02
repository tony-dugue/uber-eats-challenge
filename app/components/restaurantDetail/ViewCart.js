import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import colors from "../../config/colors";

import {useSelector} from "react-redux";

export default function ViewCart() {

  const items = useSelector((state) => state.cartReducer.selectedItems.items)

  const total = items
    .map( item => Number(item.price.replace('€', '')))
    .reduce( (prev, curr) => prev + curr, 0)

  const totalCurrency = total.toLocaleString("fr", {
    style: "currency",
    currency: "EUR"
  })
  console.log(total)
  return (
    <>
      { (total) ? (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Passer commande</Text>
              <Text style={styles.buttonTextCurrency}>{totalCurrency}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    position: "absolute",
    bottom: 80,
    zIndex: 999
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: '100%'
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative"
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    marginRight: 20
  },
  buttonTextCurrency: {
    color: colors.white,
    fontSize: 20,
    marginRight: 10
  }
})
