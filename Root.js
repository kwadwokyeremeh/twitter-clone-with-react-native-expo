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
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/AuthProvider';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ForgotPasswordScreen from './screens/auth/ForgotPassword';

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
      <Tab.Screen name="Home1" component={HomeScreen} 
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

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen
          name='Login Screen'
          component={LoginScreen}
          options={{headerShown:false}}/>
        <Stack.Screen
          name='Register Screen'
          component={RegisterScreen}
          options={{headerShown:false}}/>
        <Stack.Screen
          name='Forgot Password'
          component={ForgotPasswordScreen}
          options={{headerShown:false}}/>
      </Stack.Navigator>
  )
}
export default function Root() {
  const [isLoading,setIsLoading] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  useEffect(()=>{
console.log(user);
  },[]);

  return (
  <>
  { user ? (
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
  )
  :
  (
    <NavigationContainer>
      <AuthStackNavigator/>

    </NavigationContainer>
  )}
  
  </>
  );
}

