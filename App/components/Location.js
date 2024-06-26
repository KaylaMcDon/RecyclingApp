import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ExpoLocation from 'expo-location';
import DivisionSearch, { reqDiv, reqCity, reqCounty } from "./DivisionSearch";
import AddressSearch, { reqPlaceId } from "./AddressSearch";

export default function Location({ navigation }) {
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

  function GoButton({ searchMethod }) {
    const [errorMesage, setErrorMessage] = useState("");
    return (<View>
      <TouchableHighlight
        style={styles.goButton}
        activeOpacity={1}
        underlayColor="#129800"
        onPress={() => {
          switch (searchMethod) {
            case "division":
              if (reqDiv === null || (reqDiv === "city" && reqCity === null) || (reqDiv === "county" && reqCounty === null)) {
                setErrorMessage("Please select a city/county");
              } else {
                navigation.navigate("Information", {
                  screen: 'Info',
                  params: {
                    reqDivType: reqDiv,
                    reqDivName: reqDiv === "city" ? reqCity : reqCounty
                  }
                }) 
              }
              break;
            case "address":
              if (reqPlaceId === null) {
                setErrorMessage("Please select a valid address/location from the dropdown");
              } else {
                (async function() {
                  const response = await fetch(encodeURI("https://recyclingappserver.onrender.com/maps-api/lookup/" + reqPlaceId))
                    .catch((error) => {setErrorMessage(`Error looking up address: ${error}.`)});
                  const results = await response.json();
                  if (results.status === "OK") { 
                    const [reqDivType, reqDivName] = getRegionFromAddress(results);
                    navigation.navigate("Information", {
                      screen: 'Info',
                      params: { reqDivType: reqDivType, reqDivName: reqDivName }
                    })
                  } else {
                    setErrorMessage(`Google maps API error: ${error}.`);
                  }
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
                  const response = await fetch(encodeURI(`https://recyclingappserver.onrender.com/maps-api/geocode/${pos.coords.latitude},${pos.coords.longitude}`))
                    .catch((error) => {setErrorMessage(`Error getting local region: please check your internet connection and try again.\n${error}`)});
                  const results = await response.json();
                  if (results.status === "OK") {
                    const [reqDivType, reqDivName] = getRegionFromAddress(results);
                    setErrorMessage("");
                    navigation.navigate("Information", {
                      screen: 'Info',
                      params: { reqDivType: reqDivType, reqDivName: reqDivName }
                    })
                  } else {
                    setErrorMessage(`Google maps API error: ${error}.`)
                  }
                } else {
                  setErrorMessage("Missing location permissions: You may need to enable location sharing in settings to use this feature");
                }
              })();
              break;
            default:
              setErrorMessage("Please select a search method and input details");
          }
        }}
      >
        <View>
          {searchMethod === "division" && <Text style={styles.text}>Get Laws by City/County</Text>}
          {searchMethod === "address" && <Text style={styles.text}>Get Laws by Address</Text>}
          {searchMethod === "location" && <Text style={styles.text}>Get Laws by Current Location</Text>}
        </View>
      </TouchableHighlight>
      <Text>{errorMesage}</Text>
    </View>);
  }

  return (<>
    <SafeAreaView
      style={{backgroundColor: "#2d61fc", flex: 1}}
      edges={["top"]}
    >
      <View style={{backgroundColor: "white", flexGrow: 1}}>
        <View style={[styles.header, {marginTop: 0}]}>
          <Text style={styles.headerText}>Select Location</Text>
        </View>
        <View style={styles.container}>
          <GoButton searchMethod="location"/>
        </View>

        <View style={styles.optionLabel}>
          <Text style={styles.text}>Search by Address</Text>
        </View>
        <View style={styles.container}>
          <AddressSearch/>
          <GoButton searchMethod="address"/>
        </View>

        <View style={styles.optionLabel}>
          <Text style={styles.text}>Search by City/County</Text>
        </View>
        <View style={styles.container}>
          <DivisionSearch/>
          <GoButton searchMethod="division"/>
        </View>
      </View>
    </SafeAreaView>
  </>);
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2d61fc",
    height: 94,
  },
  goButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#32b81d",
    borderRadius: 8,
  },
  container: {
    padding: 16,
  },
  optionLabel: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#2d61fc",
  },
  headerText: {
    paddingTop: 30,
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});