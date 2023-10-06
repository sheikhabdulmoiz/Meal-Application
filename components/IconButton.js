import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton({ name, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} color={color} size={24} />
    </Pressable>
  );
}
export default IconButton;