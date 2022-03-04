import React from "react"

import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import RestaurantDetail from "../screens/RestaurantDetail";
import OrderCompleted from "../screens/OrderCompleted";

// Redux
import { Provider as ReduxProvider } from "react-redux"
import configureStore from "../store/store";

const store = configureStore()

export default function RootNavigation() {

  const Stack = createStackNavigator()
  const screenOptions = { headerShown: false }

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Accueil" component={Home} />
          <Stack.Screen name="Restaurant" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}

