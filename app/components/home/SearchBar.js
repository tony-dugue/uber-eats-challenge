import React, { useState, useEffect } from 'react';
import {View, StyleSheet, FlatList, Text, TextInput} from 'react-native'

import cities from '../../data/cities.js'
import colors from "../../config/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchBar({ cityHandler }) {

  const [filterCity, setFilterCity] = useState([])
  const [masterCity, setMasterCity] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    //fetchPosts()
    setFilterCity(cities)
    setMasterCity(cities)
  }, [])

/*
  const fetchPosts = () => {
    //const apiURL = "https://jsonplaceholder.typicode.com/posts"
    const apiURL = "../data/france.json"
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        setFilterCity(data)
        setMasterCity(data)
      }).catch(err => {
      console.log(err)
    })
  }
*/

  const searchFilter = text => {
    if(text) {
      const newData = masterCity.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setFilterCity(newData)
      setSearch(text)
    } else {
      setFilterCity(masterCity)
      setSearch(text)
    }
  }

  const ItemView = ({ item }) => {
    return(
      <Text style={styles.itemStyle} onPress={() => {
        cityHandler(item.title)
        setSearch('')
      }}>
        {item.title}, {item.zipcode}
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} />
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>

        <Ionicons name={'location-sharp'} size={24} />

        <TextInput
          style={styles.textInput}
          value={search}
          placeholder="Choisir une ville..."
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          clearButtonMode='while-editing'
          onChangeText={ text => searchFilter(text)}
        />

        <View style={{
          flexDirection: 'row',
          backgroundColor: colors.white,
          padding: 9,
          borderRadius: 30,
          alignItems: 'center'
        }}>
          <AntDesign name={'clockcircle'} size={11} style={{ marginRight: 6 }} />
          <Text>Planifier</Text>
        </View>

      </View>

      {search.length > 3 ? (
        <FlatList
          data={filterCity}
          keyExtractor={ (item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  itemStyle: {
    padding: 15
  },
  inputContainer: {
    backgroundColor: colors.background,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5
  },
  textInput: {
    fontWeight: "700",
    paddingHorizontal: 10,
    flex: 1
  }
})

export default SearchBar;
