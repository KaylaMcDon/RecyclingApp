import React, { useState } from 'react';
import { StyleSheet, Button, View, Text } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-web';

export default function AddressSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const testResults = JSON.parse('{"predictions":[{"description":"Durham, NC","matched_substrings":[{"length":3,"offset":0}],"place_id":"ChIJ8WYPEnHkrIkRfvJGionaeuE","reference":"ChIJ8WYPEnHkrIkRfvJGionaeuE","structured_formatting":{"main_text":"Durham","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"NC"},"terms":[{"offset":0,"value":"Durham"},{"offset":8,"value":"NC"}],"types":["political","geocode","locality"]},{"description":"Durango, CO","matched_substrings":[{"length":3,"offset":0}],"place_id":"ChIJI_yFvaYCPIcRWn6mo4KIK9w","reference":"ChIJI_yFvaYCPIcRWn6mo4KIK9w","structured_formatting":{"main_text":"Durango","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"CO"},"terms":[{"offset":0,"value":"Durango"},{"offset":9,"value":"CO"}],"types":["locality","geocode","political"]},{"description":"Durham Bulls Athletic Park, Blackwell Street, Durham, NC","matched_substrings":[{"length":3,"offset":0}],"place_id":"ChIJ70wim2zkrIkRPX5-jedLkQ4","reference":"ChIJ70wim2zkrIkRPX5-jedLkQ4","structured_formatting":{"main_text":"Durham Bulls Athletic Park","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"Blackwell Street, Durham, NC"},"terms":[{"offset":0,"value":"Durham Bulls Athletic Park"},{"offset":28,"value":"Blackwell Street"},{"offset":46,"value":"Durham"},{"offset":54,"value":"NC"}],"types":["establishment","stadium","point_of_interest"]},{"description":"Durango, Mexico","matched_substrings":[{"length":3,"offset":0}],"place_id":"ChIJc9-8GKW3m4YR1EpsOqaO3b8","reference":"ChIJc9-8GKW3m4YR1EpsOqaO3b8","structured_formatting":{"main_text":"Durango","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"Mexico"},"terms":[{"offset":0,"value":"Durango"},{"offset":9,"value":"Mexico"}],"types":["political","geocode","locality"]},{"description":"Durant, OK","matched_substrings":[{"length":3,"offset":0}],"place_id":"ChIJzwEPr9hfS4YR8qW4QEPxCu0","reference":"ChIJzwEPr9hfS4YR8qW4QEPxCu0","structured_formatting":{"main_text":"Durant","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"OK"},"terms":[{"offset":0,"value":"Durant"},{"offset":8,"value":"OK"}],"types":["locality","geocode","political"]}],"status":"OK"}');

  async function getPredictions(input) {
    const response = await fetch(encodeURI("http://10.50.17.251/maps-api/autocomplete/" + "NC " + input));
    const predictions = await response.json();
    return predictions;
  }

  function displayPredictions(predictions) {
    if (predictions.length === 0) {
      return;
    }

    let toShow = [];
    for (let place of predictions) {
      if (place.description === search) {
        reqPlaceId = place.place_id;
      }
      toShow.push(
        <TouchableHighlight 
          style={styles.result}
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
    <View style={{padding: 12, backgroundColor: "white"}}>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={async function(newText) {
          setSearch(newText);
          reqPlaceId = null;
          if (newText === "TST") {
            setResults(testResults.predictions);
          }
          else if (newText.length < 3) {
            setResults([]);
          }
          else if (newText in seen) {
            setResults(seen[newText]);
          }
          else {
            let predictions = await getPredictions(newText);
            if (predictions.status === 'OK') {
              setResults(predictions.predictions);
              seen[newText] = predictions.predictions;
            }
            else {
              setResults("ERROR: " + predictions.status);
            }
          }
        }}
      />
      {displayPredictions(results)}
    </View>
  );
}

let seen = {};

let reqPlaceId = null;
export { reqPlaceId };

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "aliceblue",
  },
  result: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  }
})