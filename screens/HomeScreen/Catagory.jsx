import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";

export default function Catagory() {
  const [categoryData, setCategoryData] = useState([]);
  const fetchCategoryData = async () => {
    const data = await GlobalApi.getCategory();
    console.log(data);
    setCategoryData(data?.categories);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);
  return (
    <View>
      <Text>Catagory</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
