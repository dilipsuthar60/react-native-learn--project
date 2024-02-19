import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import Heading from "../../components/Heading";

export default function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const fetchSliderData = async () => {
    const data = await GlobalApi.getSlider();
    console.log(data);
    setSliderData(data?.sliders);
  };

  useEffect(() => {
    fetchSliderData();
  }, []);

  return (
    <View style={styles.contanier}>
      <Heading text={"Latest offers for you"} />
      {!sliderData.length ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          LisHeaderComponent={<View style={{ flex: 1 }}></View>}
          data={sliderData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ marginRight: 20 }}>
                <Image
                  style={styles.sliderImage}
                  source={{ uri: item?.image?.url }}
                />
              </View>
            );
          }}
          ListFooterComponent={<View style={{ flex: 1 }}></View>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {},
  heading: { fontSize: 18, fontWeight: "600" },
  sliderImage: {
    width: 260,
    height: 150,
    objectFit: "contain",
    borderRadius: 20
  }
});
