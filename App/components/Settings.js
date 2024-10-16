import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Platform, Touchable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Settings() {  
  const [Questions, setQuestions] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [issueTitle, setIssueTitle] = useState("");
  const [issueBody, setIssueBody] = useState("");
  const [issueErrorMsg, setIssueErrorMsg] = useState("");
  const [lastIssueSend, setLastIssueSend] = useState(Date.now() - 300000)

  const questionList = ["How does this app work?", "Where are the recycling symbols/numbers?", "Should I select city or county?"]
  const answerList = ["Every City and County selects a Material Recovery Facility (abbreviated to MRF) to handle the recycling process of collected items. Each MRF has a list of items they do and don’t recycle, so the recycling laws of a location are determined by its chosen MRF. This app simply uses a list of locations and their MRF’s made by the Department of Environmental Quality.", "North Carolina recycling plants have chosen to identify plastic by shape rather than by the type of plastic.", "If you live in a city you should select the city option. Occasionally a city may choose to use a different recycling facility than the county it is inside. When this happens, selecting the county you live in may result in incorrect information being displayed."]

  const FormatList = ({words}) => {
    const [detailText, setdetailText] = useState("Click to reveal");
    return (<View>
      <TouchableHighlight
        style={styles.box}
        underlayColor={"#ccc"}
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
    </View>);
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: "#2d61fc", flex: 1 }}
      edges={["top"]}
    >
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={{ backgroundColor: "white" }}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <TouchableHighlight
        style={[
            styles.box,
            {borderTopLeftRadius: 8, borderTopRightRadius: 8, marginTop: 20, },
            Questions === "" ? { borderRadius: 8 } : { padding: 8 }
        ]}
        underlayColor={"#ccc"}
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

        <TouchableHighlight
          style={[
            styles.box,
            {borderTopLeftRadius: 8, borderTopRightRadius: 8, marginTop: 20, },
            showFeedback ? { padding: 8 } : { borderRadius: 8 }
          ]}
          underlayColor={"#ccc"}
          onPress={() => { setShowFeedback(!showFeedback) }}
        >
          <Text style={styles.title}>Report a Problem...</Text>
        </TouchableHighlight>
        {showFeedback &&
          <View style={[styles.box, {padding: 16}]}>
            <TextInput
              style={[styles.titleBox]}
              maxLength={100}
              value={issueTitle}
              placeholder="Title..."
              onChangeText={setIssueTitle}
            />
            <TextInput
              style={[styles.bodyBox]}
              multiline={true}
              maxLength={600}
              value={issueBody}
              placeholder="Please describe the issue. If possible, include steps to reproduce the issue."
              onChangeText={setIssueBody}
            />
            <TouchableHighlight
              style={styles.goButton}
              activeOpacity={1}
              underlayColor={"#eee"}
              onPress={() => {
                if (issueTitle !== "" && issueBody !== "") {
                  if (Date.now() - lastIssueSend > 300000) {
                    setLastIssueSend(Date.now());
                    setIssueTitle("");
                    setIssueBody("");
                    setShowFeedback(false);
                    fetch(encodeURI(`https://recyclingappserver.onrender.com/feedback/${issueTitle}/${issueBody}`), {
                      method: 'POST',
                      mode: 'no-cors',
                    });
                  } else {
                    setIssueErrorMsg(`Please wait ${Math.floor((lastIssueSend - Date.now() + 300000) / 1000)} seconds before submitting again`);
                  }
                } else {
                  setIssueErrorMsg("Please fill out all fields before submitting issue");
                }
              }}
            >
              <Text style={styles.goText}>Submit</Text>
            </TouchableHighlight>
            <Text>{issueErrorMsg}</Text>
          </View>
        }
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: "#ddd",
    marginHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1.3,
    padding: 8,
  },
  title: {
    fontSize: 24,
  },
  titleBox: {
    height: 40,
    borderWidth: 1.3,
    padding: 10,
    backgroundColor: "#fff",
  },
  bodyBox: {
    height: 200,
    borderWidth: 1.3,
    padding: 10,
    backgroundColor: "#fff",
  },
  goButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1.3,
    borderRadius: 8,
  },
  goText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  }
});