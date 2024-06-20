import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import DivisionSearch, { reqDiv, reqCity, reqCounty } from "./DivisionSearch";
import AddressSearch, { reqPlaceId } from "./AddressSearch";

export default function Location({ navigation }) {
  const [searchMethod, setSearchMethod] = useState(null);
  const [errorMesage, setErrorMessage] = useState("");

  function updateSearchMethod(newVal) {
    (searchMethod === newVal) ? setSearchMethod(null) : setSearchMethod(newVal);
  }

  async function getRegionFromPlaceId(place_id) {
    const response = await fetch(encodeURI("http://10.50.17.251/maps-api/lookup/" + place_id));
    const results = await response.json();
    const address = results.results[0];
    const localityComponent = address.address_components.find(function(component) {
      return component.types.includes("locality");
    });
    if (localityComponent !== undefined) {
      return ["city", localityComponent.long_name];
    }
    const countyComponent = address.address_components.find(function(component) {
      return component.types.includes("administrative_area_level_2");
    });
    if (countyComponent !== undefined) {
      return ["county", countyComponent.long_name.slice(0, -7).toUpperCase()];
    }
    return "UH OH: no region found?";
  }

  return (
    <View>
      <Text style={styles.header}>Search for Recycling Information</Text>
      <View style={styles.spacer}></View>
      <Button
        title="Use current location (not yet)"
        onPress={() => {updateSearchMethod("currentLoc")}}
      />
      <View style={styles.spacer}></View>
      <View style={styles.spacer}></View>
      <Button
        title="Search by city/county"
        onPress={() => {updateSearchMethod("division")}}
      />
      <View style={styles.spacer}></View>
      {searchMethod === "division" && <DivisionSearch/>}
      <View style={styles.spacer}></View>
      <Button
        title="Search by address" 
        onPress={() => {updateSearchMethod("address")}}
      />
      <View style={styles.spacer}></View>
      {searchMethod === "address" && <AddressSearch/>}
      <View style={styles.spacer}></View>
      <Button
        title="Get Recycling Laws"
        onPress={() => {
          switch (searchMethod) {
            case "division":
              if (reqDiv === null || (reqDiv === "city" && reqCity === null) || (reqDiv === "county" && reqCounty === null)) {
                setErrorMessage("Please select a city/county");
              } else {
                reqDivType = reqDiv;
                if (reqDiv === "city") {reqDivName = reqCity;}
                else if (reqDiv === "county") {reqDivName = reqCounty;}
                navigation.navigate("Info");
              }
              break;
            case "address":
              if (reqPlaceId === null) {
                setErrorMessage("Please select a valid address/location from the dropdown");
              } else {
                (async function() {
                  if (reqPlaceId === "ChIJ8WYPEnHkrIkRfvJGionaeuE") {
                    reqDivType = "city";
                    reqDivName = "Durham";
                  } else {
                    [reqDivType, reqDivName] = await getRegionFromPlaceId(reqPlaceId);
                  }
                  navigation.navigate("Info");
                })();
              }
              break;
            default:
              setErrorMessage("Please select a search method and input details");
          }
        }}
      />
      <Text>{errorMesage}</Text>
    </View>
  );
}

let reqDivType;
let reqDivName;
export {reqDivType, reqDivName};

const styles = StyleSheet.create({
  spacer: {
    padding: 5,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});