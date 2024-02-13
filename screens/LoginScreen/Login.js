import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import Colors from "../../utils/Colors";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/login_home_service.jpg")}
      />
      <View style={styles.suncontainer}>
        <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>
          Let's Find Professional Cleaning and repair Service
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            textAlign: "center",
            marginTop: 20
          }}
        >
          Best App to find services near you which deliver you a professional
          services
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>{
            console.log("hello ")
        }}>
          <View >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: Colors.PRIMARY
              }}
            >
              Let's Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  image: {
    width: 250,
    height: 450,
    marginTop: 50,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 20
  },
  suncontainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginTop: 30
  }
});

export default Login;
