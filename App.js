import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen2'
import NewTweetScreen from './screens/NewTweetScreen'
import TweetScreen from './screens/TweetScreen'
import ProfileScreen from './screens/ProfileScreen2';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = ()=>{
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}>
      <Tab.Screen name="Home3" component={HomeScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Search" component={SearchScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="search" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Notifications" component={NotificationsScreen} 
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="notifications" size={size} color={color} />
        )
      }}/>
  </Tab.Navigator>
  );
}
const HomeStackNavigator = ()=>{
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false

      }}>
        <Stack.Screen name="Tab" component={HomeTabNavigator} 
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="New Tweet Screen" component={NewTweetScreen} 
        options={{title: ''}}/>
        <Stack.Screen name="Tweet Screen" component={TweetScreen} 
        options={{title: ''}}/>
        <Stack.Screen name="Profile Screen" component={ProfileScreen} 
        options={{title: ''}}/>
      </Stack.Navigator>
  );
}
export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown: true,
      }}>
        <Drawer.Screen  name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  
  );
}

