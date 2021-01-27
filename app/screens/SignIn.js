import React, { useState } from "react";
import {
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
      <Text style={styles.greeting2}>Let's get cooking</Text>

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
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpButtonContainer}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={styles.signUpButtonText}>New Here? Sign Up Here</Text>
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
    marginTop: "16%",
    marginBottom: "5%",
  },
  greeting1: {
    fontSize: 35,
  },
  greeting2: {
    fontSize: 35,
    marginBottom: "2%",
  },
  input: {
    marginTop: "5%",
    alignSelf: "stretch",
    marginLeft: "20%",
    marginRight: "20%",
    fontSize: 18,
  },
  signInButtonContainer: {
    width: 160,
    marginTop: "16%",
    padding: "2%",
    backgroundColor: "salmon",
    borderRadius: 10,
    alignItems: "center",
  },
  signInText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  signUpButtonContainer: {
    marginTop: "20%",
    marginBottom: "10%",
  },
  signUpButtonText: {
    fontSize: 16,
    marginBottom: "10%",
  }
});
