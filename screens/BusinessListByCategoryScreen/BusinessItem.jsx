import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function BusinessItem({
  time = null,
  progress = null,
  date = null,
  item
}) {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("business-detail", { detail: item });
      }}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: item?.image[0]?.url }} />
      <View style={styles.subcontainer}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{item?.name}</Text>
        <Text style={{ fontSize: 16, color: "#747d8c" }}>{item?.address}</Text>
        {progress && (
          <Text
            style={{
              fontSize: 16,
              color: Colors.PRIMARY,
              backgroundColor: "#D6A2E8",
              padding: 5,
              alignSelf: "flex-start",
              borderRadius: 10
            }}
          >
            {progress}
          </Text>
        )}
        <View style={styles.timeInformation}>
          {date && (
            <AntDesign name="calendar" size={24} color={Colors.PRIMARY} />
          )}
          {date && <Text>{date}</Text>}
          {time && <Text>{time}</Text>}
        </View>
        <Text style={{ fontSize: 14, color: "#7f8c8d" }}>
          contact : {item?.contant}
        </Text>
      </View>
    </TouchableOpacity>
    </ScrollView>
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
    gap: 3
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 15
  },
  timeInformation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7
  }
});
