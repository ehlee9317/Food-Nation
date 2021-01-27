import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Recipe({ recipe }) {
  const [showIngredient, setShowIngredient] = useState(false);

  const { label, image, url, ingredients } = recipe.item.recipe;

  return (
    <View style={styles.recipeContainer}>
      <View>
        <Text style={styles.foodLabel}>{label}</Text>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity
        style={styles.ingredientButtonContainter}
        title="Ingredients"
        onPress={() => setShowIngredient(!showIngredient)}
      >
        <Text style={styles.ingredientButton}>Ingredients</Text>
      </TouchableOpacity>

      <View style={styles.ingredientTextContainer}>
        {showIngredient && (
          <RecipeDetails key={ingredients.text} ingredients={ingredients} />
        )}
      </View>
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
    bottom: 1,
    zIndex: 100,
    backgroundColor: "rgba(161, 161, 161, 0.6)",
    borderRadius: 0.5,
    fontWeight: "bold",
    justifyContent: "center",
    color: "white",
    width: 205,
    flexWrap: "wrap",
  },
  ingredientButtonContainter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
    width: 120,
    left: "20%",
    top: "2%",
    borderRadius: 5
  },
  ingredientButton: {
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  ingredientTextContainer: {
    top: "2%"
  }
});
