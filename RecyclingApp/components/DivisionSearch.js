import React, { useState } from "react";
import { StyleSheet, View, } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { countyNames, cityNames } from "../data";

export default function DivisionSearch() {
  const [divOptValue, setDivOptValue] = useState(reqDiv);
  const [divOptIsFocus, setDivOptIsFocus] = useState(false);
  const [cityValue, setCityValue] = useState(reqCity);
  const [cityIsFocus, setCityIsFocus] = useState(false);
  const [countyValue, setCountyValue] = useState(reqCounty);
  const [countyIsFocus, setCountyIsFocus] = useState(false);

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, divOptIsFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={[
          { label: 'City (local recycling program)', value: 'city' },
          { label: 'County (county-wide recycling program)', value: 'county' },
        ]}
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
          reqDiv = item.value;
        }}
      />
      {divOptValue !== null && (divOptValue === 'city' ?
        <Dropdown
          style={[styles.dropdown, {marginTop: 15}, cityIsFocus && { borderColor: 'blue' }]}
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
            reqCity = item.value;
          }}
        /> :
        <Dropdown
          style={[styles.dropdown, {marginTop: 15}, countyIsFocus && { borderColor: 'blue' }]}
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
            reqCounty = item.value;
          }}
        />
      )}
    </View>
  );
}

let reqDiv = null;
let reqCity = null;
let reqCounty = null;
export { reqDiv, reqCity, reqCounty };

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    lineHeight: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})