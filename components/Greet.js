import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Greet({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>
      <Image resizeMode="contain" style={styles.image} source={image}/>
      <View><Text>{type}</Text>
      </View>
      <View><Text>Moves : {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weaknesses : {weaknesses.join(", ")}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    margin: 15,
    borderWidth: 2,
    elevation: 5
  },
  container:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  name:{
    fontSize:18,
    fontWeight:'bold'
  },
  hp:{
    fontSize:15
  },
  image:{
   height:200,
   width:"100%",
   marginTop:20
  }
});
