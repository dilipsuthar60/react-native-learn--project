import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function BusinessItem({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("business-detail", { detail: item });
      }}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: item?.image[0]?.url }} />
      <View style={styles.subcontainer}>
        <Text style={{ fontSize: 16, color: "gray" }}>{item.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.address}</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>{item.contant}</Text>
      </View>
    </TouchableOpacity>
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
