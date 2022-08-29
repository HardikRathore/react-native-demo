import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../globalStyles";
import { SecondScreenList } from "../data";

export default function SecondScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/2.gif")} style={styles.backgroundgif} />
      <View style={styles.screentop}>
        <View style={styles.screentopone}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image
              onPress={() => navigation.goBack()}
              source={require("../assets/back.png")}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.bigboldtext}>0.00</Text>
          <Image source={require("../assets/cross.png")} style={styles.icon} />
        </View>
        <View>
          <Text style={{ ...styles.regulartext, ...styles.screentoptwo }}>
            Tons CO2e
          </Text>
        </View>
      </View>
      <View style={styles.screenmiddle}>
        <View style={styles.textbox}>
          <Text style={styles.regulartextsmall}>Do you own a vehicle?</Text>
        </View>
        <View style={styles.textboxright}>
          {SecondScreenList.map((item) => {
            return (
              <View style={styles.listitem}>
                <MaterialIcons
                  name="radio-button-unchecked"
                  size={20}
                  color="#B5C7D9"
                />
                <Image source={item.uri} style={styles.smallicon} />
                <Text style={styles.regulartextsmall}>{item.text}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.screenbottom}>
        <Pressable style={styles.button}>
          <Text style={styles.regulartext}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  listitem: {
    flexDirection: "row",
    borderBottomColor: "#E2EBF3",
    borderBottomWidth: 1,
    alignItems: "center",
    padding: 8,
  },
  textboxright: {
    backgroundColor: "#ffffff",
    margin: 10,
    width: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 15,
    alignSelf: "flex-end",
  },
});
