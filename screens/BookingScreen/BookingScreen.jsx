import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "../HomeScreen/BusinessListItem";
import BusinessItem from "../BusinessListByCategoryScreen/BusinessItem";

export default function BookingScreen() {
  const [bookingList, setBookingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const getUserBookingData = async () => {
    setIsLoading(true);
    const data = await GlobalApi.getUserBooking(
      user?.primaryEmailAddress?.emailAddress
    );
    setIsLoading(false);
    setBookingList(data?.bookings);
    console.log("======", data?.bookings);
  };
  useEffect(() => {
    getUserBookingData();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>My Booking</Text>

      <View>
        <FlatList
          onRefresh={() => {
            getUserBookingData();
          }}
          refreshing={isLoading}
          data={bookingList}
          renderItem={({ item }) => {
            return (
              <BusinessItem
                time={item.time}
                progress={item.progress}
                date={item.date}
                item={item?.businessList}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
