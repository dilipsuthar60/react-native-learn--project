import React, { useState } from "react";
import { Text, View, StyleSheet,SafeAreaView, ScrollView} from "react-native";
import Greet from "./components/Greet";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const charmanderData1 = {
    name: "Charmander",
    image: require("./assets/bulbasaur.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Greet {...charmanderData}/>
      <Greet {...charmanderData1}/>
      <Greet {...charmanderData}/>
      <Greet {...charmanderData}/>
      <Greet {...charmanderData}/>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop:25
  }
});
