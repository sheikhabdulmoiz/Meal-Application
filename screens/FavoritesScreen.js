import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoriteMealContext } from "../store/context/favorites-context";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const FavoriteMealCtx = useContext(FavoriteMealContext);
  const favoriteMealIds = useSelector(state=>state.favoritesMeal.ids)


  // const mealIds = FavoriteMealCtx.ids;

  const AllFovoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favoriteMealIds.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={{  color:"white", fontSize:16}}>No favorite Meal is selected yet!</Text>
      </View>
    );
  }
  return <MealList data={AllFovoriteMeals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  
  },
});