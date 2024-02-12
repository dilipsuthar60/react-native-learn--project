import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
  TextInput,
  Button
} from "react-native";
import Greet from "./components/Greet";
import pokemonList from "./data.json";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  const [form, setForm] = useState({
    userName: "",
    password: ""
  });
  const [error, setError] = useState({});
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"]
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"]
  };
  const formValidation = () => {
    let error = {};
    if (!form.userName) error.userName = "user name is required.";
    if (!form.password) error.password = "password is required.";
    setError(error);
    return Object.keys(error).length === 0;
  };
  const handleSubmit = () => {
    console.log(form);

    if (formValidation()) {
      setForm({ userName: "", password: "" });
      setError({});
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={form.userName}
            style={styles.input}
            placeholder="Enter your Username"
            onChangeText={text => {
              setForm({ ...form, userName: text });
            }}
          />
          {error.userName
            ? <Text style={styles.error}>
                {error.userName}
              </Text>
            : null}
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={form.password}
            style={styles.input}
            placeholder="Enter your Password"
            secureTextEntry
            onChangeText={text => {
              setForm({ ...form, password: text });
            }}
          />
          {error.password
            ? <Text style={styles.error}>
                {error.password}
              </Text>
            : null}
          <Button
            title="Login"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
        <Greet {...charmanderData} />
        <Greet {...squirtleData} />
        <Greet {...pikachuData} />
        <Greet {...bulbasaurData} />
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  console.log(item);
                }}
              >
                <View key={item.id} style={styles.list}>
                  <Text style={styles.itemName}>
                    {item.name}
                  </Text>
                  <Text style={styles.itemType}>
                    {item.type}
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 25
  },
  list: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    margin: 10,
    padding: 8,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  itemName: {
    fontSize: 20,
    fontWeight: "700"
  },
  itemType: {
    fontSize: 16
  },
  form: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    margin: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: "bold"
  },
  input: {
    height:45,
    borderColor: "gray",
    borderWidth: 1.5,
    marginBottom: 8,
    borderRadius: 5,
    padding: 10
  },
  error: {
    color: "red"
  }
});
