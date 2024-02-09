import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Greet({ name }) {
  const [text, setText] = useState(name);
  const handleSetText = () => {
    let length = 4;
    let str = "qwertyuioplkjhgfdsazxcvbnm";
    let curr = "";
    for (let i = 0; i < length; i++) {
      let val = Math.floor(Math.random() * length);
      curr += str[val];
    }
    setText(curr);
  };
  return (
    <View>
      <Button title="press" onPress={handleSetText} />
      <Text>
        hello , {text}
      </Text>
    </View>
  );
}
