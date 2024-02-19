import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Heading from "../../components/Heading";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Catagory() {
  const [categoryData, setCategoryData] = useState([]);
  const navigation = useNavigation();
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
        LisHeaderComponent={<View style={{ flex: 1 }}></View>}
        data={categoryData}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.push("business-list", { category: item?.name });
              }}
              style={styles.contanier}
            >
              <View style={styles.iconContanier}>
                <Image
                  style={{ height: 40, width: 40 }}
                  source={{ uri: item?.icon?.url }}
                />
              </View>
              <Text style={{ fontWeight: "bold", marginTop: 4 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={<View style={{ flex: 1 }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  iconContanier: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 100,
    padding: 10
  }
});
