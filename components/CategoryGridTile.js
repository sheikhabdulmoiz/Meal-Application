import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.pressContainer,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
     borderWidth:0.55,
     borderColor:"#765a05",
    margin: 16,
    borderRadius: 8,
    backgroundColor: "skyblue",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    // overflow: Platform.select({ ios: "visible", android: "hidden" }),
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pressContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});