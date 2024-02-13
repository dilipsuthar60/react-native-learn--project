import { View, Text, StatusBar } from "react-native";
import React from "react";
import Header from "./Header";
export default function HomeScreen() {
  return (
    <View>
      <StatusBar/>
      <Header />
    </View>
  );
}
