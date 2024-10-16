import { NavigationContainer } from '@react-navigation/native';
import Login from './holbegram/src/login';
import Register from './holbegram/src/register';
import AddPost from './holbegram/src/addPost';
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
          options={{ headerShown: false }} // Hide header if desired
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}