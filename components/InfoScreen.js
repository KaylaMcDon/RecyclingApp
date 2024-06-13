import React from "react";
import { View, Text, Button } from "react-native";
import { countyData, cityData } from "../data";
import { reqDivType, reqDivName } from "./Location";



export default function InfoScreen() {
  let text = "";

  if (reqDivType === "county") {
    text = countyData.find(x => x.CO_NAME === reqDivName)["Material Recovery Facility Name"];
  } else {
    text = cityData.find(x => x["Local Government Name"] === reqDivName)["Materials Recovery Facility Name"];
  };

  
  return (
    <View>
      <Text>City or County: {reqDivType}</Text>
      <Text>Name: {reqDivName}</Text>
      <Text>{text}</Text>
    
    </View>
  );
}