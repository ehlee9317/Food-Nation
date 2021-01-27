import React, { useState } from "react";
import {
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registration } from "../../API/firebaseMethod";

export default function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      registration(email, password, lastName, firstName);
      emptyState();
    }
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <Image
        style={styles.image}
        source={require("../assets/cuttingBoard.png")}
      />
      <Text style={styles.greeting}>Get on Board</Text>

      {/* <ScrollView onBlur={Keyboard.dismiss}> */}
      <TextInput
        style={styles.input}
        placeholder="Full Name*"
        value={firstName}
        onChangeText={(name) => setFirstName(name)}
        borderBottomWidth="1"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(name) => setLastName(name)}
        borderBottomWidth="1"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail*"
        value={email}
        onChangeText={(email) => setEmail(email)}
        keyboardType="email-address"
        autoCapitalize="none"
        borderBottomWidth="1"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password*"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
        borderBottomWidth="1"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password*"
        value={confirmPassword}
        onChangeText={(password2) => setConfirmPassword(password2)}
        secureTextEntry={true}
        borderBottomWidth="1"
      />
      <TouchableOpacity
        style={styles.signUpButtonContainer}
        onPress={handlePress}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButtonContainer}
        onPress={() => navigation.navigate("Sign In")}
      >
        <Text style={styles.signInButtonText}>
          Already have an account? Sign In
        </Text>
        {/* <Text>Sign In</Text> */}
      </TouchableOpacity>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#F08080",
  },
  image: {
    width: 380,
    height: 250,
    marginTop: "16%",
  },
  greeting: {
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
  signUpButtonContainer: {
    width: 150,
    marginTop: 60,
    padding: 10,
    backgroundColor: "mediumturquoise",
    borderRadius: 10,
    alignItems: "center",
  },
  signUpText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  signInButtonContainer: {
    marginTop: "20%",
    marginBottom: "10%",
  },
  signInButtonText: {
    fontSize: 16,
    marginBottom: "18%",
  },
});
