import React, { useState } from "react";
import {
  StatusBar,
  ActivityIndicator,
  Text,
  View,
  Button,
  Modal,
  Alert
} from "react-native";
import Greet from "./components/Greet";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "plum",
        paddingTop: 50,
        borderWidth: 6,
        borderStyle: "solid",
        borderColor: "blue",
        height:300,
        marginTop:50
      }}
    >
      <Greet style={{ backgroundColor: "red", margin: 10 }} children={"box1"} />
      <Greet
        style={{ backgroundColor: "blue", margin: 10 }}
        children={"box2"}
      />
    </View>
  );
}
