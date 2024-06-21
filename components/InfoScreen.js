import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { countyData, cityData, recyclingData } from "../data";
import { reqDivType, reqDivName } from "./Location";
import { AntDesign } from '@expo/vector-icons';

export default function InfoScreen() {
  console.log(reqDivType, reqDivName);
  // 
  let regionInfo = {};
  let facilityInfo = null;

  if (reqDivType === "county") {
    regionInfo = countyData.find(x => x.CO_NAME === reqDivName);
  } else {
    regionInfo = cityData.find(x => x["Local Government Name"] === reqDivName);
  };
  facilityName = regionInfo["Material Recovery Facility Name"];

  if (facilityName.indexOf(" ") === -1) {
    facilityInfo = recyclingData.find(x => x["Facility Name"] === facilityName);
  } else if (facilityName.indexOf("Sonoco") >= 0) {
    facilityInfo = recyclingData[11];
  } else if (facilityName.indexOf("GFL") >= 0) {
    facilityInfo = recyclingData[2];
  } else if (facilityName.indexOf("High") >= 0) {
    facilityInfo = recyclingData[3];
  } else if (facilityName.indexOf("Meck") >= 0) {
    facilityInfo = recyclingData[4];
  } else if (facilityName.indexOf("North") >= 0) {
    facilityInfo = recyclingData[5];
  } else if (facilityName.indexOf("Conover") >= 0) {
    facilityInfo = recyclingData[8];
  } else if (facilityName.indexOf("Greensboro") >= 0) {
    facilityInfo = recyclingData[9];
  } else if (facilityName.indexOf("Mooresville") >= 0) {
    facilityInfo = recyclingData[10];
  } else if (facilityName.indexOf("TRC") >= 0) {
    facilityInfo = recyclingData[12];
  } else if (facilityName.indexOf("Waste") >= 0) {
    facilityInfo = recyclingData[13];
  } else if (facilityName === "No recycling program") {
    
    return (
      <View>
        <Text style={styles.pageTitle}>
          {reqDivType === "city" ? <Text>City of {reqDivName}</Text>
          : <Text>{reqDivName[0] + reqDivName.toLowerCase().slice(1)} County</Text>}
        </Text>
        <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>There is not a recycling program at this location</Text>
      </View>
    );
  } else if (facilityName === "Source separated") {
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

  if (facilityInfo !== null) {
    const [Plastic, setPlastic] = useState("More details...");
    const [Metal, setMetal] = useState("More details...");
    const [Paper, setPaper] = useState("More details...");
    const [Glass, setGlass] = useState("More details...");

    let OtherBanned = "";
    if (facilityInfo.hasOwnProperty("Other banned")) {
      OtherBanned = facilityInfo["Other banned"];
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
        <Text style={styles.pageSubtitle}>Recycling Facility: {facilityName}</Text>
        
        <TouchableOpacity
          style = {[styles.infoBox, {backgroundColor: "lawngreen"}, Plastic !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (Plastic === "More details...") { 
              setPlastic(facilityInfo["Plastic"]);
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
              setMetal(facilityInfo["Metal"]);
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
              setPaper(facilityInfo["Paper"]);
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
            facilityInfo["Glass"]!=="Glass is not recyclable at this location" ? {backgroundColor: "lawngreen"} : {backgroundColor: "red"},
          ]}
          onPress={ () => {
            if (Glass === "More details...") { 
              setGlass(facilityInfo["Glass"]);
            } else {
              setGlass("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              { facilityInfo["Glass"]!=="Glass is not recyclable at this location" ?
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