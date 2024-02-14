import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Heading from "../../components/Heading";
import Colors from "../../utils/Colors";

export default function Catagory() {
  const [categoryData, setCategoryData] = useState([]);
  const getCategoryData = async () => {
    const data = await GlobalApi.getCategory();
    console.log(data);
    setCategoryData(data?.categories);
  };

  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <View>
      <Heading text={"Category"} />
      <FlatList
        data={categoryData}
        numColumns={4}
        renderItem={({ item, index }) => {
          return (
            <View  style={styles.contanier}>
              <View style={styles.iconContanier}>
                <Image style={{height:40,width:40}} source={{uri:item?.icon?.url}}/>
              </View>
              <Text style={{fontWeight:"bold",marginTop:4}}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    contanier:{
        marginTop:10,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    iconContanier:{
        backgroundColor:Colors.LIGHT_GRAY,
        borderRadius:100,
        padding:10,
    }
});
