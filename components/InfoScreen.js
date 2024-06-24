import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { reqDivType, reqDivName } from "./Location";
import { AntDesign } from '@expo/vector-icons';

import data from "../data.json";
const cityData = data.cityData;
const countyData = data.countyData;
const recyclingData = data.recyclingData;

export default function InfoScreen() {
  const getFacilityInfo = function(divType, divName) {
    let facilityInfo = null;
    let divData;
    if (divType === "county") {
      divData = countyData.find(x => x.name === divName);
    } else {
      divData = cityData.find(x => x.name === divName);
    };

    let facilityName = divData.facilityName;
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
    } else if (facilityName === "No recycling program") {
      [facilityName, facilityInfo] = getFacilityInfo("county", divData.surroundingCounty);
    } else {
      return [facilityName, null];
    }
    return [facilityName, facilityInfo];
  }
  
  const [facilityName, facilityInfo] = getFacilityInfo(reqDivType, reqDivName);
  if (facilityInfo === null) {
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

  const [plastic, setPlastic] = useState("More details...");
  const [metal, setMetal] = useState("More details...");
  const [paper, setPaper] = useState("More details...");
  const [glass, setGlass] = useState("More details...");
  const [banned, setBanned] = useState("");

  const bannedItems = facilityInfo["banned"];

  const BannedItem = ({words}) => {
    const [detailText, setdetailText] = useState("More details...");
    const notPresent = words.split("(");
    if (notPresent.length !== 1) {
      return (
        <TouchableOpacity
          style={[styles.bannedBox, detailText !== "More details..." && {padding: 8}]}
          onPress={ () => {
            if (detailText === "More details...") { 
              setdetailText(notPresent[1].slice(0, notPresent[1].length-1));
            } else {
              setdetailText("More details...");
            }
          }}
        >
          <Text style = {styles.title}>{notPresent[0]}</Text>
          <Text>{detailText}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View
          style={styles.bannedBox}
        >
          <Text style = {styles.title}>{notPresent[0]}</Text>
        </View>
      );
    }
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
          <Text style = {styles.title}>Plastic</Text>
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
          <Text style = {styles.title}>Metal</Text>
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
          <Text style = {styles.title}>Paper</Text>
        </View>
        <Text>{paper}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style = {[
          styles.infoBox, glass !== "More details..." && {padding: 8},
          facilityInfo["glass"]!=="Glass is not recyclable at this location" ? {backgroundColor: "lawngreen"} : {backgroundColor: "red"},
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
            { facilityInfo["glass"]!=="Glass is not recyclable at this location" ?
            <AntDesign name="checkcircleo" size={24} color="black"/> :
            <AntDesign name="closecircleo" size={24} color="black"/> }
          </View>
          <Text style = {styles.title}>Glass</Text>
        </View>
        <Text>{glass}</Text>
      </TouchableOpacity>
      
      {bannedItems.length !== 0 && <TouchableOpacity
        style={[
          styles.bannedBox,
          {borderTopLeftRadius: 8, borderTopRightRadius: 8},
          banned === "" ? { borderRadius: 8 } : { padding: 8 }
        ]}
        onPress={() => {
          if (banned === "") {
            setBanned(bannedItems.map( (item) => <BannedItem words={item} key={item}/> ));
          } else {
            setBanned("");
          }
        }}
      >
        <View style={styles.infoLabel}>
          <View style={{paddingRight: 5}}>
            <AntDesign name="closecircleo" size={24} color="black"/>
          </View>
          <Text style={styles.title}>Banned Items</Text>
        </View>
        {banned === "" && <Text>More details...</Text>}
      </TouchableOpacity>}
      {banned !== "" ? banned : <View></View>}
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
      paddingTop: 8,
      justifyContent: "center",
      textAlign: "left",
      borderWidth: 1.3,
      borderColor: "black",
    },
    bannedBox: {
      backgroundColor: "red",
      marginHorizontal: 20,
      borderColor: 'gray',
      borderWidth: 0.5,
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