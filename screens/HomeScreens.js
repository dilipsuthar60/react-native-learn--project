import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>MyComponent</Text>
      <Button
        title="About page"
        onPress={() => {
          navigation.navigate("About", { name: "dilip suthar pavta" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default HomeScreens;
