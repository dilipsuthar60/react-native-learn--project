import { View, Text, StatusBar } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Catagory from "./Catagory";
import BusinessList from "./BusinessList";
export default function HomeScreen() {
  return (
    <View>
      <StatusBar />
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
        <Catagory/>
        <BusinessList/>
      </View>
    </View>
  );
}
