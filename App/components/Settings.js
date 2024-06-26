import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Platform, } from "react-native";


export default function Settings() {

    const [Questions, setQuestions] = useState("");

    return (
        <TouchableHighlight
        style={[
            styles.box,
            {borderTopLeftRadius: 8, borderTopRightRadius: 8, marginTop: 20, },
            banned === "" ? { borderRadius: 8 } : { padding: 8 }
        ]}
        underlayColor="#d00">
            <Text style={styles.title}>Banned Items</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    headerBox: {
      backgroundColor: "#2d61fc",
      paddingBottom: 16,
    },
    infoBox: {
      margin: 20,
      borderColor: "gray",
      borderWidth: 1.3,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingTop: 8,

    },
    box: {
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
      // color: "white",
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
    white: {
      // color: "white",
    },
  } 
)