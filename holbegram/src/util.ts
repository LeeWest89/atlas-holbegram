import { signOut, User } from 'firebase/auth';
import { Alert } from 'react-native';
import { auth } from '../lib/firebaseConfig';
import { useEffect, useState } from 'react';

export const handleLogoutPress = async (navigation: any) => {

  try {
    await signOut(auth);
    navigation.navigate('Login');
  } catch (error) {
    Alert.alert('Log out failed');
  }
};

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (user);
};