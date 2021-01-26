import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  SafeAreaView,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signIn } from "../../API/firebaseMethod";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (!email) {
      Alert.alert("Email field is required.");
    }

    if (!password) {
      Alert.alert("Password field is required.");
    }

    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <SafeAreaView style={styles.signInContainer}>
      <Image style={styles.image} source={require("../assets/organic.png")} />
      <Text style={styles.greeting1}>Hello there,</Text>
      <Text style={styles.greeting2}>welcome back</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        borderBottomWidth="1"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
        borderBottomWidth="1"
      />

      <TouchableOpacity
        style={styles.signInButtonContainer}
        onPress={handlePress}
      >
        <Text style={styles.signInText}>Sign-In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SignUpButtonContainer}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.SignUpButtonText}>New Here? Sign Up Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#F08080",
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 80,
    marginBottom: 20,
  },
  greeting1: {
    fontSize: 35,
  },
  greeting2: {
    fontSize: 35,
    marginBottom: 20,
  },
  input: {
    marginTop: 25,
    alignSelf: "stretch",
    marginLeft: 60,
    marginRight: 60,
    fontSize: 18,
  },
  signInButtonContainer: {
    width: 150,
    marginTop: 60,
    padding: 10,
    backgroundColor: "salmon",
    borderRadius: 10,
    alignItems: "center",
  },
  signInText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  SignUpButtonContainer: {
    marginTop: 120,
    marginBottom: 30,
  },
});
