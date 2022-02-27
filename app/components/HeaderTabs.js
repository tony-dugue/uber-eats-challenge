import React from 'react';
import {View, StyleSheet} from 'react-native'

import HeaderTabsButton from "./HeaderTabsButton";

export default function HeaderTabs ({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>

      <HeaderTabsButton
        text="Livraison"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <HeaderTabsButton
        text="À emporter"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center"
  }
})



