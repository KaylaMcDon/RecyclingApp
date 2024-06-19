import React, { useState } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { countyNames, cityNames } from "../data";
import AddressSearch from "./AddressSearch";

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
    console.log(searchMethod);
    (searchMethod === newVal) ? setSearchMethod(null) : setSearchMethod(newVal);
    console.log(searchMethod === newVal);
    console.log("searchMethod updated to " + searchMethod + ". newVal = " + newVal);
  }

  return (
    <View>
      <AddressSearch/>
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