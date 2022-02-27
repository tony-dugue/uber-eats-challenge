import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_PLACES_API_KEY} from "@env"

import colors from "../config/colors";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBarPlaces() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{ key: GOOGLE_PLACES_API_KEY }}
        textInput={ () => console.log('ok')}
        placeholder="Choisir une ville..."
        styles={{
          textInput: {
            backgroundColor: colors.background,
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7
          },
          textInputContainer: {
            backgroundColor: colors.background,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10
          }
        }}
        renderLeftButton={ () => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name={'location-sharp'} size={24} />
          </View>
        )}
        renderRightButton={ () => (
          <View style={{
            flexDirection: 'row',
            marginRight: 8,
            backgroundColor: colors.white,
            padding: 9,
            borderRadius: 30,
            alignItems: 'center'
          }}>
            <AntDesign name={'clockcircle'} size={11} style={{ marginRight: 6 }} />
            <Text>Rechercher</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row'
  }
})

