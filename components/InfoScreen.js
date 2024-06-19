import React from "react";
import {View, Text, } from "react-native";
import { reqDivType, reqDivName, } from "./Location";


export default function InfoScreen() {
  
  return (
    <View>
      <Text>City or County: {reqDivType}</Text>
      <Text>Name: {reqDivName}</Text>
    </View>
  );
}