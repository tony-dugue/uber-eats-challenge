import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { useDispatch, useSelector } from "react-redux";

export default function MenuItem({ food, restaurantName, hideCheckbox, marginLeft }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) => {
    return Boolean(
      cartItems.find(
        (item) =>
          item.title === food.title && item.restaurantName === restaurantName
      )
    );
  };

  return (
    <View style={styles.itemContainer}>

      { hideCheckbox ? (
        <></>
      ) : (
        <BouncyCheckbox
          iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
          fillColor="green"
          isChecked={isFoodInCart(food, cartItems)}
          onPress={(checkboxValue) => {
            selectItem(food, checkboxValue);
          }}
        />
      )}

      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text style={styles.itemPrice}>{food.price}</Text>
      </View>

      <View>
        <Image style={[styles.itemImage, marginLeft ? {marginLeft: marginLeft} : {marginLeft: 0}]} source={{ uri: food.image }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  itemInfo: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingRight: 15,
  },
  itemTitle: {
    fontSize: 19,
    fontWeight: "600"
  },
  itemPrice: {
    paddingTop: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
});
