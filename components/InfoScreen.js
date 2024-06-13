import React, { Component } from "react";
import {View, Text, Button } from "react-native";
import { CountyFullData } from "../data";
import { CityFullData } from "../data";


export default function InfoScreen() {
  
  return (
    <View>
      <Text>About Screen</Text>
      <Button
      title="Click me"
      onPress={()=>console.log(CityData.length)}
      />
    </View>
  );
}