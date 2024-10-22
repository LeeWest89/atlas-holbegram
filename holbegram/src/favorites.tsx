import { Image ,Pressable, StyleSheet, ScrollView, Text, TextInput, View } from "react-native";
import { LogoutIcon } from "../components/logout";
import BottomBar from "../components/bottomBar";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FavoritesScreenNavigationProp } from '../../types';
import { handleLogoutPress } from "./util";
import { addFavorite, completedCaptions } from "../lib/firestore";

export default function Favorites({ user }) {
  const navigation = useNavigation<FavoritesScreenNavigationProp>();
  const [captions, setCaptions] = useState<any[]>([]);
  const [activeCaption, setActiveCaption] = useState<string | null>(null);

  useEffect(() => {
    const userId = user?.uid;
  
    if (!userId) {
      console.error("User ID is undefined");
      return;
    }
  
    const unsubscribe = completedCaptions(userId, (data) => {
      setCaptions(data);
    });
  
    return () => unsubscribe();
  }, [user]);

  const handleLongPress = (captionText: string) => {
    setActiveCaption(captionText);
  };

  const handleRelease = () => {
    setActiveCaption(null);
  };


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Favorites</Text>
        <Pressable onPress={() => handleLogoutPress(navigation)}>
          <LogoutIcon />
        </Pressable>
      </View>

      <ScrollView>
        {captions.map((caption) => (
          <Pressable
            key={caption.id}
            onLongPress={() => {
              handleLongPress(caption.text);
          }}
            onPressOut={handleRelease}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: caption.imageUrl }}
                style={styles.imageContainer}
                onError={() => {
                  console.error("Image loading failed.");
                }} // Handle image loading errors
              />
              {activeCaption === caption.text && (
                <View style={styles.captionOverlay}>
                  <Text style={styles.captionText}>{caption.text}</Text>
                </View>
              )}
            </View>
          </Pressable>
        ))}
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

  imageContainer: {
    position: 'relative',
    width: 410,
    height: 410,
    marginBottom: 10,
    borderRadius: 20,
  },

  captionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  captionText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});