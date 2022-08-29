import {
  StyleSheet,
} from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    backgroundgif:{
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0,
    },
    icon: {
      height: 36,
      width: 36,
      margin: 6,
      alignSelf: "center",
    },
    smallicon: {
      height: 18,
      width: 18,
      margin: 6,
      alignSelf: "center",
    },
    button: {
      alignItems: "center",
      paddingVertical: 9,
      width: "100%",
      borderRadius: 8,
      backgroundColor: "#33B469",
    },
    bigboldtext: {
      fontSize: 55,
      fontWeight: "900",
      color: "white",
    },
    regulartext: {
      fontSize: 18,
      color: "white",
      alignSelf: "center",
    },
    regulartextsmall: {
      fontSize: 16,
      lineHeight: 28,
    },
    regulartextsmallbold: {
      fontSize: 16,
      fontWeight: "bold",
    },
    textbox: {
      backgroundColor: "#ffffff",
      margin: 10,
      width: 350,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 25,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      padding: 15,
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
    listitem: {
      flexDirection: "row",
      borderBottomColor: "#E2EBF3",
      borderBottomWidth: 1,
      alignItems: "center",
      padding: 8,
    },
    screentop: {
      flex: 0.4,
      justifyContent: "flex-start",
      margin: "15%",
      alignItems: "center",
      width: "90%",
    },
    screentopone: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignContent: "space-between",
      alignItems: "space-between",
    },
    screentoptwo: {
      alignSelf: "center",
      fontSize: 16,
    },
    screentopthree: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "space-between",
      alignItems: "space-between",
    },
    screenmiddle: {
      flex: 0.6,
      alignItems: "center",
      justifyContent: "center",
    },
    screenbottom: {
      flex: 0.2,
      width: "35%",
      justifyContent: "center",
    }
  });
  