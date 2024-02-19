import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Heading from "../../components/Heading";
import BusinessListItem from "./BusinessListItem";
import { useNavigation } from "@react-navigation/native";

export default function BusinessList() {
  const [businessListData, setBusinessListData] = useState([]);
  const navigation = useNavigation();
  const getBusinessList = async () => {
    const data = await GlobalApi.getBusinessList();
    setBusinessListData(data?.businessLists);
  };

  useEffect(() => {
    getBusinessList();
  }, []);

  return (
    <View style={{ marginTop: 25 }}>
      <Heading text={"Latest Business"} />
      <FlatList
        LisHeaderComponent={<View style={{ flex: 1 }}></View>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={businessListData}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("business-detail", { detail: item });
              }}
              key={item.id}
              style={{ marginRight: 10, marginTop: 15 }}
            >
              <BusinessListItem item={item} />
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={<View style={{ flex: 1 }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
