import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'

export default function About({ route }) {

  const { name, image_url, price, review_count, rating, categories } = route.params.restaurant

  const formattedCategories = categories?.map( (cat) => cat.title).join(" • ")
  const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating}⭐ (${review_count}+)`

  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url !== "" ? image_url : "https://archive.org/download/no-photo-available/no-photo-available.png" }} style={styles.restaurantImage} />
      <Text style={styles.restaurantTitle}>{name}</Text>
      <Text style={styles.restaurantDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  restaurantImage: {
    width: "100%",
    height: 180
  },
  restaurantTitle: {
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15
  },
  restaurantDescription: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5
  }
})

