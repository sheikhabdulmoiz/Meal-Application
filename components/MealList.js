import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealList({ data }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    return (
      <MealItem
        imageUrl={item.imageUrl}
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        mealId = {item.id}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList data={data} renderItem={renderMealItem} />
    </View>
  );
}
export default MealList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});