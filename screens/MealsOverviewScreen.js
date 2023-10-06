import { Text, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const catTitle = route.params.title;

  const mealId = route.params.mealId;
  const favoriteMealIds = useSelector((state) => state.favoritesMeal.ids);
  isMealFav = favoriteMealIds.includes(mealId);
  console.log("Meakoverview screen:"+favoriteMealIds);

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: catTitle,
    });
  });

  const allRealtedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return <MealList  data={allRealtedMeals} />;
}
export default MealsOverviewScreen;