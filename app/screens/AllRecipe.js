import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./Recipe";
import * as firebase from "firebase";
import { loggingOut } from "../../API/firebaseMethod";

import {
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  TextInput,
  Image,
  TouchableHighlight,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-community/picker";

export default function AllRecipe({ navigation }) {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const [firstLoaded, setFirstLoaded] = useState(true);

  const APP_ID = "16e3817c";
  const APP_KEY = "5aed917b5f4f1b06292004c8f9959c96";
  const foodURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = () => {
    console.log("!!!! query", query);
    console.log("foodURL", foodURL);
    if (query !== "") {
      Axios({
        method: "get",
        url: foodURL,
      }).then(
        (res) => {
          if (!res.data.more) {
            return setAlert("No food with such name");
          }
          setRecipes(res.data.hits);
          console.log("result.data.hits", res.data.hits);
        },
        (error) => {
          console.log(error);
        }
      );
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getData();
    setFirstLoaded(false);
  };

  const signOut = () => {
    loggingOut();
    navigation.replace("Home");
  };

  const renderRecipe = (recipe) => {
    return <Recipe key={recipe.item.recipe.label} recipe={recipe} />;
  };

  return (
    <SafeAreaView style={styles.background}>
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
      <Text style={styles.title}>FOOD NATION</Text>
      {alert !== "" && <Text style={styles.alertText}>{alert}</Text>}
      <TextInput
        style={styles.searchBar}
        value={query}
        onChangeText={(item) => setQuery(item)}
        placeholder="Search Food Category"
      />
      <TouchableOpacity onPress={onSubmit} style={{ height: 40 }}>
        <Text style={styles.searchButton}>Search</Text>
      </TouchableOpacity>
      <View style={styles.recipeContainer}>
        {firstLoaded ? (
          <Image
            style={styles.image}
            source={require("../assets/worldFood.png")}
          />
        ) : (
          <FlatList
            style={styles.recipeList}
            data={recipes}
            numColumns={2}
            renderItem={renderRecipe}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
  signOut: {
    color: "white",
    fontSize: 16,
    right: "-38%",
    top: "70%",
  },
  title: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
    marginTop: "3%",
    marginBottom: "5%",
  },
  alertText: {
    color: "white",
    fontSize: 16,
    marginBottom: "2%",
    fontWeight: "bold"
  },
  image: {
    width: 400,
    height: 400,
    marginTop: "25%",
  },
  searchBar: {
    height: 35,
    width: "99%",
    borderColor: "gray",
    backgroundColor: "white",
    textAlign: "center",
    borderWidth: 1,
  },
  recipeContainer: {
    height: "80%",
  },
  recipeList: {
    backgroundColor: "white",
  },
  recipeFilter: {
    position: "absolute",
  },
  searchButton: {
    color: "white",
    fontSize: 20,
    margin: "auto",
    marginTop: "1.5%",
    fontWeight: "bold",
  },
});
