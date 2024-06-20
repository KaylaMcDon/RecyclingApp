import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

export default function AddressSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // test response to dodge api call
  const testResults = JSON.parse('{"predictions":[{"description":"Durham, NC","matched_substrings":[{"length":3,"offset":0},{"length":2,"offset":8}],"place_id":"ChIJ8WYPEnHkrIkRfvJGionaeuE","reference":"ChIJ8WYPEnHkrIkRfvJGionaeuE","structured_formatting":{"main_text":"Durham","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"NC","secondary_text_matched_substrings":[{"length":2,"offset":0}]},"terms":[{"offset":0,"value":"Durham"},{"offset":8,"value":"NC"}],"types":["locality","political","geocode"]},{"description":"Durham Bulls Athletic Park, Blackwell Street, Durham, NC","matched_substrings":[{"length":3,"offset":0},{"length":2,"offset":54}],"place_id":"ChIJ70wim2zkrIkRPX5-jedLkQ4","reference":"ChIJ70wim2zkrIkRPX5-jedLkQ4","structured_formatting":{"main_text":"Durham Bulls Athletic Park","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"Blackwell Street, Durham, NC","secondary_text_matched_substrings":[{"length":2,"offset":26}]},"terms":[{"offset":0,"value":"Durham Bulls Athletic Park"},{"offset":28,"value":"Blackwell Street"},{"offset":46,"value":"Durham"},{"offset":54,"value":"NC"}],"types":["point_of_interest","stadium","establishment"]},{"description":"Durham County, NC","matched_substrings":[{"length":3,"offset":0},{"length":2,"offset":15}],"place_id":"ChIJLdauxjzprIkRVFeQLhVUJCQ","reference":"ChIJLdauxjzprIkRVFeQLhVUJCQ","structured_formatting":{"main_text":"Durham County","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"NC","secondary_text_matched_substrings":[{"length":2,"offset":0}]},"terms":[{"offset":0,"value":"Durham County"},{"offset":15,"value":"NC"}],"types":["political","administrative_area_level_2","geocode"]},{"description":"Durham Marriott City Center, Foster Street, Durham, NC","matched_substrings":[{"length":3,"offset":0},{"length":2,"offset":52}],"place_id":"ChIJE0U5aXLkrIkRlL4Jt7lbazE","reference":"ChIJE0U5aXLkrIkRlL4Jt7lbazE","structured_formatting":{"main_text":"Durham Marriott City Center","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"Foster Street, Durham, NC","secondary_text_matched_substrings":[{"length":2,"offset":23}]},"terms":[{"offset":0,"value":"Durham Marriott City Center"},{"offset":29,"value":"Foster Street"},{"offset":44,"value":"Durham"},{"offset":52,"value":"NC"}],"types":["establishment","point_of_interest","lodging"]},{"description":"Durham Performing Arts Center, Vivian Street, Durham, NC","matched_substrings":[{"length":3,"offset":0},{"length":2,"offset":54}],"place_id":"ChIJu-ZMSWzkrIkR5y7cYEquZsI","reference":"ChIJu-ZMSWzkrIkR5y7cYEquZsI","structured_formatting":{"main_text":"Durham Performing Arts Center","main_text_matched_substrings":[{"length":3,"offset":0}],"secondary_text":"Vivian Street, Durham, NC","secondary_text_matched_substrings":[{"length":2,"offset":23}]},"terms":[{"offset":0,"value":"Durham Performing Arts Center"},{"offset":31,"value":"Vivian Street"},{"offset":46,"value":"Durham"},{"offset":54,"value":"NC"}],"types":["establishment","point_of_interest"]}],"status":"OK"}');

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
    <View>
      <TextInput
        style={styles.input}
        value={search}
        placeholder="Search a place..."
        onChangeText={async function(newText) {
          setSearch(newText);
          reqPlaceId = null;
          if (newText === "TST") { // testing query to dodge api call
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
});