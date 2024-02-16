import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import Colors from "../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const { user } = useUser();
  const { isLoaded,signOut } = useAuth();
  const navigation = useNavigation();
  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      navigate: "home"
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
      navigate: "booking"
    },
    {
      id: 3,
      name: "Logout",
      icon: "log-out",
      navigate: "login"
    }
  ];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.profile}>Profile</Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            padding: 10,
            justifyContent: "center"
          }}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              marginBottom: 5
            }}
            source={{ uri: user?.imageUrl }}
          />
          <Text
            style={{
              marginTop: 6,
              fontSize: 20,
              color: "white",
              fontWeight: "600"
            }}
          >
            {user.fullName}
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 14,
              color: "white"
            }}
          >
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 100, marginHorizontal: 100 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  item.id !== 3
                    ? navigation.navigate(item.navigate)
                    : signOut();
                }}
                style={styles.profileMenu}
              >
                <Ionicons name={item.icon} size={24} color={Colors.PRIMARY} />
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.PRIMARY
  },
  profile: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff"
  },
  profileMenu: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 20
  }
});
