import { NavigationContainer } from '@react-navigation/native';
import React,{useContext, useEffect, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert, ToastAndroid} from 'react-native';
import { Entypo, EvilIcons, AntDesign} from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import styles from '../css/styleSheet';
import axios from '../axios';
import { format } from 'date-fns';
import { AuthContext } from '../context/AuthProvider';

export default function TweetScreen({route, navigation}){
    const [tweet, setTweet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const modalizeRef = useRef(null);
    const {user} =useContext(AuthContext);

    useEffect(() => {
        getTweet();
    }, []);


    function getTweet(){
        axios.get(`tweets/${route.params.tweetId}`)
                .then(response => {
                    setTweet(response.data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setIsLoading(false);
                    
            })
    }

    function goToProfile(userId){
        navigation.navigate('Profile Screen',{
            userId:userId
        })
    }

    function deleteTweet(){
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
        axios.delete(`tweets/${route.params.tweetId}`)
                .then(response => {
                    <ToastAndroid.TOP/>
                    navigation.navigate('Home1',{
                        tweetDeleted:true
                    });
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setIsLoading(false);
                    
            })
    }
    function showAlert(){
        Alert.alert('Delete this tweet?',null,[
            {
                text:'Cancel',
                onPress:()=>modalizeRef.current?.close(),
                style:'cancel'
            },
            {
                text:'Ok',
                onPress:()=>deleteTweet(),
                style:'default'
            }
        ])
    }

    return (
        <View style={styles.container}>
            
            {isLoading ? 
            (<ActivityIndicator style={{marginTop:8}} size="large" color="gray"/>)
            :
            (
                <>
                    <View style={styles.profileContainer}>
                        <TouchableOpacity 
                            onPress={()=> goToProfile(tweet.user.id)}
                            style={styles.flexRow}>
                            <Image 
                                style={styles.profileAvatar}
                                source={{
                                    uri: tweet.user.avatar
                                }} />
                            <View>
                                <Text style={styles.username}>{tweet.user.name}</Text>
                                <Text style={styles.userHandle}>@{tweet.user.username}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>modalizeRef.current?.open()}>
                                <Entypo name="dots-three-vertical" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.signleTweetContentContainer, styles.tweetSeparator]}>
                        <Text style={styles.singleTweetContent}>
                            {tweet.body}
                        </Text>
                        <View style={styleSheet.tweetTimeStampContainer}>
                            <Text style={styleSheet.tweetTimeStampText}>{format(new Date(tweet.created_at),'h:mm a')}</Text>
                            <Text style={styleSheet.tweetTimeStampText}>&middot;</Text>
                            <Text style={styleSheet.tweetTimeStampText}>{format(new Date(tweet.created_at),'dd MMM.yy')}</Text>
                            <Text style={styleSheet.tweetTimeStampText}>&middot;</Text>
                            <Text style={[styleSheet.tweetTimeStampText, styleSheet.linkColor]}>Twitter for Android</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.tweetEngagementStats, styles.spaceAround, styles.tweetSeparator]}>
                        <View style={styles.flexRow}>
                            <Text style={styles.tweetEngagementNumber}>654</Text>
                            <Text style={styles.tweetEngagementLabel}>Retweets</Text>
                        </View>
                        <View style={[styles.ml4, styles.flexRow]}>
                            <Text style={styles.tweetEngagementNumber}>654</Text>
                            <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
                        </View>
                        <View style={[styles.ml4, styles.flexRow]}>
                            <Text style={styles.tweetEngagementNumber}>3,654</Text>
                            <Text style={styles.tweetEngagementLabel}>Likes</Text>
                        </View>
                    </View>
                    <View style={[styles.tweetEngagementStats, styles.tweetSeparator, styles.spaceAround]}>
                            <TouchableOpacity>
                            <EvilIcons name="comment" size={32} color='gray' style={{marginRight: 3}} />
                                
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                            <EvilIcons name="retweet" size={32} color='gray' style={{marginRight: 3}} />
                                
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                            <EvilIcons name="heart" size={32} color='gray' style={{marginRight: 3}} />
                                
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                            <EvilIcons name={Platform.OS == 'ios' ? 'share-apple' : 'share-google'} size={32} color='gray' style={{marginRight: 3}} />
                            </TouchableOpacity>
                            
                    </View>
                    <Modalize ref={modalizeRef} snapPoint={200}>
                        <View style={styleSheet.modal}>
                            <TouchableOpacity style={[styles.flexRow,styleSheet.menuButton]}>
                                <AntDesign name="pushpino" size={24} color="#222" />
                                <Text style={styleSheet.menuButtonText}>Pin Tweet</Text>
                            </TouchableOpacity>
                            {user.id === tweet.user.id && (
                                <TouchableOpacity 
                                    onPress={()=>{showAlert}}
                                    style={[styles.flexRow,styleSheet.menuButton]}>
                                    <AntDesign name="delete" size={24} color="#222" />
                                    <Text style={styleSheet.menuButtonText}>Delete Tweet</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </Modalize>
                </>
            )
            }
         </View>
    )
}

const styleSheet = StyleSheet.create({
    tweetTimeStampContainer:{
        flexDirection:'row',
        marginTop:12,
        marginLeft:12
    },
    tweetTimeStampText:{
        color:'gray',
        marginRight: 6,
    },
    linkColor: {
        color: '#1d9bf1'
    },
    modal:{
        paddingHorizontal:24,
        paddingVertical:32
    },
    menuButton:{
        alignItems:'center',
        marginBottom:32
    },
    menuButtonText:{
        fontSize:20,
        color:'#222',
        marginLeft:12
    }
})