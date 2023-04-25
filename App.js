import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RegistrationScreen} from './screens/RegistrationScreen';
import {LoginScreen} from './screens/LoginScreen';
import{Home} from './screens/Home';
import{PostsScreen} from './screens/PostsScreen';
import {CreatePostsScreen} from './screens/CreatePostsScreen';
import {MapScreen} from './screens/MapScreen';
import {CommentsScreen} from './screens/CommentsScreen';
import {ProfileScreen} from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Registration'>
    <Stack.Screen options={{headerShown: false}} name='Registration' component={RegistrationScreen}/>
    <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
    <Stack.Screen options={{headerShown: false}} name='Home' component={Home}/>
    <Stack.Screen options={{headerShown: false}} name='PostsScreen' component={PostsScreen}/>
    <Stack.Screen options={{headerShown: false}}  name='CreatePostsScreen' component={CreatePostsScreen}/>
    <Stack.Screen  options={{headerShown: false}} name='MapScreen' component={MapScreen}/>
    <Stack.Screen options={{headerShown: false}} name='CommentsScreen' component={CommentsScreen}/>
    <Stack.Screen options={{headerShown: false}} name='ProfileScreen' component={ProfileScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


