import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

export default function BusinessListItem({ item }) {
  return (
    <View style={styles.contanier}>
      <Image
        style={styles.image}
        source={{ uri: item?.image[Math.floor(Math.random() * 3)].url }}
      />
      <View>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{item?.name}</Text>
        <Text style={{marginTop:3,fontSize:12, color: Colors.PRIMARY, backgroundColor: "#D6A2E8" ,padding:3,alignSelf:"flex-start",borderRadius:7}}>
          {item?.category?.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: "white",
    padding: 7,
    borderRadius: 10
  },
  image: {
    height: 100,
    width: 160,
    borderRadius: 10
  }
});
