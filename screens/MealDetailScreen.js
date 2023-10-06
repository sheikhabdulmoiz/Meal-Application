import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../components/List";
import Subtitle from "../components/Subtitle";
import MealDetail from "../components/MealDetail";
import IconButton from "../components/IconButton";
import { useEffect, useContext } from "react";
import { FavoriteMealContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/fovorites";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const dispatch = useDispatch();

  // const FavoriteMealCtx = useContext(FavoriteMealContext);
  const favoritesMeal = useSelector((state) => state.favoritesMeal.ids);

  const isMealFavorite = favoritesMeal.includes(mealId);

  function favoriteHandler() {
    if (isMealFavorite) {
      // FavoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
      // obj = { id: mealId, fav: false };
    } else {
      dispatch(addFavorite({ id: mealId }));
      // obj = { id: mealId, fav: true };
    }
  }

  useEffect(
    () =>
      navigation.setOptions({
        headerRight: () => {
          return (
            <IconButton
              name={isMealFavorite ? "star" : "star-outline"}
              color="white"
              onPress={favoriteHandler}
            />
          );
        },
      }),
    [favoriteHandler]
  );
  return (
    <ScrollView>
      <View style={styles.mealContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          textStyle={styles.style}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <View style={styles.outerListContainer}>
          <View style={styles.list}>
            <Subtitle>ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  heading: {
    color: "#4f3b03",
    fontSize: 18,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#4f3b03",
    paddingVertical: 4,
    marginVertical: 4,
  },
  list: {
    width: "80%",
    // backgroundColor:"red"
  },
  outerListContainer: {
    alignItems: "center",
  },
  style: {
    color: "white",
  },
});