import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import DivisionSearch, { reqDiv, reqCity, reqCounty } from "./DivisionSearch";
import AddressSearch, { reqPlaceId } from "./AddressSearch";

export default function Location({ navigation }) {
  const [searchMethod, setSearchMethod] = useState(null);

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
                    const response = await fetch(encodeURI("http://10.50.17.251/maps-api/lookup/" + reqPlaceId));
                    const results = await response.json();
                    [reqDivType, reqDivName] = getRegionFromPlaceId(results);
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

  function getRegionFromPlaceId(results) {
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
        onPress={function() {
          Geolocation.getCurrentPosition(async function(pos) {
            const response = await fetch(encodeURI(`http://10.50.17.251/maps-api/geocode/${pos.coords.latitude},${pos.coords.longitude}`));
            const results = await response.json();
            [reqDivType, reqDivName] = getRegionFromPlaceId(results);
            navigation.navigate("Info");
          }),
            options={
              timeout: 10000,
              maximumAge: 10000,
              showLocationDialog: true,
            }
        }}
      >
        <Text style={styles.optionText}>Use current location</Text>
      </TouchableHighlight>

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