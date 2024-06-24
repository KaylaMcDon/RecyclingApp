import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Platform, } from "react-native";
import * as ExpoLocation from 'expo-location';
import DivisionSearch, { reqDiv, reqCity, reqCounty } from "./DivisionSearch";
import AddressSearch, { reqPlaceId } from "./AddressSearch";

export default function Location({ navigation }) {
  const [searchMethod, setSearchMethod] = useState(null);
  const [geolocateMsg, setGeolocateMsg] = useState("");

  function updateSearchMethod(newVal) {
    (searchMethod === newVal) ? setSearchMethod(null) : setSearchMethod(newVal);
  }

  function GoButton() {
    const [errorMesage, setErrorMessage] = useState("");
    return ( <View>
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
            default:
              setErrorMessage("Please select a search method and input details");
          }
        }}
      >
        <Text style={styles.optionText}>Get Recycling Laws</Text>
      </TouchableHighlight>
      <Text>{errorMesage}</Text>
    </View> );
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
      <TouchableHighlight
        style={styles.optionButton}
        underlayColor="#0000DD"
        onPress={() => {updateSearchMethod("division")}}
      >
        <Text style={styles.optionText}>Search by city/county</Text>
      </TouchableHighlight>

      {searchMethod === "division" && <View style={styles.container}><DivisionSearch/><GoButton/></View>}

      <TouchableHighlight
        style={styles.optionButton}
        underlayColor="#0000DD"
        onPress={() => {updateSearchMethod("address")}}
      >
        <Text style={styles.optionText}>Search by address</Text>
      </TouchableHighlight>

      {searchMethod === "address" && <View style={styles.container}><AddressSearch/><GoButton/></View>}

      <TouchableHighlight
        style={styles.locButton}
        onPress={async function() {
          const locPerms = await ExpoLocation.requestForegroundPermissionsAsync();
          if (locPerms.granted) {
            setGeolocateMsg("Working...");
            let pos = await ExpoLocation.getLastKnownPositionAsync().catch((error) => {setGeolocateMsg(`Error getting position: ${error}`)});
            if (pos === null) {
              pos = await ExpoLocation.getCurrentPositionAsync().catch((error) => {setGeolocateMsg(`Error getting position: ${error}`)});
            }
            const response = await fetch(encodeURI(`http://10.50.17.251/maps-api/geocode/${pos.coords.latitude},${pos.coords.longitude}`))
              .catch((error) => {setGeolocateMsg(`Error getting local region: please check your internet connection and try again.\n${error}`)});
            const results = await response.json();
            [reqDivType, reqDivName] = getRegionFromAddress(results);
            setGeolocateMsg("");
            navigation.navigate("Info");
          } else {
            setGeolocateMsg("Missing location permissions: You may need to enable location sharing in settings to use this feature");
          }
        }}
      >
        <Text style={styles.optionText}>Use current location</Text>
      </TouchableHighlight>
      <Text style={{textAlign: "center"}}>{geolocateMsg}</Text>
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
  optionText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  locButton: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: "#32b81d",
    borderRadius: 8,
  },
  goButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#32b81d",
    borderRadius: 8,
  },
});