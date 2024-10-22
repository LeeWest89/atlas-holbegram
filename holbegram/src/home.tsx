import { Image, Pressable, StyleSheet, ScrollView, Text, View } from "react-native";
import { LogoutIcon } from "../components/logout";
import BottomBar from "../components/bottomBar";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from '../../types';
import { handleLogoutPress } from "./util";
import { allCaptions, updateCompleted, addFavorite } from "../lib/firestore";

export default function Home({ user }) {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [captions, setCaptions] = useState([]);
  const [activeCaption, setActiveCaption] = useState<string | null>(null);
  const [tapCount, setTapCount] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(0);

  useEffect(() => {
    const unsubscribe = allCaptions((data) => {
      const captionsWithId = data.map(caption => ({
        ...caption,
        id: caption.id
      }));
      setCaptions(captionsWithId);
    });
    return () => unsubscribe();
  }, []);

  const handleLongPress = (captionText: string) => {
    setActiveCaption(captionText);
  };

  const handleRelease = () => {
    setActiveCaption(null);
  };

  const handleTap = (id: string) => {
    const currentTime = Date.now();
    const timeBetweenTaps = currentTime - lastTapTime;
  
    if (timeBetweenTaps < 300) {
      updateCompleted(id, true);
      setTapCount(0);
    } else {
      setTapCount(1);
    }
  
    setLastTapTime(currentTime);
  };

  const handleFavorite = (captionId: string) => {
    const userId = user?.uid;
    if (userId) {
      addFavorite(captionId, userId)
        .catch((error) => console.error("Error adding favorite: ", error));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Home</Text>
        <Pressable onPress={() => handleLogoutPress(navigation)}>
          <LogoutIcon />
        </Pressable>
      </View>

      <ScrollView>
      {captions.map((caption) => (
        <Pressable
          key={caption.id}
          onLongPress={() => handleLongPress(caption.text)}
          onPressOut={handleRelease}
          onPress={() => {
            handleTap(caption.id); 
            handleFavorite(caption.id);
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: caption.imageUrl }}
              style={styles.imageContainer}
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
};

// Styles Go Here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
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
    backgroundColor: "#fff",
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