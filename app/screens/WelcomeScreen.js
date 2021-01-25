import React from "react";
import { ImageBackground, StyleSheet, View, Text, Button } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/countertop.jpg")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FOOD</Text>
        <Text style={styles.title}>NATION</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleContainer: {
    fontSize: 80,
    position: "absolute",
    top: 90,
    color: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    top: 120,
    color: "#fc5c65",
    fontWeight: "bold"
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#fc5c65",
    //  bottom: 20
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4ecdc3",
    //  bottom: 20
  },
});

export default WelcomeScreen;
