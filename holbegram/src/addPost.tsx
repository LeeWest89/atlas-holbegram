import { StatusBar } from "expo-status-bar";
import { Image ,Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Colors } from "./Colors";
import { UploadIcon } from "../components/upload";
import BottomBar from "../components/bottomBar";
import { useState } from "react";

export default function AddPost() {
  const [pickedImage, setPickedImage] = useState(null);

  const handleUploadPress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPickedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Add Post</Text>
        <Pressable onPress={handleUploadPress}>
          <UploadIcon />
        </Pressable>
      </View>

      <View style={styles.middleContainer}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.placeholderSquare} />
        ) : (
          <View style={styles.placeholderSquare} />
        )}

        <TextInput 
        style={styles.input}
        placeholder="Add a caption"
        placeholderTextColor="#999"
        />

        <Pressable
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>

        <Pressable
          style={styles.resetButton}
          onPress={() => setPickedImage(null)}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </Pressable>
      </View>

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

  middleContainer: {
    backgroundColor: "#E0E0E0",
    height: "85%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "#000",
    fontSize: 25,
  },

  input: {
    width: 370,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.teal,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333',
  },

  button: {
    width: 325,
    height: 70,
    borderRadius: 10,
    backgroundColor: Colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'none',
  },

  resetButton: {
    width: 325,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    color: '#333',
  },

  resetButtonText: {
    color: '#000',
    fontSize: 15,
    textTransform: 'none',
  },

  placeholderSquare: {
    width: 325,
    height: 325,
    marginBottom: 30,
    borderRadius: 20,
  },
});