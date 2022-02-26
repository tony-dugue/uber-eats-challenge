import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native'
import colors from "../config/colors";

const items = [
  { image: require("../assets/images/shopping-bag.png"), text: "Récupérer" },
  { image: require("../assets/images/soft-drink.png"), text: "Boissons soft" },
  { image: require("../assets/images/bread.png"), text: "Boulangerie" },
  { image: require("../assets/images/fast-food.png"), text: "Fast Foods" },
  { image: require("../assets/images/deals.png"), text: "Offres" },
  { image: require("../assets/images/coffee.png"), text: "Café et thé" },
  { image: require("../assets/images/desserts.png"), text: "Desserts" },
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {items.map( (item, index) => (
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

