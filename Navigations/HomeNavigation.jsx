import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BusinessListByCategory from "../screens/BusinessListByCategoryScreen/BusinessListByCategory";
import BusinessDetail from "../screens/BusinessDetailScreen/BusinessDetail";

const Stack = createStackNavigator(); // stack for navigation 

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-list" component={BusinessListByCategory} />
      <Stack.Screen name="business-detail" component={BusinessDetail}  />
    </Stack.Navigator>
  );
}
