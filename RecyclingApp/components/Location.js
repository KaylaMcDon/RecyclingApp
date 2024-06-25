import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Platform, } from "react-native";
import * as ExpoLocation from 'expo-location';
import DivisionSearch, { reqDiv, reqCity, reqCounty } from "./DivisionSearch";
import AddressSearch, { reqPlaceId } from "./AddressSearch";

export default function Location({ navigation }) {
  const [searchMethod, setSearchMethod] = useState(null);
  const [errorMesage, setErrorMessage] = useState("");

  function updateSearchMethod(newVal) {
    (searchMethod === newVal) ? setSearchMethod(null) : setSearchMethod(newVal);
  }

  function getRegionFromAddress(results) {
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
    return ["Error finding region", "Error finding region"];
  }

  return (
    <View>
      <Text style={styles.optionText}>Use Current Location</Text>

      <Text style={styles.optionText}>Search by Address</Text>
      <View style={styles.container}><AddressSearch/></View>

      <Text style={styles.optionText}>Search by City/County</Text>
      <View style={styles.container}><DivisionSearch/></View>

      <TouchableHighlight
        style={styles.goButton}
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
                    const response = await fetch(encodeURI("http://10.50.17.251/maps-api/lookup/" + reqPlaceId))
                      .catch((error) => {setErrorMessage(`Error looking up address: ${error}.`)});
                    const results = await response.json();
                    [reqDivType, reqDivName] = getRegionFromAddress(results);
                  }
                  navigation.navigate("Info");
                })();
              }
              break;
            case "location":
              (async function() {
                const locPerms = await ExpoLocation.requestForegroundPermissionsAsync();
                if (locPerms.granted) {
                  setErrorMessage("Working...");
                  let pos = await ExpoLocation.getLastKnownPositionAsync().catch((error) => {setErrorMessage(`Error getting position: ${error}`)});
                  if (pos === null) {
                    pos = await ExpoLocation.getCurrentPositionAsync().catch((error) => {setErrorMessage(`Error getting position: ${error}`)});
                  }
                  const response = await fetch(encodeURI(`http://10.50.17.251/maps-api/geocode/${pos.coords.latitude},${pos.coords.longitude}`))
                    .catch((error) => {setErrorMessage(`Error getting local region: please check your internet connection and try again.\n${error}`)});
                  const results = await response.json();
                  [reqDivType, reqDivName] = getRegionFromAddress(results);
                  setErrorMessage("");
                  navigation.navigate("Info");
                } else {
                  setErrorMessage("Missing location permissions: You may need to enable location sharing in settings to use this feature");
                }
              })();
            default:
              setErrorMessage("Please select a search method and input details");
          }
        }}
      >
        <Text style={styles.goText}>Get Recycling Laws</Text>
      </TouchableHighlight>
      <Text>{errorMesage}</Text>
    </View>
  );
}

let reqDivType;
let reqDivName;
export {reqDivType, reqDivName};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  optionButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#2d61fc",
  },
  optionLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    textAlign: "center",
    fontSize: 16,
    // color: "white",
    fontWeight: "bold",
    flex: 1,
  },
  goText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#72f85d",
  },
  goButton: {
    marginTop: 20,
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: "#32b81d",
    borderRadius: 8,
  },
});