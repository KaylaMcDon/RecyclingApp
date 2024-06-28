import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { TextInput } from 'react-native';

export default function AddressSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function getPredictions(input) {
    const response = await fetch(encodeURI("http://10.50.17.251/maps-api/autocomplete/" + "NC " + input));
    const predictions = await response.json();
    return predictions;
  }

  function displayPredictions(predictions) {
    if (predictions.length === 0) {
      return <View></View>;
    }
    let toShow = [];
    for (let place of predictions) {
      if (place.description === search) {
        reqPlaceId = place.place_id;
      }
      toShow.push(
        <TouchableHighlight 
          key={place.place_id}
          style={styles.wordBox}
          activeOpacity={1}
          underlayColor="#DDDDDD"
          onPress={async function() {
            setSearch(place.description);
            setResults([]);
            reqPlaceId = place.place_id;
          }}
        >
          <Text>{place.description}</Text>
        </TouchableHighlight>
      );
    }
    return toShow;
  }

  return (
    <View>
      <TextInput
        style={[styles.wordBox, {backgroundColor: "aliceblue"}]}
        value={search}
        placeholder="Search a place..."
        onChangeText={async function(newText) {
          setSearch(newText);
          reqPlaceId = null;
          if (newText.length < 3) {
            setResults([]);
          }
          else {
            let predictions = await getPredictions(newText);
            if (predictions.status === 'OK') {
              setResults(predictions.predictions);
            }
            else {
              setResults([]);
            }
          }
        }}
      />
      {displayPredictions(results)}
    </View>
  );
}

let reqPlaceId = null;
export { reqPlaceId };

const styles = StyleSheet.create({
  wordBox: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});