import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function SettingsScreen({navigation}){
    return (
        <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text> Settings </Text>
         </View>
    )
}