import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/countertop.jpg")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FOOD</Text>
        <Text style={styles.title}>NATION</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.inlineText}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate("Sign In")}
        >
          <Text style={styles.button}>Sign In</Text>
        </TouchableOpacity>
      </View>
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
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
  buttonContainer: {
    marginBottom: 225,
    position: "relative",
    alignItems: "center",
  },
  inlineText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  signInButton: {
    width: 150,
    height: 40,
    backgroundColor: "#fc5c65",
    top: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  signUpButton: {
    width: 150,
    height: 40,
    backgroundColor: "#4ecdc3",
    bottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
});

export default WelcomeScreen;
