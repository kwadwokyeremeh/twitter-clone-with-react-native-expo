import { NavigationContainer } from '@react-navigation/native';
import {React, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator} from 'react-native';
import styleSheet from '../css/styleSheet';
import axios from '../axios';

export default function NewTweetScreen({navigation}){
const [tweet, setTweet] = useState('');
const [isLoading, setIsLoading] = useState(false);

function postTweet(){
    if(tweet.length < 1){
        return;
    };
    setIsLoading(true);
    axios.post(`tweets`,{
        body: tweet
    })
    .then(response=>{
        navigation.navigate('Home1',{
            newTweetAdded: response.data,
        });
        setIsLoading(false);
    })
    .catch(error => {
        console.log(error)
        setIsLoading(false);
    })
}

    return (
        <View style={styleSheet.container}>
            <View style={[styles.tweetButtonContainer, styleSheet.flexRow]}>
                <Text style={[tweet.length > 250 ? styles.textRed:styleSheet.textGray, styles.characterLabel]}>Character left: {280 - tweet.length}</Text>
                <View style={[styleSheet.flexRow, styles.alignItem]}>
                 {isLoading &&
                    <ActivityIndicator size="small" color="gray" style={{marginRight:8}}/>
                 }
                    
                    <TouchableOpacity
                        style={isLoading || tweet.length <1 ? styles.disabledTweetButton : styles.tweetButton}
                        disabled={isLoading || tweet.length <1}
                        onPress={()=>(postTweet())}>
                            <Text style={styles.tweetButtonLabel}>Tweet</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.tweetBoxContainer}>
                <Image
                    style={styleSheet.avatar}
                    source={{
                        uri: "https://reactnative.dev/img/tiny_logo.png"
                    }}/>
                <TextInput
                style={styles.input} 
                onChangeText={setTweet}
                value={tweet}
                placeholder="What's happening?"
                placeholderTextColor="gray"
                multiline
                maxLength={280}
                />
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    tweetButtonContainer:{
        paddingHorizontal:6,
        paddingVertical:4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    tweetButton: {
        backgroundColor: '#1d9bf1',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
        marginLeft:16,
        marginTop:4

    },
    disabledTweetButton: {
        backgroundColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24,
        marginLeft:16,
        marginTop:4

    },
    characterLabel:{
        alignItems:'center',
        paddingBottom:6
    },
    tweetButtonLabel: {
        color: 'white',
        fontWeight: 'bold',
    },
    tweetBoxContainer:{
        flexDirection: 'row',
        padding:10
    },
    input: {
        flex:1,
        fontSize: 18,
        lineHeight: 28,
        padding:10
    },
    textRed: {
        color: 'red'
    }, 
    ml4: {
        marginLeft:16
    },
    alignItem: {
        alignItems:'center'
    }

})