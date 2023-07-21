import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import RenderTweets from '../components/RenderTweets';

export default function SearchScreen({route, navigation}){
    return (
        <RenderTweets HeaderComponent={null} route={route} navigation={navigation} uri={`all/tweets`}/>
    )
}