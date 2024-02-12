import React, { useState } from "react";
import { Text, View, StyleSheet,SafeAreaView, ScrollView} from "react-native";
import Greet from "./components/Greet";
import pokemonList from './data.json'
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

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Greet {...charmanderData}/>
      <Greet {...squirtleData}/>
      <Greet {...pikachuData}/>
      <Greet {...bulbasaurData}/>
      {
        pokemonList.map((item)=>{
          return <View style={styles.list}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
        })
      }
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop:25
  },
  list:{
    backgroundColor:"white",
    borderWidth:2,
    borderColor:"black",
    borderStyle:"solid",
    margin:10,
    padding:8,
    borderRadius: 10,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around"
  }
});
