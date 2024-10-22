import { signOut } from 'firebase/auth';
import { Alert } from 'react-native';
import { auth } from '../lib/firebaseConfig';

export const handleLogoutPress = async (navigation: any) => {

  try {
    await signOut(auth);
    navigation.navigate('Login');
  } catch (error) {
    Alert.alert('Log out failed');
  }
};