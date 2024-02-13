import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Login from "./screens/LoginScreen/Login";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_aG9seS1sYW1iLTkyLmNsZXJrLmFjY291bnRzLmRldiQ">
      <View>
        <Login />
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({});
