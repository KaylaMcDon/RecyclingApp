import React from "react";
import { Button, View, Text } from "react-native";


export default function location({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to info"
        onPress={() => navigation.navigate("Info")}
      />
    </View>
  );
}