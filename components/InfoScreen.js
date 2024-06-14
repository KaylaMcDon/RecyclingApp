import React from "react";
import { View, Text, Button, StyleSheet, FlatList, ScrollView } from "react-native";
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
  
  
  
  //creates an item to display the nonrecyclable items found in "OtherBanned"
  const Item = ({words}) => (
    <View>
      <Text style={styles.infoBox}>{words}</Text>
    </View>);

  return (
    <ScrollView>
      <Text>City or County: {reqDivType}</Text>
      <Text>Name: {reqDivName}</Text>
      <Text>{FacilityName}</Text>
      <Text style = {styles.infoBox}>Plastic: {Plastic}</Text>
      <Text style = {styles.infoBox}>Metal: {Metal}</Text>
      <Text style = {styles.infoBox}>Glass: {Glass}</Text>
      <Text style = {styles.infoBox}>Paper: {Paper}</Text>
      {
      OtherBanned.map((item)=> <Item words={item} />)
      }

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoBox: {
    margin: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    justifyContent: "center"
  }
})