import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import colors from "../../config/colors";

export default function ViewCart() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Passer commande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    position: "absolute",
    bottom: 50,
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
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative"
  },
  buttonText: {
    color: colors.white,
    fontSize: 18
  }
})
