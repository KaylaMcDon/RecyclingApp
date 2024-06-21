import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
// import { countyData, cityData, recyclingData } from "../data.js";
import { reqDivType, reqDivName } from "./Location";
import { AntDesign } from '@expo/vector-icons';

import data from "../data.json";
const cityData = data.cityData;
const countyData = data.countyData;
const recyclingData = data.recyclingData;

export default function InfoScreen() {
  console.log(reqDivType, reqDivName);

  let facilityInfo = null;
  let reqDivData;
  if (reqDivType === "county") {
    reqDivData = countyData.find(x => x.name === reqDivName);
  } else {
    reqDivData = cityData.find(x => x.name === reqDivName);
  };

  const facilityName = reqDivData.facilityName;
  if (facilityName.indexOf(" ") === -1) {
    facilityInfo = recyclingData.find(x => x.name === facilityName);
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
  } else {
    return (
      <View>
        <Text style={styles.pageTitle}>
          {reqDivType === "city" ?
          <Text>City of {reqDivName}</Text> :
          <Text>{reqDivName[0] + reqDivName.toLowerCase().slice(1)} County</Text>}
        </Text>
        {facilityName === "Source separated" ?
        <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>This location has a source separated recycling program.</Text> :
        <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>There is either not a recycling program at this location, or we have no informtion about it.</Text>}
      </View>
    );
  }

  if (facilityInfo !== null) {
    const [plastic, setPlastic] = useState("More details...");
    const [metal, setMetal] = useState("More details...");
    const [paper, setPaper] = useState("More details...");
    const [glass, setGlass] = useState("More details...");

    let bannedItems = facilityInfo["banned"];

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
          style = {[styles.infoBox, {backgroundColor: "lawngreen"}, plastic !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (plastic === "More details...") { 
              setPlastic(facilityInfo["plastic"]);
            } else {
              setPlastic("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              <AntDesign name="checkcircleo" size={24} color="black"/>
            </View>
            <Text style = {styles.title}>plastic</Text>
          </View>
          <Text>{plastic}</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style = {[styles.infoBox, {backgroundColor: "lawngreen"}, metal !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (metal === "More details...") { 
              setMetal(facilityInfo["metal"]);
            } else {
              setMetal("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              <AntDesign name="checkcircleo" size={24} color="black"/>
            </View>
            <Text style = {styles.title}>metal</Text>
          </View>
          <Text>{metal}</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style = {[styles.infoBox, {backgroundColor: "lawngreen"}, paper !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (paper === "More details...") { 
              setPaper(facilityInfo["paper"]);
            } else {
              setPaper("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              <AntDesign name="checkcircleo" size={24} color="black"/>
            </View>
            <Text style = {styles.title}>paper</Text>
          </View>
          <Text>{paper}</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style = {[
            styles.infoBox, glass !== "More details..." && {padding: 8},
            facilityInfo["glass"]!=="glass is not recyclable at this location" ? {backgroundColor: "lawngreen"} : {backgroundColor: "red"},
          ]}
          onPress={ () => {
            if (glass === "More details...") { 
              setGlass(facilityInfo["glass"]);
            } else {
              setGlass("More details...");
            }
          }}
        >
          <View style={styles.infoLabel}>
            <View style={{paddingRight: 5}}>
              { facilityInfo["glass"]!=="glass is not recyclable at this location" ?
              <AntDesign name="checkcircleo" size={24} color="black"/> :
              <AntDesign name="closecircleo" size={24} color="black"/> }
            </View>
            <Text style = {styles.title}>glass</Text>
          </View>
          <Text>{glass}</Text>
        </TouchableOpacity>
        
        {
          bannedItems.length() !== 0 && bannedItems.map( (item) => <BannedItem words={item} key={item}/> )
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