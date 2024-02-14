import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";

export default function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const fetchSliderData = async () => {
    const data = await GlobalApi.getSlider();
    console.log(data)
    setSliderData(data?.sliders);
  };

  useEffect(() => {
    fetchSliderData();
  }, []);

  return (
    <View style={styles.contanier}>
      <Text style={styles.heading}>Latest offers</Text>
      <FlatList
        data={sliderData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View key={item.id} style={{marginRight:20}}>
              <Image style={styles.sliderImage} source={{uri:item?.image?.url}}/>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {},
  heading: { fontSize: 18 },
  sliderImage:{
    width:260,
    height:150,
    objectFit:"contain",
    borderRadius:20
  }
});
