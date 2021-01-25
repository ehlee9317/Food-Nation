import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./Recipe";

import {
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-community/picker";

export default function AllRecipe() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

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
  };

  const renderRecipe = (recipe) => {
    return <Recipe key={recipe.item.recipe.label} recipe={recipe} />;
  };

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>FOOD NATION</Text>
      {alert !== "" && <Text>{alert}</Text>}
      <TextInput
        style={styles.searchBar}
        value={query}
        onChangeText={(item) => setQuery(item)}
        placeholder="Search Food Category"
      />
      <TouchableOpacity onPress={onSubmit} style={{ height: 30 }}>
        <Text style={{ color: "white", fontSize: 16, margin: "auto" }}>
          Search
        </Text>
      </TouchableOpacity>

      <FlatList
        style={styles.recipeList}
        data={recipes}
        numColumns={2}
        renderItem={renderRecipe}
      />
      {/* <View>
          {recipes !== [] &&
            recipes.map((recipe) => (
              <Recipe key={recipe.recipe.label} recipe={recipe} />
            ))}
        </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "tomato",
  },
  title: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
  searchBar: {
    height: 35,
    width: "99%",
    borderColor: "gray",
    backgroundColor: "white",
    textAlign: "center",
    borderWidth: 1,
  },
  recipeList: {
    backgroundColor: "white",
  },
  recipeFilter: {
    position: "absolute",
  },
});
