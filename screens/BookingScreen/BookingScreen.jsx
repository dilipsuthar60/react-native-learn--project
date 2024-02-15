import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";

export default function BookingScreen() {
  const [bookingList, setBookingList] = useState([]);
  const getUserBookingData = async () => {
    const data = await GlobalApi.getUserBooking();
    console.log("🚀 ~ getUserBookingData ~ data:", data)
    setBookingList(data);
  };
  useEffect(() => {
    getUserBookingData();
  }, []);
  return (
    <View style={{ padding: 25 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", fontFamily: "robot" }}>
        My Booking
      </Text>
      
    </View>
  );
}
