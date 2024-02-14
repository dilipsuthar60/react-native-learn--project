import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import GlobalApi from "../../../utils/GlobalApi";
import BusinessItem from "./BusinessItem";

export default function BusinessListByCategory() {
  const route = useRoute().params;
  const navigation = useNavigation();

  const [businessListData, setBusinessListData] = useState([]);
  const getBusinessList = async (route) => {
    console.log(route);
    const data = await GlobalApi.getBusinessCategoryList(route.category);
    console.log(data);
    setBusinessListData(data?.businessLists);
  };

  useEffect(() => {
    getBusinessList(route);
  }, []);
  return (
    <View style={styles.contanier}>
      <TouchableOpacity
      style={{display:"flex",flexDirection:"row",gap:10}}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{fontWeight:"600"}}>{route.category}</Text>
      </TouchableOpacity>
      <FlatList
      data={businessListData}
      renderItem={({item,index})=>{
        return <BusinessItem item={item}/>
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    padding: 20,
    paddingTop:30
  }
});
