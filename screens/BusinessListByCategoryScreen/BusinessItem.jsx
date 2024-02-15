import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function BusinessItem({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item?.image[0]?.url }}
      />
      <View style={styles.subcontainer}>
        <Text style={{ fontSize: 16, color: "gray" }}>{item.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.address}</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>{item.contant}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 7,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10
  },
  subcontainer: {
    display: "flex",
    gap: 5
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 15
  }
});
