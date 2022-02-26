import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

export default function RestaurantItem({ item }) {
  return (
      <View style={styles.restaurantItemContainer}>
        <RestaurantImage image={item.image_url}/>
        <RestaurantInfo name={item.name} rating={item.rating}/>
      </View>
  );
}

const RestaurantImage = ({ image }) => (
  <View>
    <Image style={styles.restaurantImage} source={{ uri: image }}/>

    <TouchableOpacity style={styles.restaurantImageLike}>
      <MaterialCommunityIcons name='heart-outline' size={25} color={colors.white}/>
    </TouchableOpacity>
  </View>
)

const RestaurantInfo = ({ name, rating }) => (
    <View style={styles.restaurantInfoContainer}>
      <View>
        <Text style={styles.restaurantInfoTitle}>{name}</Text>
        <Text style={styles.restaurantInfoSubtitle}>30-45 • min</Text>
      </View>

      <View style={styles.restaurantInfoStar}>
        <Text>{rating}</Text>
      </View>

    </View>
)

const styles = StyleSheet.create({
  restaurantItemContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: colors.white
  },
  restaurantInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  restaurantImage: {
    width: '100%',
    height: 180
  },
  restaurantImageLike: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  restaurantInfoTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  restaurantInfoSubtitle: {
    fontSize: 13,
    color: 'grey'
  },
  restaurantInfoStar: {
    backgroundColor: colors.background,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  }
})
