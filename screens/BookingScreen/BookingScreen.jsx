import { View, Text, FlatList, ActivityIndicator } from "react-native";
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
  };
  useEffect(() => {
    getUserBookingData();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>My Booking</Text>

      <View>
        {!bookingList.length ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            LisHeaderComponent={<View style={{ flex: 1 }}></View>}
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
            ListFooterComponent={<View style={{ flex: 1 }}></View>}
          />
        )}
      </View>
    </View>
  );
}
