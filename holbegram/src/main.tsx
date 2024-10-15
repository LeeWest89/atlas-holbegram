import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "./Colors";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Lee</Text>
    </View>
  );
}

//Styles Go Here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.yellow,
  },
});