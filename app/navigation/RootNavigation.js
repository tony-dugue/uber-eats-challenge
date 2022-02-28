import React from "react"

import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import RestaurantDetail from "../screens/RestaurantDetail";

export default function RootNavigation() {

  const Stack = createStackNavigator()
  const screenOptions = { headerShown: false }

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
         <Stack.Screen name="Accueil" component={Home} />
         <Stack.Screen name="Restaurant" component={RestaurantDetail} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}

