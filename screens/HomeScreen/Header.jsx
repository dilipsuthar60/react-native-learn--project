import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { useClerk, useUser, useAuth } from "@clerk/clerk-expo";
import Colors from "../../utils/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Header() {
  const { user, isLoading } = useUser();
  const { isLoaded, signOut } = useAuth();
  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileMain}>
          <View style={styles.profileContainer}>
            <Image style={styles.userImage} source={{ uri: user?.imageUrl }} />
            <View>
              <Text style={{ color: "white" }}>Welcome</Text>
              <Text style={{ color: "white", fontSize: 18 }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome5  name="bookmark" size={24} color="white" />
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.textInput} placeholder="Search" />
          <AntDesign
            style={styles.search}
            name="search1"
            size={24}
            color="black"
          />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom:15,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  profileMain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 99
  },
  textInput: {
    backgroundColor: "white",
    padding: 5,
    width: "85%",
    borderRadius: 10,
    marginTop: 10,
    fontSize: 16
  },
  searchContainer: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20
  },
  search: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    color: Colors.PRIMARY
  }
});
