import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Greet({ name }) {
  const [text, setText] = useState(name);
  const handleSetText = () => {
    let length = 4;
    let str = "qwertyuioplkjhgfdsazxcvbnm";
    let curr = "";
    for (let i = 0; i < length; i++) {
      let val = Math.floor(Math.random() * length);
      curr += str[val];
    }
    setText(curr);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text>box1</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text>box2</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid",
  },
  box: {
    height: "25%",
    width: "25%",
    margin: 5,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid"
  },
  box1: {
    backgroundColor: "green"
  },
  box2: {
    backgroundColor: "red"
  }
});
