import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
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
    FacilityObject = recyclingData.find(x => x["Facility Name"] === FacilityName);
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
    return(
      <View>
        <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>We unfortunantly do not have recycling data on this location</Text>
      </View>
      )
  } 
  
  if (FacilityObject !== null) {
    //const [errorMesage, setErrorMessage] = useState("");
    
    const [Plastic, setPlastic] = useState("More details");
    const [Metal, setMetal] = useState("More details");
    const [Paper, setPaper] = useState("More details");
    const [Glass, setGlass] = useState("More details");
    

    const OtherBanned = FacilityObject["Other banned"]
    
    
    
    //creates an item to display the nonrecyclable items found in "OtherBanned"
    
    const Item = ({words}) => {
      const [detailText, setdetailText] = useState("More details");
      return(<TouchableOpacity onPress={ () => {
          if (detailText === "More details") { 
          setdetailText("This item is not recyclable at this location")
        } else {
          setdetailText("More details")
        }}}>

        <View style={[styles.infoBox, { backgroundColor: "red" }]}>
          <Text style= {styles.title}>{words}</Text>
          <Text>{detailText}</Text>
        </View>
      </TouchableOpacity>)}
      

    return (
      <ScrollView>
        <Text>City or County: {reqDivType}</Text>
        <Text>Name: {reqDivName}</Text>
        <Text>{FacilityName}</Text>
        
        <TouchableOpacity onPress={ () => {
            if (Plastic === "More details") { 
            setPlastic(FacilityObject["Plastic"])
          } else {
            setPlastic("More details")
          }}}>

          <View style = {[styles.infoBox, {backgroundColor: "green"}]}>
            <Text style = {styles.title}>Plastic</Text>
            <Text>{Plastic}</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={ () => {
            if (Metal === "More details") { 
            setMetal(FacilityObject["Metal"])
          } else {
            setMetal("More details")
          }}}>
          
          <View style = {[styles.infoBox, {backgroundColor: "green"}]}>
            <Text style = {styles.title}>Metal</Text>
            <Text>{Metal}</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={ () => {
            if (Paper === "More details") { 
            setPaper(FacilityObject["Paper"])
          } else {
            setPaper("More details")
          }}}>

          <View style = {[styles.infoBox, {backgroundColor: "green"}]}>
            <Text style = {styles.title}>Paper</Text>
            <Text>{Paper}</Text>       
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={ () => {
            if (Glass === "More details") { 
            setGlass(FacilityObject["Glass"])
          } else {
            setGlass("More details")
          }}}>

          <View style = {[styles.infoBox, Glass!=="Glass is not recyclable at this location" && {backgroundColor: "green"} || {backgroundColor: "red"}]}>
            <Text style = {styles.title}>Glass</Text>
            <Text>{Glass}</Text>       
          </View>
        </TouchableOpacity>
        
        
        {
          OtherBanned.map( (item) => <Item words={item} key={item} /> )
        }
      
      </ScrollView>
    );
  }
}
/*
    const Item = ({words}) => (
      <View style={[styles.infoBox, { backgroundColor: "red" }]}>
        <Text style= {styles.title}>{words}</Text>
        
      </View>);
      */
  const styles = StyleSheet.create({
    infoBox: {
      margin: 20,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      justifyContent: "center",
      textAlign: "left",
      borderWidth: 1.3,
      borderColor: "black",
    },
    title: {
      fontSize: 24
    }
  } 
)