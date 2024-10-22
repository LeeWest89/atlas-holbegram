import { Image ,Pressable, StyleSheet, ScrollView, Text, TextInput, View } from "react-native";
import { Colors } from "./Colors";
import { LogoutIcon } from "../components/logout";
import BottomBar from "../components/bottomBar";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from '../../types';
import { handleLogoutPress } from "./util";
import { createdCaptions } from "../lib/firestore";

export default function EditProfile() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();



  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Edit Profile</Text>
        <Pressable onPress={() => handleLogoutPress(navigation)}>
          <LogoutIcon />
        </Pressable>
      </View>

      <View>
        <Text>Edit Profile Screen</Text>
      </View>

      <BottomBar />
    </View>
  );
}

// Styles Go Here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#E0E0E0",
  },

  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingVertical: 10,
    backgroundColor: "#fff"
  },

  text: {
    color: "#000",
    fontSize: 25,
  },

  nameText: {
    color: "#000",
    fontSize: 18,
    marginBottom: 30,
  },

  squaresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  image: {
    width: 137,
    height: 137,
  },

  placeholderProfile: {
    width: 120,
    height: 120,
    margin: 40,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.yellow,
  },
});