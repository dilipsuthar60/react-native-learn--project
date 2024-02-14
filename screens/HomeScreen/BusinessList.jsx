import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Heading from "../../components/Heading";
import BusinessListItem from "./BusinessListItem";

export default function BusinessList() {
  const [businessListData, setBusinessListData] = useState([]);
  const getBusinessList = async () => {
    const data = await GlobalApi.getBusinessList();
    setBusinessListData(data?.businessLists);
  };

  useEffect(() => {
    getBusinessList();
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"latest Business"} />
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={businessListData}
        renderItem={({ item, index }) => {
          return (
            <View style={{marginRight:10,marginTop:10}} >
              <BusinessListItem item={item}/>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
