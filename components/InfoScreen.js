import React from "react";
import {View, Text, Button } from "react-native";
import { CountyFullData, CityFullData } from "../data";
import { reqDivType, reqCityName, reqCountyName } from "./Location";


export default function InfoScreen() {
  
  return (
    <View>
      <Text>City or County: {reqDivType}</Text>
      <Text>Name: {reqDivType === "city" ? reqCityName : reqCountyName}</Text>
    </View>
  );
}