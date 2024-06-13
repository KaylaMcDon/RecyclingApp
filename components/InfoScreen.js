import React from "react";
import { View, Text, Button } from "react-native";
import { countyData, cityData, recyclingData } from "../data";
import { reqDivType, reqDivName } from "./Location";



export default function InfoScreen() {
  /*
  Need functionality
  No recycling program
  Source separated
  “blank”
  */
  

  //Takes the name of the facility from the Location page and determines which Facility object it is in data.js.
  let FacilityName = "";
  
  if (reqDivType === "county") {
    FacilityName = countyData.find(x => x.CO_NAME === reqDivName)["Material Recovery Facility Name"];
  } else {
    FacilityName = cityData.find(x => x["Local Government Name"] === reqDivName)["Materials Recovery Facility Name"];
  };
  

  let FacilityObject = null;
  if (FacilityName.indexOf(" ") === -1) {
    FacilityObject = recyclingData.find(x => x["Facility Name".toUpperCase()] === FacilityName);
  } else if (FacilityName.indexOf("Sonoco") >= 0) {
    FacilityObject = recyclingData[11];
  } else if (FacilityName.indexOf("GFL") >= 0) {
    FacilityObject = recyclingData[2];
  } else if (FacilityName.indexOf("High") >= 0) {
    FacilityObject = recyclingData[3];
  } else if (FacilityName.indexOf("Meck") >= 0) {
    FacilityObject = recyclingData[4];
  } else if (FacilityName.indexOf("North") >= 0) {
    FacilityObject = recyclingData[5];
  } else if (FacilityName.indexOf("Conover") >= 0) {
    FacilityObject = recyclingData[8];
  } else if (FacilityName.indexOf("Greensboro") >= 0) {
    FacilityObject = recyclingData[9];
  } else if (FacilityName.indexOf("Mooresville") >= 0) {
    FacilityObject = recyclingData[10];
  } else if (FacilityName.indexOf("TRC") >= 0) {
    FacilityObject = recyclingData[12];
  } else if (FacilityName.indexOf("Waste") >= 0) {
    FacilityObject = recyclingData[13];
  } else {
    //allow for countys/cities with no recycling info
  } 
  
    let Plastic = FacilityObject["Plastic"]
    let Metal = FacilityObject["Metal"]
    let Glass = FacilityObject["Glass"]
    let Paper = FacilityObject["Paper"]
    let OtherBanned = FacilityObject["Other banned"]

  return (
    <View>
      <Text>City or County: {reqDivType}</Text>
      <Text>Name: {reqDivName}</Text>
      <Text>{FacilityName}</Text>
      <Text>plastic: {Plastic}</Text>
      <Text>metal: {Metal}</Text>
      <Text>glass: {Glass}</Text>
      <Text>paper: {Paper}</Text>
      <Text>other banned: {OtherBanned}</Text>
    
    </View>
  );
}