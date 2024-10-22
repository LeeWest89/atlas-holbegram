import { StatusBar } from "expo-status-bar";
import { Image ,Pressable, StyleSheet, ScrollView, Text, TextInput, View } from "react-native";
import { Colors } from "./Colors";
import { LogoutIcon } from "../components/logout";
import BottomBar from "../components/bottomBar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from '../../types';
import { handleLogoutPress } from "./util";

export default function Profile() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Profile</Text>
        <Pressable onPress={() => handleLogoutPress(navigation)}>
          <LogoutIcon />
        </Pressable>
      </View>

      <ScrollView>
        <View style={styles.placeholderSquare}></View>
        <View style={styles.placeholderSquare}></View>
        <View style={styles.placeholderSquare}></View>
      </ScrollView>

      <BottomBar />
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
    marginTop: 40,
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingVertical: 10,
  },

  text: {
    color: "#000",
    fontSize: 25,
  },

  placeholderSquare: {
    width: 410,
    height: 410,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blueLight,
  },
});