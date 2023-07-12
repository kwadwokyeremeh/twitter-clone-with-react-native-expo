import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Entypo, EvilIcons} from '@expo/vector-icons';

import styles from '../css/styleSheet';

export default function TweetScreen({navigation}){
    function goToProfile(){
        navigation.navigate('Profile Screen')
    }
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
               <TouchableOpacity 
               onPress={()=> goToProfile()}
               style={styles.flexRow}>
                <Image 
                    style={styles.profileAvatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }} />
                    <View>
                        <Text style={styles.username}>User Name</Text>
                        <Text style={styles.userHandle}>@handle</Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity >
                    <Entypo name="dots-three-vertical" size={24} color="black" />
               </TouchableOpacity>
            </View>
            <View style={[styles.signleTweetContentContainer, styles.tweetSeparator]}>
                    <Text style={styles.singleTweetContent}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora at aperiam obcaecati. Ex eius minima temporibus quis sequi deleniti soluta hic aspernatur quo veniam. Quam eveniet dolore iure? Corrupti.
                    </Text>
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
        
         </View>
    )
}
