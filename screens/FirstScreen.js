import * as React from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import globalStyles from "../globalStyles";

export default function FirstScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/1.gif")} style={styles.backgroundgif} />
      <View style={styles.screentop}>
        <View style={styles.screentopone}>
          <Image source={require("../assets/back.png")} style={styles.icon} />
          <Text style={styles.bigboldtext}>2.33</Text>
          <Text style={styles.regulartext}>Later</Text>
        </View>
        <View>
          <Text style={{ ...styles.regulartext, ...styles.screentoptwo }}>
            Tons CO2e
          </Text>
          <View style={styles.screentopthree}>
            <Image
              source={require("../assets/flag.png")}
              style={styles.smallicon}
            />
            <Text style={{ ...styles.regulartext, ...styles.screentoptwo }}>
              Annual Avg. Carbon FootPrint
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.screenmiddle}>
        <View style={styles.textbox}>
          <Text style={styles.regulartextsmall}>
            Hey, Do you know{" "}
            <Text style={styles.regulartextsmallbold}>Carbon Footprint</Text> is
            related for Global Warming!
          </Text>
        </View>
        <View style={styles.textbox}>
          <Text style={styles.regulartextsmall}>
            Sustainable choices can{" "}
            <Text style={styles.regulartextsmallbold}>reduce</Text> your
            personal footprint and{" "}
            <Text style={styles.regulartextsmallbold}>
              earn you Real Rewards.
            </Text>
          </Text>
        </View>
        <View style={styles.textbox}>
          <Text style={styles.regulartextsmall}>
            So let’s check what your carbon footprint looks like! Answer a few
            questions and{" "}
            <Text style={styles.regulartextsmallbold}>see it on the Top.</Text>
          </Text>
        </View>
      </View>
      <View style={styles.screenbottom}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SecondScreen")}
        >
          <Text style={styles.regulartext}>Let's Start!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = globalStyles;
