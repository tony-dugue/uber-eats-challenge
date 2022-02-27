import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'

const image = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai  • Comfort Food • $$ • 🎫 • 4⭐ (2913+)"

export default function About() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.restaurantImage} />
      <Text style={styles.restaurantTitle}>{title}</Text>
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

