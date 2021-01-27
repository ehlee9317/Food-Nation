import React from "react";
import {
  View,
  Text,
} from "react-native";

export default function RecipeDetails({ ingredients }) {
  console.log("ingredients ->", ingredients);
  return (
    <View>
      {ingredients.map((ingredient) => {
        return (
          <View>
            <Text>{ingredient.text}</Text>
            <Text>Weight - {ingredient.weight}</Text>
          </View>
        );
      })}
    </View>
  );
}
