import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RenderTweets from "../components/RenderTweets";

export default function HomeScreen({route,navigation}){
    function goToNewTweet(){
        navigation.navigate('New Tweet Screen');
    }
    return (
        <SafeAreaView style={styles.container}>
            <RenderTweets HeaderComponent={null} route={route} navigation={navigation} uri={`tweets`}/>
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={()=> goToNewTweet()}>
                    <AntDesign name="plus" size={26} color="white" />
                </TouchableOpacity>
        </SafeAreaView>
    )
}
