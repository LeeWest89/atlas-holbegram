import { NavigationContainer } from '@react-navigation/native';
import Login from './holbegram/src/login';
import Register from './holbegram/src/register';
import AddPost from './holbegram/src/addPost';
import Home from './holbegram/src/home';
import Favorites from './holbegram/src/favorites';
import Profile from './holbegram/src/profile';
import Search from './holbegram/src/search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
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
          component={Home} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name='Favorites' 
          component={Favorites} 
          options={{ headerShown: false }}
        />

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