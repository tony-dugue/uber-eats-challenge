import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Accueil" />
      <Icon icon="search" text="Rechercher" />
      <Icon icon="shopping-bag" text="Panier" />
      <Icon icon="receipt" text="Commandes" />
      <Icon icon="user" text="Compte" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between"
  }
})

const Icon = ({ icon, text }) => (
  <TouchableOpacity>
    <FontAwesome5 name={icon} size={25} style={{ marginBottom: 3, alignSelf: 'center' }} />
    <Text>{text}</Text>
  </TouchableOpacity>
)
