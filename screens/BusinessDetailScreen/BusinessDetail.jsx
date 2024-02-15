import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../utils/Colors";
import Heading from "../../components/Heading";
import BookingModal from "./BookingModal";

export default function BusinessDetail() {
  const params = useRoute().params;
  const [detail, setDetail] = useState(params?.detail);
  const [isReadMore, setIsReadMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    console.log("=========== ",detail.id);
  }, []);
  return (
    <View>
      <ScrollView style={{ height: "92%" }}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={26} color="white" />
          </TouchableOpacity>
          <Image style={styles.image} source={{ uri: detail?.image[0]?.url }} />
          <View style={styles.information}>
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>
              {detail?.name}
            </Text>
            <View style={styles.subInformation}>
              <Text style={{ color: Colors.PRIMARY, fontSize: 18 }}>
                {detail?.contant}
              </Text>
              <Text
                style={{
                  marginTop: 3,
                  fontSize: 12,
                  color: Colors.PRIMARY,
                  backgroundColor: "#D6A2E8",
                  padding: 5,
                  alignSelf: "flex-start",
                  borderRadius: 7
                }}
              >
                {detail?.category?.name}
              </Text>
            </View>
            <Text>{detail?.address}</Text>
            <View
              style={{
                borderWidth: 0.6,
                marginTop: 10,
                marginBottom: 10,
                borderColor: "gray"
              }}
            ></View>
            <View>
              <Heading text={"About"} />
              <Text
                style={{
                  color: "gray",
                  lineHeight: 20,
                  fontSize: 16,
                  marginTop: 10
                }}
                numberOfLines={isReadMore ? 3 : 50}
              >
                {detail?.about}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsReadMore((prev) => !prev);
                }}
              >
                <Text
                  style={{
                    marginTop: 5,
                    color: Colors.PRIMARY,
                    fontWeight: 500
                  }}
                >
                  {isReadMore ? "Read More" : "Read Less"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                marginTop: 10,
                marginBottom: 10,
                borderColor: "gray"
              }}
            ></View>
            <Heading text={"Photo"} />

            <FlatList
              data={detail?.image}
              numColumns={2}
              keyExtractor={(item, index) => item.image + index.toString()}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={{
                      flex: 1,
                      height: 120,
                      width: "100%",
                      borderRadius: 10,
                      margin: 5
                    }}
                    source={{ uri: item?.url }}
                  />
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{ display: "flex", flexDirection: "row", margin: 5, gap: 5 }}
      >
        {/* <TouchableOpacity style={styles.messageButton}>
          <Text
            style={{ textAlign: "center", color: Colors.PRIMARY, fontSize: 16 }}
          >
            Message
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
          style={styles.bookingButton}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
            Book
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={showModal} animationType="slide">
        <BookingModal
          hiddenModal={() => {
            setShowModal(false);
          }}
          businessId={detail.id}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  backButton: {
    position: "absolute",
    zIndex: 10,
    padding: 10
  },
  image: {
    width: "100%",
    height: 300
  },
  information: {
    display: "flex",
    gap: 5,
    padding: 15
  },
  subInformation: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center"
  },
  messageButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: Colors.PRIMARY,
    flex: 1
  },
  bookingButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY,
    flex: 1
  }
});
