import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'

import HeaderTabsButton from "./HeaderTabsButton";

export default function HeaderTabs () {

  const [activeTab, setActiveTab] = useState("Livraison")

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



