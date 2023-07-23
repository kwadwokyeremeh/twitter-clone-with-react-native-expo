import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { AuthProvider } from './context/AuthProvider';
import Root from './Root';


export default function App() {
  Navigation.registerComponent('com.myApp.WelcomeScreen', () => gestureHandlerRootHOC(Root));

  return (
  <AuthProvider>
    <Root />
  </AuthProvider>
  );
}