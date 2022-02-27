import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native'

//import {YELP_API_KEY} from "@env"

import colors from "../config/colors";

import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantList from "../components/RestaurantList";
import localRestaurants from "../data/localRestaurants";

export default function Home() {

  const [restaurantData, setRestaurantData] = useState([])
  const [city, setCity] = useState("Rennes")

/*
  const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
      const apiOptions = { headers: { Authorization: `Bearer ${YELP_API_KEY}`} }

      return fetch(yelpUrl, apiOptions)
        .then( res => res.json())
        .then(json => setRestaurantData(json.businesses))
        .catch( err => console.log(err.description))
  }
*/

  useEffect( () => {
    //getRestaurantsFromYelp()

    const restaurantFilterByCity = localRestaurants.filter( restaurant => restaurant.location.city === city)
    setRestaurantData(restaurantFilterByCity)

  }, [city])

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantList restaurantData={restaurantData} />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    backgroundColor: colors.white,
    padding: 15
  }
})



