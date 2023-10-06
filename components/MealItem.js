import { Pressable, Platform } from "react-native";
import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";
import IconButton from "./IconButton";
import { useSelector } from "react-redux";

// function favoriteHandler() {}

function MealItem({
  imageUrl,
  duration,
  complexity,
  affordability,
  title,
  mealId,
}) {
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate("MealDetail", {
      mealId: mealId,
    });

    // const favoriteMealIds = useSelector((state) => state.favoritesMeal.ids);

    // isMealFav = favoriteMealIds.includes(mealId)
    // console.log(isMealFav);


  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <View style={styles.innerContainer}>
          {/* <View style={styles.heart}>
            <IconButton
              name="heart-sharp"
              onPress={favoriteHandler}
              color="#df0d0d"
            />
          </View> */}
          <Image
            style={styles.image}
            source={{ uri: imageUrl }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{title}</Text>
          <MealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 12,
    margin: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    // overflow: Platform.select({ ios: "visible", android: "hidden" }),
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detail: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  pressed: {
    opacity: 0.75,
  },
  heart: {
    position: "absolute",
    top: 15,
    right: 10,
    zIndex: 100,
  },
});