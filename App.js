import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Login from "./screens/LoginScreen/Login";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }
};

function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_aG9seS1sYW1iLTkyLmNsZXJrLmFjY291bnRzLmRldiQ">
      <SignedIn>
        <Text>You are Signed iyn</Text>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
  );
}
export default App;
const styles = StyleSheet.create({});
