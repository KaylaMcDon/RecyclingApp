import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { countyData, cityData, recyclingData } from "../data";
import { reqDivType, reqDivName } from "./Location";
import { AntDesign } from '@expo/vector-icons';

export default function InfoScreen() {
  console.log(reqDivType, reqDivName);
  //Takes the name of the facility from the Location page and determines which Facility object it is in data.js.
  let FacilityName = "";
  let FacilityObject = {};

  if (!(Object.hasOwn(FacilityObject, 'Materials Recovery Facility Name') || Object.hasOwn(FacilityObject, 'Material Recovery Facility Name'))) {
    //Find name of facility if facility has name, and then finds the object in data.js with that name
    if (reqDivType === "county") {
      FacilityName = countyData.find(x => x.CO_NAME === reqDivName)["Material Recovery Facility Name"];
    } else {
      FacilityName = cityData.find(x => x["Local Government Name"] === reqDivName)["Materials Recovery Facility Name"];
    };

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
    } else if (FacilityName === "No recycling program") {
      return (
        <View>
          <Text style={styles.pageTitle}>
            {reqDivType === "city" ? <Text>City of {reqDivName}</Text>
            : <Text>{reqDivName[0] + reqDivName.toLowerCase().slice(1)} County</Text>}
          </Text>
          <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>There is not a recycling program at this location</Text>
        </View>
      );
    } else if (FacilityName === "Source separated") {
      return (
        <View>
          <Text style={styles.pageTitle}>
            {reqDivType === "city" ? <Text>City of {reqDivName}</Text>
            : <Text>{reqDivName[0] + reqDivName.toLowerCase().slice(1)} County</Text>}
          </Text>
          <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>While your location does have a recycling program, we unfortunantly don't know what items it can and cannot take.</Text>
        </View>
      );
    }
  } else {
    return (
      <View>
        <Text style={styles.pageTitle}>
          {reqDivType === "city" ? <Text>City of {reqDivName}</Text>
           : <Text>{reqDivName[0] + reqDivName.toLowerCase().slice(1)} County</Text>}
        </Text>
        <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>We unfortunantly do not have recycling data on this location.</Text>
      </View>
      );
  }

  if (FacilityObject !== null) {
    const [Plastic, setPlastic] = useState("More details...");
    const [Metal, setMetal] = useState("More details...");
    const [Paper, setPaper] = useState("More details...");
    const [Glass, setGlass] = useState("More details...");

    let OtherBanned = "";
    if (FacilityObject.hasOwnProperty("Other banned")) {
      OtherBanned = FacilityObject["Other banned"];
    }

    const BannedItem = ({words}) => {
      const [detailText, setdetailText] = useState("More details...");
      let notPresent = words.split("(");
      return (
        <TouchableOpacity
          style={[styles.infoBox, { backgroundColor: "red" }, detailText !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (detailText === "More details...") { 
              if (notPresent.length === 1) {
                setdetailText("This item is not recyclable at this location");
              } else {
                setdetailText(`${notPresent[1].slice(0, notPresent[1].length-1)} \nThis item is not recyclable at this location`);
              }
            } else {
              setdetailText("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              <AntDesign name="closecircleo" size={24} color="black"/>
            </View>
            <Text style = {styles.title}>{words.split('(')[0]}</Text>
          </View>
          <Text>{detailText}</Text>
        </TouchableOpacity>
      );
    }
      
    return (
      <ScrollView>
        <Text style={styles.pageTitle}>
          {reqDivType === "city" ? <Text>City of {reqDivName}</Text>
           : <Text>{reqDivName[0] + reqDivName.toLowerCase().slice(1)} County</Text>}
        </Text>
        <Text style={styles.pageSubtitle}>Recycling Facility: {FacilityName}</Text>
        
        <TouchableOpacity
          style = {[styles.infoBox, {backgroundColor: "lawngreen"}, Plastic !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (Plastic === "More details...") { 
              setPlastic(FacilityObject["Plastic"]);
            } else {
              setPlastic("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              <AntDesign name="checkcircleo" size={24} color="black"/>
            </View>
            <Text style = {styles.title}>Plastic</Text>
          </View>
          <Text>{Plastic}</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style = {[styles.infoBox, {backgroundColor: "lawngreen"}, Metal !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (Metal === "More details...") { 
              setMetal(FacilityObject["Metal"]);
            } else {
              setMetal("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              <AntDesign name="checkcircleo" size={24} color="black"/>
            </View>
            <Text style = {styles.title}>Metal</Text>
          </View>
          <Text>{Metal}</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style = {[styles.infoBox, {backgroundColor: "lawngreen"}, Paper !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (Paper === "More details...") { 
              setPaper(FacilityObject["Paper"]);
            } else {
              setPaper("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              <AntDesign name="checkcircleo" size={24} color="black"/>
            </View>
            <Text style = {styles.title}>Paper</Text>
          </View>
          <Text>{Paper}</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style = {[
            styles.infoBox, Glass !== "More details..." && {padding: 8},
            FacilityObject["Glass"]!=="Glass is not recyclable at this location" ? {backgroundColor: "lawngreen"} : {backgroundColor: "red"},
          ]}
          onPress={ () => {
            if (Glass === "More details...") { 
              setGlass(FacilityObject["Glass"]);
            } else {
              setGlass("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              { FacilityObject["Glass"]!=="Glass is not recyclable at this location" ?
              <AntDesign name="checkcircleo" size={24} color="black"/> :
              <AntDesign name="closecircleo" size={24} color="black"/> }
            </View>
            <Text style = {styles.title}>Glass</Text>
          </View>
          <Text>{Glass}</Text>
        </TouchableOpacity>
        
        {
          OtherBanned !== "" && OtherBanned.map( (item) => <BannedItem words={item} key={item}/> )
        }
      
      </ScrollView>
    );
  }
}

  const styles = StyleSheet.create({
    infoBox: {
      margin: 20,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingTop: 8,
      justifyContent: "center",
      textAlign: "left",
      borderWidth: 1.3,
      borderColor: "black",
    },
    infoLabel: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontSize: 24
    },
    pageTitle: {
      fontSize: 30,
      padding: 10,
      textAlign: "center",
    },
    pageSubtitle: {
      fontSize: 20,
      textAlign: "center",
    }
  } 
)