import { Text, StyleSheet, View } from "react-native";
function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.list} key={dataPoint}>
      <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 12,
    marginVertical: 4,
    paddingVertical:3,
    backgroundColor: "#b68c10",
    borderRadius: 6,
  },
  text: {
    textAlign: "center",
    color:"#ddbc62",
    fontSize:14,

  },
});