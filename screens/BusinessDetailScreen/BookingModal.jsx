import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BookingModal({showModal}) {
  return (
    <View>
      <TouchableOpacity
      style={{display:"flex",flexDirection:"row",gap:10}}
        onPress={() => {
          showModal()
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{fontWeight:"600"}}>Booking</Text>
      </TouchableOpacity>
      <Text>BookingModal</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
