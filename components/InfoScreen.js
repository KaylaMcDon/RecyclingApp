import React, { Component } from "react";
import {View, Text } from "react-native";
import { reqDivType, reqCityName, reqCountyName } from "./Location";


export default function InfoScreen() {
  return (
    <View>
      <Text>City or County: {reqDivType}</Text>
      <Text>Name: {reqDivType === "city" ? reqCityName : reqCountyName}</Text>
    </View>
  );
}