import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

export default function Recipe({ recipe }) {
  const [showIngredient, setShowIngredient] = useState(false);

  const { label, image, url, ingredients } = recipe.item.recipe;

  return (
    <View style={styles.recipeContainer}>
      <Text style={styles.foodLabel}>{label}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      {/* <Button
        title="Ingredients"
        onPress={() => setShowIngredient(!showIngredient)}
      />

      <View>
        {showIngredient && (
          <RecipeDetails key={ingredients.text} ingredients={ingredients} />
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  recipeContainer: {
    top: 0,
    left: 5,
    width: "50%",
    height: "100%",
    marginBottom: 10,
  },
  image: {
    width: 205,
    height: 200,
  },
  foodLabel: {
    position: "absolute",
    bottom: 10,
    zIndex: 100,
    backgroundColor: "rgba(161, 161, 161, 0.6)",
    borderRadius: 0.5,
    fontWeight: "bold",
    justifyContent: "center",
    color: "white",
    width: 205,
    flexWrap: "wrap",
  },
});
