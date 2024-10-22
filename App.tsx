import { NavigationContainer } from '@react-navigation/native';
import Login from './holbegram/src/login';
import Register from './holbegram/src/register';
import AddPost from './holbegram/src/addPost';
import Home from './holbegram/src/home';
import Favorites from './holbegram/src/favorites';
import Profile from './holbegram/src/profile';
import Search from './holbegram/src/search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './holbegram/lib/firebaseConfig';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false}}
        />

        <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false}}
        />

        <Stack.Screen 
          name='AddPost' 
          component={AddPost} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name='Home'  
          options={{ headerShown: false }}
        >
          {() => <Home user={user} />}
        </Stack.Screen>

        <Stack.Screen 
          name='Favorites' 
          options={{ headerShown: false }}
        >
          {() => <Favorites user={user} />}
        </Stack.Screen>

        <Stack.Screen 
          name='Profile' 
          component={Profile} 
          options={{ headerShown: false }}
        />

        <Stack.Screen
        name='Search'
        component={Search}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}