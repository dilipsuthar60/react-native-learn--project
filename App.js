import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Mystack from "./MyStack";
export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
