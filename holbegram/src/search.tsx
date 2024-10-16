import { StatusBar } from "expo-status-bar";
import { Image ,Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Colors } from "./Colors";
import { LogoutIcon } from "../components/logout";
import BottomBar from "../components/bottomBar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SearchScreenNavigationProp } from '../../types';

export default function Search() {
  const navigation = useNavigation<SearchScreenNavigationProp>();

  const handleLogoutPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Search</Text>
        <Pressable onPress={handleLogoutPress}>
          <LogoutIcon />
        </Pressable>
      </View>

      <BottomBar />
    </View>
  );
};

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
});