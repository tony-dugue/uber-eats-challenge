import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native'
import {useSelector} from "react-redux";

import colors from "../../config/colors";

import OrderItem from "./OrderItem";

export default function ViewCart() {

  const [modalVisible, setModalVisible] = useState(false)

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)

  const total = items
    .map( item => Number(item.price.replace('€', '')))
    .reduce( (prev, curr) => prev + curr, 0)

  const totalCurrency = total.toLocaleString("fr", {
    style: "currency",
    currency: "EUR"
  })

  const checkoutModalContent = () => {
    return (
      <View style={ styles.modalContainer }>
        <View style={ styles.modalCheckoutContainer }>

          <Text style={styles.restaurantName}>{restaurantName}</Text>

          { items.map( (item, index) => (
            <OrderItem key={index} item={item} />
          ))}

          <View style={styles.subTotalContainer}>
            <Text style={styles.subTotalText}>Total</Text>
            <Text>{totalCurrency}</Text>
          </View>

          <View style={styles.checkoutButtonContainer}>
            <TouchableOpacity style={styles.checkoutButton} onPress={ () => setModalVisible(false)}>
              <Text style={styles.checkoutButtonText}>Payer</Text>
              <Text style={styles.checkoutButtonTotal}>{ total ? totalCurrency : ""}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }

  return (
    <>

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={ () => setModalVisible(false)}
      >
        { checkoutModalContent() }
      </Modal>

      { (total) ? (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={ () => setModalVisible(true)}>
              <Text style={styles.buttonText}>Passer commande</Text>
              <Text style={styles.buttonTextCurrency}>{totalCurrency}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    position: "absolute",
    bottom: 80,
    zIndex: 999
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: '100%'
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative"
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    marginRight: 20
  },
  buttonTextCurrency: {
    color: colors.white,
    fontSize: 20,
    marginRight: 10
  },

  // modal

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  modalCheckoutContainer: {
    backgroundColor: colors.white,
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10
  },

  subTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  subTotalText: {
    textAlign: 'left',
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10
  },

  checkoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: colors.black,
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative'
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: 20
  },
  checkoutButtonTotal: {
    position: 'absolute',
    top: 17,
    right: 20,
    color: colors.white,
    fontSize: 15
  }
})





