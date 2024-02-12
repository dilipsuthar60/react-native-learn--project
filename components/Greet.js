import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

export default function Greet({style, children}) {
  return (
    <View style={[styles.box,style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
