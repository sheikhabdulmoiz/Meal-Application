
import { View, Text, StyleSheet } from "react-native";

function MealDetail({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detail, textStyle]}>{duration}m</Text>
      <Text style={[styles.detail, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detail, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detail: {
    marginHorizontal: 4,
    fontSize: 14,
    color: "black",
  },
});