import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

import colors from "../config/colors";

export default function HeaderTabsButton({ text, activeTab, setActiveTab }) {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: activeTab === text ? colors.black : colors.white}]}
      onPress={ () => setActiveTab(text)}
    >
      <Text style={[styles.text, {color: activeTab === text ? colors.white : colors.black}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30
  },
  text: {
    fontSize: 15,
    fontWeight: "900"
  }
})

