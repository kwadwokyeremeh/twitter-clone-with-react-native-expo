import {Image, Platform, Text, TouchableOpacity, View} from "react-native";
import styles from "../css/styleSheet";
import {formatDistanceToNowStrict} from "date-fns";
import {EvilIcons} from "@expo/vector-icons";
import React from "react";

export default function RenderTweet({ navigation, tweet}){
    function goToProfile(userId){
        navigation.navigate('Profile Screen',{
            userId: userId,
        });
    }

    function goToSingleTweet(tweetId){
        navigation.navigate('Tweet Screen',{
            tweetId: tweetId,
        });
    }

    return(
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => {
                goToProfile(tweet.user.id)
            }}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: tweet.user.avatar
                    }}/>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => {
                    goToProfile(tweet.user.id)
                }} style={styles.flexRow}>
                    <Text numberOfLines={1} style={styles.username}>{tweet.user.name}</Text>
                    <Text numberOfLines={1} style={styles.userHandle}>@{tweet.user.username}</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1}
                          style={styles.publishDate}>{formatDistanceToNowStrict(new Date(tweet.created_at))}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => goToSingleTweet(tweet.id)}>
                    <Text style={styles.tweetContent}>{tweet.body}</Text>
                </TouchableOpacity>
                <View style={[styles.tweetEngagement, styles.spaceAround]}>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="comment" size={22} color='gray' style={{marginRight: 3}}/>
                        <Text style={styles.textGray}>435</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color='gray' style={{marginRight: 3}}/>
                        <Text style={styles.textGray}>45</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color='gray' style={{marginRight: 3}}/>
                        <Text style={styles.textGray}>1,245</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name={Platform.OS == 'ios' ? 'share-apple' : 'share-google'} size={22} color='gray'
                                   style={{marginRight: 3}}/>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
        );
}
