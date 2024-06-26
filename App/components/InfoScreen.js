import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Platform, Linking, } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { cityData, countyData, recyclingData } from "../data.json"
import { useRoute } from "@react-navigation/native";

export default function InfoScreen({ navigation }) {
  const route = useRoute();

  const getFacilityInfo = function(divType, divName) {
    let divData;
    if (divType === "county") {
      divData = countyData.find(x => x.name === divName);
    } else {
      divData = cityData.find(x => x.name === divName);
    };

    let facilityInfo;
    if (divData.facilityName.indexOf(" ") === -1) {
      facilityInfo = recyclingData.find(x => x.name === divData.facilityName);
    } else if (divData.facilityName.indexOf("Sonoco") >= 0) {
      facilityInfo = recyclingData[11];
    } else if (divData.facilityName.indexOf("GFL") >= 0) {
      facilityInfo = recyclingData[2];
    } else if (divData.facilityName.indexOf("High") >= 0) {
      facilityInfo = recyclingData[3];
    } else if (divData.facilityName.indexOf("Meck") >= 0) {
      facilityInfo = recyclingData[4];
    } else if (divData.facilityName.indexOf("North") >= 0) {
      facilityInfo = recyclingData[5];
    } else if (divData.facilityName.indexOf("Conover") >= 0) {
      facilityInfo = recyclingData[8];
    } else if (divData.facilityName.indexOf("Greensboro") >= 0) {
      facilityInfo = recyclingData[9];
    } else if (divData.facilityName.indexOf("Mooresville") >= 0) {
      facilityInfo = recyclingData[10];
    } else if (divData.facilityName.indexOf("TRC") >= 0) {
      facilityInfo = recyclingData[12];
    } else if (divData.facilityName.indexOf("Waste") >= 0) {
      facilityInfo = recyclingData[13];
    } else if (divData.facilityName === "No recycling program") {
      [facilityInfo, divData] = getFacilityInfo("county", divData.surroundingCounty);
    } else {
      return [null, divData];
    }
    return [facilityInfo, divData];
  }
  
  const [facilityInfo, divData] = getFacilityInfo(route.params.reqDivType, route.params.reqDivName);
  if (facilityInfo === null) {
    return (<View>
      <View style={[styles.headerBox, Platform.OS !== "android" && {paddingTop: 16}]}>
        <Text style={styles.pageTitle}>
          {route.params.reqDivType === "city" ? <Text style={styles.white}>City of {route.params.reqDivName}</Text>
          : <Text style={styles.white}>{route.params.reqDivName[0] + route.params.reqDivName.toLowerCase().slice(1)} County</Text>}
        </Text>
      </View>
      <Text style = {[styles.infoBox, {backgroundColor: "red"}]}>While your location does have a recycling program, we unfortunantly don't know what items it can and cannot take.</Text>

      {"externalInfo" in divData && <View>
        <View style={styles.sectionLabel}>
          <Text style={styles.text}>External Information</Text>
        </View>
        {divData.externalInfo.map( (extLink) => <TouchableHighlight
          style = {[styles.infoBox, {padding: 8, backgroundColor: "#32b81d"}]}
          underlayColor="#129800"
          onPress={() => {Linking.openURL(extLink.url);}}
        ><View>
          <Text style={styles.text}>{extLink.title}</Text>
          <Text style={[styles.text, {textDecorationLine: "underline"}]}>{extLink.url}</Text>
        </View></TouchableHighlight> )}
      </View>}
    </View>);
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
        <TouchableHighlight
          style={[styles.bannedBox, detailText !== "More details..." && {padding: 8}]}
          underlayColor="#d00"
          onPress={ () => {
            if (detailText === "More details...") { 
              setdetailText(notPresent[1].slice(0, notPresent[1].length-1));
            } else {
              setdetailText("More details...");
            }
          }}
        ><View>
          <Text style = {styles.title}>{notPresent[0]}</Text>
          <Text style={styles.white}>{detailText}</Text>
        </View></TouchableHighlight>
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
      <View style={[styles.headerBox, Platform.OS !== "android" && {paddingTop: 16}]}>
        <Text style={styles.pageTitle}>
          {route.params.reqDivType === "city" ? <Text style={styles.white}>City of {route.params.reqDivName}</Text>
            : <Text style={styles.white}>{route.params.reqDivName[0] + route.params.reqDivName.toLowerCase().slice(1)} County</Text>}
        </Text>
        <Text style={styles.pageSubtitle}>Recycling Facility: {divData.facilityName}</Text>
      </View>
      
      <TouchableHighlight
        style = {[styles.infoBox, {backgroundColor: "#32b81d"}, plastic !== "More details..." && {padding: 8}]}
        underlayColor="#129800"
        onPress={ () => {
          if (plastic === "More details...") { 
            setPlastic(facilityInfo["plastic"]);
          } else {
            setPlastic("More details...");
          }
        }}
      ><View>
        <View style={styles.infoLabel}>
          <View style={{paddingRight: 5}}>
            <AntDesign name="checkcircleo" size={24} color="black"/>
          </View>
          <Text style = {styles.title}>Plastic</Text>
        </View>
        <Text style={styles.white}>{plastic}</Text>
      </View></TouchableHighlight>
      
      <TouchableHighlight
        style = {[styles.infoBox, {backgroundColor: "#32b81d"}, metal !== "More details..." && {padding: 8}]}
        underlayColor="#129800"
        onPress={ () => {
          if (metal === "More details...") { 
            setMetal(facilityInfo["metal"]);
          } else {
            setMetal("More details...");
          }
        }}
      ><View>
        <View style={styles.infoLabel}>
          <View style={{paddingRight: 5}}>
            <AntDesign name="checkcircleo" size={24} color="black"/>
          </View>
          <Text style = {styles.title}>Metal</Text>
        </View>
        <Text style={styles.white}>{metal}</Text>
      </View></TouchableHighlight>
      
      <TouchableHighlight
        style = {[styles.infoBox, {backgroundColor: "#32b81d"}, paper !== "More details..." && {padding: 8}]}
        underlayColor="#129800"
        onPress={ () => {
          if (paper === "More details...") { 
            setPaper(facilityInfo["paper"]);
          } else {
            setPaper("More details...");
          }
        }}
      ><View>
        <View style={styles.infoLabel}>
          <View style={{paddingRight: 5}}>
            <AntDesign name="checkcircleo" size={24} color="black"/>
          </View>
          <Text style = {styles.title}>Paper</Text>
        </View>
        <Text style={styles.white}>{paper}</Text>
      </View></TouchableHighlight>
      
      <TouchableHighlight
        style = {[
          styles.infoBox, glass !== "More details..." && {padding: 8},
          facilityInfo["glass"]!=="Glass is not recyclable at this location" ? {backgroundColor: "#32b81d"} : {backgroundColor: "red"},
        ]}
        underlayColor={facilityInfo["glass"]!=="Glass is not recyclable at this location" ? "#129800" : "#d00"}
        onPress={ () => {
          if (glass === "More details...") { 
            setGlass(facilityInfo["glass"]);
          } else {
            setGlass("More details...");
          }
        }}
      ><View>
        <View style={styles.infoLabel}>
          <View style={{paddingRight: 5}}>
            { facilityInfo["glass"]!=="Glass is not recyclable at this location" ?
            <AntDesign name="checkcircleo" size={24} color="black"/> :
            <AntDesign name="closecircleo" size={24} color="black"/> }
          </View>
          <Text style = {styles.title}>Glass</Text>
        </View>
        <Text style={styles.white}>{glass}</Text>
      </View></TouchableHighlight>
      
      {bannedItems.length !== 0 && <TouchableHighlight
        style={[
          styles.bannedBox,
          {borderTopLeftRadius: 8, borderTopRightRadius: 8, marginTop: 20, },
          banned === "" ? { borderRadius: 8 } : { padding: 8 }
        ]}
        underlayColor="#d00"
        onPress={() => {
          if (banned === "") {
            setBanned(bannedItems.map( (item) => <BannedItem words={item} key={item}/> ));
          } else {
            setBanned("");
          }
        }}
      ><View>
        <View style={styles.infoLabel}>
          <View style={{paddingRight: 5}}>
            <AntDesign name="closecircleo" size={24} color="black"/>
          </View>
          <Text style={styles.title}>Banned Items</Text>
        </View>
        {banned === "" && <Text style={styles.white}>More details...</Text>}
      </View></TouchableHighlight>}
      {banned !== "" ? banned : <View></View>}
      {banned !== "" ? <View style={[styles.bannedBox, {borderBottomLeftRadius: 8, borderBottomRightRadius: 8, height: 25} ]}></View> : <View></View>}

      {"externalInfo" in divData && <View>
        <View style={styles.sectionLabel}>
          <Text style={styles.text}>External Information</Text>
        </View>
        {divData.externalInfo.map( (extLink) => <TouchableHighlight
          style = {[styles.infoBox, {padding: 8, backgroundColor: "#32b81d"}]}
          underlayColor="#129800"
          onPress={() => {Linking.openURL(extLink.url);}}
        ><View>
          <Text style={styles.text}>{extLink.title}</Text>
          <Text style={[styles.text, {textDecorationLine: "underline"}]}>{extLink.url}</Text>
        </View></TouchableHighlight> )}
      </View>}
    </ScrollView>
  );
}

  const styles = StyleSheet.create({
    headerBox: {
      backgroundColor: "#2d61fc",
      paddingBottom: 16,
    },
    sectionLabel: {
      marginVertical: 10,
      padding: 10,
      backgroundColor: "#2d61fc",
    },
    infoBox: {
      margin: 20,
      borderColor: "gray",
      borderWidth: 1.3,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingTop: 8,

    },
    bannedBox: {
      backgroundColor: "red",
      marginHorizontal: 20,
      borderColor: 'black',
      borderWidth: 1.3,
      paddingHorizontal: 8,
      paddingTop: 8,
    },
    infoLabel: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
    },
    pageTitle: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: "center",
      color: "white",
    },
    pageSubtitle: {
      fontSize: 20,
      textAlign: "center",
      color: "white",
    },
    text: {
      textAlign: "center",
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
    },
  } 
)