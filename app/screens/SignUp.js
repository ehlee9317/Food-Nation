import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
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
      navigation.navigate("Loading");
      emptyState();
    }
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <Text>Get on Board</Text>

      <ScrollView onBlur={Keyboard.dismiss}>
        <TextInput
          placeholder="First name*"
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
        />
        <TextInput
          placeholder="Last name"
          value={lastName}
          onChangeText={(name) => setLastName(name)}
        />

        <TextInput
          placeholder="Enter your email*"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Enter your password*"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Retype your password to confirm*"
          value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handlePress}>
          <Text>Sign Up</Text>
        </TouchableOpacity>

        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
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
    width: 250,
    height: 250,
    marginTop: 80,
    marginBottom: 20,
  },
});
