import { StatusBar } from "expo-status-bar";
import { Pressable ,StyleSheet, Text, View } from "react-native";
import { Colors } from "../src/Colors";
import { HomeIcon } from "../components/home";
import { SearchIcon } from "../components/search";
import { PlusIcon } from "../components/plus";
import { HeartIcon } from "../components/heart";
import { ProfileIcon } from "../components/profile";
import { useState } from "react";

export default function BottomBar() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handlePress = (icon) => {
    setActiveIcon(icon)
  };

  return (
    <View style={styles.container}>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('home')}>
        <HomeIcon color={activeIcon === 'home' ? Colors.teal : '#000'} fill={activeIcon === 'home' ? Colors.teal : "none"} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'home' ? Colors.teal : '#000' }]}>Home Feed</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('search')}>
        <SearchIcon color={activeIcon === 'search' ? Colors.teal : '#000'} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'search' ? Colors.teal : '#000' }]}>Search</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('plus')}>
        <PlusIcon color={activeIcon === 'plus' ? Colors.teal : '#000'} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'plus' ? Colors.teal : '#000' }]}>Add Post</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('heart')}>
        <HeartIcon color={activeIcon === 'heart' ? Colors.teal : '#000'} fill={activeIcon === 'heart' ? Colors.teal : "none"} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'heart' ? Colors.teal : '#000' }]}>Favorites</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('profile')}>
        <ProfileIcon color={activeIcon === 'profile' ? Colors.teal : '#000'} fill={activeIcon === 'profile' ? Colors.teal : "none"} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'profile' ? Colors.teal : '#000' }]}>Profile</Text>
      </Pressable>
    </View>
  );
}

// Styles Go Here
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#000',
  },
});