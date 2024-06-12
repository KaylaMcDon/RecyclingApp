import React, { Component } from "react";
import {View, Text, Button } from "react-native";

import xlsx from "xlsx"

export default function InfoScreen() {
  

  const workbook = xlsx.readFile('./CountyMRF-ShedData.xlsx');
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet);

  return (
    <View>
      <Text>About Screen</Text>
      <Button
      title = "Click me"
      onPress={()=>console.log(jsonData[1].CO_NAME)}
      />
    </View>
  );
}