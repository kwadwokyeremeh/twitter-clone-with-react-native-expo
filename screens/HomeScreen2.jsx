import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RenderTweets from "../components/RenderTweets";

export default function HomeScreen({navigation}){
    function goToNewTweet(){
        navigation.navigate('New Tweet Screen');
    }
    return (
        <SafeAreaView style={styles.container}>
            <RenderTweets HeaderComponent={null} navigation={navigation}/>
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={()=> goToNewTweet()}>
                    <AntDesign name="plus" size={26} color="white" />
                </TouchableOpacity>
        </SafeAreaView>
    )
}
