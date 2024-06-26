import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Platform, SafeAreaView, } from "react-native";

export default function Settings() {
  const questionList = ["How does this app work?", "Where are the recycling symbols/numbers?", "Should I select city or county?"]  
  const [Questions, setQuestions] = useState("");
  const answerList = ["Every City and County selects a Material Recovery Facility (abbreviated to MRF) to handle the recycling process of collected items. Each MRF has a list of items they do and don’t recycle, so the recycling laws of a location are determined by its chosen MRF. This app simply uses a list of locations and their MRF’s made by the Department of Environmental Quality.", "North Carolina recycling plants have chosen to identify plastic by shape rather than by the type of plastic. Since the shape of the plastic is tied to the type of plastic used, this means that items labeled with a 1 or 2 are usually recyclable.", "If you live in a city you should select the city option. Occasionally a city may choose to use a different recycling facility than the county it is inside. When this happens, selecting the county you live in may result in incorrect information being displayed."]

  const FormatList = ({words}) => {
    const [detailText, setdetailText] = useState("Click to reveal");
    return (
      <TouchableHighlight
        style={styles.box}
        onPress={ () => {
          if (detailText == "Click to reveal") {
            setdetailText(answerList[questionList.indexOf(words)]);
          } else {
            setdetailText("Click to reveal");
          }
        }}
      >
        <View>
          <Text style = {styles.title}>{words}</Text>
          <Text style={styles.white}>{detailText}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: "#2d61fc"}}>
      <SafeAreaView />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <TouchableHighlight
        style={[
            styles.box,
            {borderTopLeftRadius: 8, borderTopRightRadius: 8, marginTop: 20, },
            Questions === "" ? { borderRadius: 8 } : { padding: 8 }
        ]}
        onPress={() => {
          if (Questions === "") {
            setQuestions(questionList.map( (item) => <FormatList words={item} key={item}/> ));
          } else {
            setQuestions("");
          }
        }}
        >
          <View>
            <Text style={styles.title}>FAQs</Text>
            {Questions === "" && <Text style={styles.white}>More details...</Text>}
          </View>
        </TouchableHighlight>
        {Questions !== "" ? Questions : <View></View>}
        {Questions !== "" ? <View style={[styles.box, {borderBottomLeftRadius: 8, borderBottomRightRadius: 8, height: 25} ]}></View> : <View></View>}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2d61fc",
    height: 94,
  },
  headerText: {
    paddingTop: 30,
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  box: {
    backgroundColor: "grey",
    marginHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1.3,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
  },
});