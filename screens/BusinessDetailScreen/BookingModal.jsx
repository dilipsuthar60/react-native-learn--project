import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ToastAndroid
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../utils/Colors";
import Heading from "../../components/Heading";
import GlobalApi from "../../utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import moment from "moment";

export default function BookingModal({ hiddenModal, businessId }) {
  const { user } = useUser();
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedDate(date);
  };
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      if (i == 12) {
        timeList.push({ time: i + ":00 PM" });
      } else {
        timeList.push({ time: i + ":00 AM" });
      }
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({ time: i + ":00 PM" });
    }
    setTimeList(timeList);
  };

  const createBooking = async () => {
    if (!selectedDate || !selectedTime) {
      ToastAndroid.show("Please Select Time and Date", ToastAndroid.LONG);
      return;
    }
    const data = {
      name: user?.fullName,
      email: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date:moment(selectedDate).format('DD-MM-YYYY'),
      business: businessId
    };
    console.log(data);
    const response = await GlobalApi.createBooking(data);
    ToastAndroid.show("Booking Created Successfully", ToastAndroid.LONG);
    hiddenModal();
  };

  useEffect(() => {
    getTime();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginBottom: 20
        }}
        onPress={() => {
          hiddenModal();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{ fontWeight: "600", fontSize: 18 }}>Booking</Text>
      </TouchableOpacity>
      <Heading text={"Select Date"} />
      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={onDateChange}
          width={350}
          minDate={Date.now()}
          todayBackgroundColor={"black"}
          todayTextStyle={{ color: "white" }}
          selectedDayColor={Colors.PRIMARY}
          selectedDayTextColor="white"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Heading text={"Select Time Slot"} />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={timeList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedTime(item.time);
                }}
              >
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity onPress={() => createBooking()}>
        <Text style={styles.confromButton}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  confromButton: {
    backgroundColor: Colors.PRIMARY,
    color: "white",
    padding: 12,
    borderRadius: 100,
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "500"
  },
  calendarContainer: {
    marginTop: 10,
    width: 350,
    backgroundColor: "#f5f6fa",
    borderRadius: 20,
    padding: 10,
    borderWidth:1,
    elevation:7,
  },
  unSelectedTime: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.PRIMARY,
    color: Colors.PRIMARY,
    padding: 10,
    margin: 5,
    marginTop: 10
  },
  selectedTime: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: Colors.PRIMARY,
    color: "white",
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    margin: 5,
    marginTop: 10
  }
});
