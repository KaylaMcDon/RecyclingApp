import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
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
      {/* <Text style={styles.header}>Search for Recycling Information</Text> */}
      <TouchableHighlight
        style={styles.optionButton}
        underlayColor="#0000DD"
        onPress={() => {updateSearchMethod("currentLoc")}}
      >
        <Text style={styles.optionText}>Use current location (not yet)</Text>
      </TouchableHighlight>


      <TouchableHighlight
        style={styles.optionButton}
        underlayColor="#0000DD"
        onPress={() => {updateSearchMethod("division")}}
      >
        <Text style={styles.optionText}>Search by city/county</Text>
      </TouchableHighlight>
      {searchMethod === "division" && <DivisionSearch/>}

      <TouchableHighlight
        style={styles.optionButton}
        underlayColor="#0000DD"
        onPress={() => {updateSearchMethod("address")}}
      >
        <Text style={styles.optionText}>Search by address</Text>
      </TouchableHighlight>
      {searchMethod === "address" && <AddressSearch/>}

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
      >
        <Text style={styles.optionText}>Get Recycling Laws</Text>
      </TouchableHighlight>
      <Text>{errorMesage}</Text>
    </View>
  );
}

let reqDivType;
let reqDivName;
export {reqDivType, reqDivName};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  optionButton: {
    padding: 10,
    backgroundColor: "#2d61fc",
    marginVertical: 10,
  },
  optionText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  goButton: {
    padding: 10,
    backgroundColor: "#32b81d",
    marginVertical: 10,
  },
});