import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import Colors from "../../utils/Colors";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google"});
  const onPress = React.useCallback(async () => {
    console.log("press");
    try {
      const {
        createdSessionId,
        signIn,
        signUp,
        setActive
      } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  },[])
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/login.png")}
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
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: Colors.PRIMARY
              }}
            >
              Let's Get Started.
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
