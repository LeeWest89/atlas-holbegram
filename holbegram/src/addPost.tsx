import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "./Colors";

export default function AddPost() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Post</Text>
    </View>
  );
}

// Styles Go Here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 25,
  },
});