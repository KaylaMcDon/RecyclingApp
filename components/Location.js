import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { countyNames, cityNames } from "../data";
import AddressSearch, { reqPlaceId } from "./AddressSearch";

export default function Location({ navigation }) {
  const [searchMethod, setSearchMethod] = useState(null);
  const [divOptValue, setDivOptValue] = useState(null);
  const [divOptIsFocus, setDivOptIsFocus] = useState(false);
  const [cityValue, setCityValue] = useState(null);
  const [cityIsFocus, setCityIsFocus] = useState(false);
  const [countyValue, setCountyValue] = useState(null);
  const [countyIsFocus, setCountyIsFocus] = useState(false);
  const [errorMesage, setErrorMessage] = useState("");

  function updateSearchMethod(newVal) {
    (searchMethod === newVal) ? setSearchMethod(null) : setSearchMethod(newVal);
  }

  async function getRegionFromPlaceId(place_id) {
    console.log(place_id);
    const response = await fetch(encodeURI("http://10.50.17.251/maps-api/lookup/" + place_id));
    const results = await response.json();
    const address = results.results[0];
    console.log(address.address_components);
    const localityComponent = address.address_components.find(function(component) {
      console.log(component.types);
      return component.types.includes("locality");
    });
    if (localityComponent !== undefined) {
      return ["city", localityComponent.long_name];
    }
    const countyComponent = address.address_components.find(function(component) {
      component.types.includes("administrative_area_level_two");
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
      {searchMethod === "division" && <View>
        <View style={styles.container}>
          <Dropdown
            style={[styles.dropdown, divOptIsFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={divOptData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!divOptIsFocus ? "Select city or county" : "..."}
            value={divOptValue}
            onFocus={() => setDivOptIsFocus(true)}
            onBlur={() => setDivOptIsFocus(false)}
            onChange={item => {
              setDivOptValue(item.value);
              setDivOptIsFocus(false);
            }}
          />
        </View>
        {divOptValue === null ? <View></View> : <View style={styles.container}>
          {divOptValue === 'city' ?
            <Dropdown
              style={[styles.dropdown, cityIsFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={cityNames}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!cityIsFocus ? 'Select city' : '...'}
              search
              searchPlaceholder="Search..."
              value={cityValue}
              onFocus={() => setCityIsFocus(true)}
              onBlur={() => setCityIsFocus(false)}
              onChange={item => {
                setCityValue(item.value);
                setCityIsFocus(false);
              }}
            /> :
            <Dropdown
              style={[styles.dropdown, countyIsFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              data={countyNames}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!countyIsFocus ? 'Select county' : '...'}
              search
              searchPlaceholder="Search..."
              value={countyValue}
              onFocus={() => setCountyIsFocus(true)}
              onBlur={() => setCountyIsFocus(false)}
              onChange={item => {
                setCountyValue(item.value);
                setCountyIsFocus(false);
              }}
            />
          }
        </View>
        }
      </View>}
      <View style={styles.spacer}></View>
      <Button
        title="Search by address (not yet)" 
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
              console.log("division");
              if (divOptValue === null || (divOptValue === "city" && cityValue === null) || (divOptValue === "county" && countyValue === null)) {
                setErrorMessage("Please select a city/county");
              } else {
                reqDivType = divOptValue;
                if (divOptValue === "city") {reqDivName = cityValue;}
                else if (divOptValue === "county") {reqDivName = countyValue;}
                navigation.navigate("Info");
              }
              break;
            case "address":
              console.log("address");
              if (reqPlaceId === null) {
                setErrorMessage("Please select a valid address/location from the dropdown");
              } else {
                (async function() {
                  [reqDivType, reqDivName] = await getRegionFromPlaceId(reqPlaceId);
                  console.log(reqDivType, reqDivName);
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
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  spacer: {
    padding: 5,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

const divOptData = [
  { label: 'City (recycling rules of a municipal area)', value: 'city' },
  { label: 'County (recycling rules of an unincorporated area)', value: 'county' },
];