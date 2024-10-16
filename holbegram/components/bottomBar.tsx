import { StatusBar } from "expo-status-bar";
import { Pressable ,StyleSheet, Text, View } from "react-native";
import { Colors } from "../src/Colors";
import { HomeIcon } from "../components/home";
import { SearchIcon } from "../components/search";
import { PlusIcon } from "../components/plus";
import { HeartIcon } from "../components/heart";
import { ProfileIcon } from "../components/profile";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

type NavigationType = NativeStackNavigationProp<RootStackParamList>;
type RouteType = RouteProp<RootStackParamList, keyof RootStackParamList>;

export default function BottomBar() {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute<RouteType>();
  const currentRoute = route.name;
  const [activeIcon, setActiveIcon] = useState(currentRoute);

  useEffect(() => {
    setActiveIcon(currentRoute);
  }, [currentRoute]);

  const handlePress = (icon) => {
    switch (icon) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'search':
        navigation.navigate('Search');
        break;
      case 'plus':
        navigation.navigate('AddPost');
        break;
      case 'heart':
        navigation.navigate('Favorites');
        break;
      case 'profile':
        navigation.navigate('Profile');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('home')}>
        <HomeIcon color={activeIcon === 'Home' ? Colors.teal : '#999'} fill={activeIcon === 'Home' ? Colors.teal : "none"} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'Home' ? Colors.teal : '#999' }]}>Home Feed</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('search')}>
        <SearchIcon color={activeIcon === 'Search' ? Colors.teal : '#999'} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'Search' ? Colors.teal : '#999' }]}>Search</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('plus')}>
        <PlusIcon color={activeIcon === 'AddPost' ? Colors.teal : '#999'} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'AddPost' ? Colors.teal : '#999' }]}>Add Post</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('heart')}>
        <HeartIcon color={activeIcon === 'Favorites' ? Colors.teal : '#999'} fill={activeIcon === 'Favorites' ? Colors.teal : "none"} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'Favorites' ? Colors.teal : '#999' }]}>Favorites</Text>
      </Pressable>

      <Pressable style={styles.iconContainer} onPress={() => handlePress('profile')}>
        <ProfileIcon color={activeIcon === 'Profile' ? Colors.teal : '#999'} fill={activeIcon === 'Profile' ? Colors.teal : "none"} />
        <Text style={[styles.iconLabel, { color: activeIcon === 'Profile' ? Colors.teal : '#999' }]}>Profile</Text>
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
    color: '#999',
  },
});