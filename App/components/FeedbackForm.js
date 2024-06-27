import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TextInput, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (<View>
    <Text>Report a problem</Text>
    <TextInput
      style={[styles.title]}
      maxLength={100}
      value={title}
      placeholder="Title..."
      onChangeText={setTitle}
    />
    <TextInput
      style={[styles.body]}
      multiline={true}
      maxLength={600}
      value={body}
      placeholder="Please describe the issue. If possible, include steps to reproduce the issue..."
      onChangeText={setBody}
    />
    <TouchableHighlight
      style={styles.goButton}
      activeOpacity={1}
      underlayColor={"#129800"}
      onPress={() => {
        fetch(encodeURI(`http://10.50.17.251/feedback/${title}/${body}`), {
          method: 'POST',
          mode: 'no-cors',
        });
      }}
    >
      <Text style={styles.goText}>Submit</Text>
    </TouchableHighlight>
  </View>);
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "aliceblue",
  },
  body: {
    height: 200,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "aliceblue",
  },
  goButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#32b81d",
    borderRadius: 8,
  },
  goText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  }
})