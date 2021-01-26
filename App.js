import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import apiKeys from "./config/keys";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignUp from "./app/screens/SignUp";
import SignIn from "./app/screens/SignIn";
import Dashboard from "./app/screens/Dashboard";
import LoadingScreen from "./app/screens/LoadingScreen";
import AllRecipeScreen from "./app/screens/AllRecipe";
import RecipeDetails from "./app/screens/RecipeDetails";

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    // // <WelcomeScreen />
    // <AllRecipeScreen />
    // // <RecipeDetails />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Loading"}
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Dashboard"}
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
