import { StatusBar } from "expo-status-bar";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "./Colors";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from '../../types';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from "../lib/firebaseConfig";
import { useCurrentUser } from "./util";



export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const Logo = require('../assets/logo.png');


  async function handleLogin() {

    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password');
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch {
      Alert.alert('Error', 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Image
      style={styles.logo}
      source={Logo}
      />

      <Text style={styles.text}>Login</Text>

      <TextInput 
      style={styles.input}
      placeholder="Email"
      placeholderTextColor="#999"
      keyboardType="email-address"
      value={email}
      onChangeText={setEmail}
      />

      <TextInput 
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#999"
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
      />

      <Pressable
      style={styles.button}
      onPress={handleLogin}
      disabled={loading}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>

      <Pressable
      style={styles.newAccount}
      onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.newAccountText}>Create a new account</Text>
      </Pressable>
    </View>
  );
}

//Styles Go Here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    marginTop: 30,
    marginBottom: 17,
  },
  logo: {
    width: 275,
    height: 153,
  },
  input: {
    width: 370,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.teal,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#fff',
  },
  button: {
    width: 370,
    height: 50,
    borderRadius: 5,
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
  newAccount: {
    width: 370,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.blue,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  newAccountText: {
    color: '#999',
    fontSize: 15,
    textTransform: 'none',
  },
});