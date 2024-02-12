import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Greet({ name, image, type, hp, moves, weaknesses }) {
  const getTypeDetails = type => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.hp}>
          ❤️ {hp}
        </Text>
      </View>
      <Image resizeMode="contain" style={styles.image} source={image} />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>
            {emoji}
          </Text>
          <Text style={styles.typeEmoji}>
            {type}
          </Text>
        </View>
      </View>
      <View>
        <Text>
          Moves : {moves.join(", ")}
        </Text>
      </View>
      <View>
        <Text>
          Weaknesses : {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    margin: 20,
    borderWidth: 2,
    elevation: 5
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  hp: {
    fontSize: 15
  },
  image: {
    height: 200,
    width: "100%",
    marginTop: 20
  },
  typeContainer: {
    marginBottom: 40
  },
  badge: {
    flexDirection: "row",
    alignItems: "center"
  }
});
