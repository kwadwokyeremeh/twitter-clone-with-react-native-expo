import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import {View, Text, Button} from 'react-native';
import { AuthContext } from '../context/AuthProvider';

export default function SettingsScreen({navigation}){

    const {logout} = useContext(AuthContext);
    return (
        <View style={{ flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text> Settings </Text>
            <Button title='Logout' onPress={logout}/>
         </View>
    )
}