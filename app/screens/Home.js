import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native'
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

import colors from "../config/colors";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
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



