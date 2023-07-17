import React, {useEffect, useRef, useState} from "react";
import {View, SafeAreaView, FlatList, Text, Button, StyleSheet, Image, TouchableOpacity, Platform, ActivityIndicator} from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import styles from '../css/styleSheet';
import axios from '../axios'
import {formatDistanceToNowStrict} from 'date-fns'

export default function RenderTweets({HeaderComponent, route, navigation}){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [page, setPage] = useState(1);
    const [isAtEndOfScrolling, setIsAtEndOfScrolling] = useState(false);
    const flatListRef = useRef();
    
    useEffect(() => {
        
        getAllTweets();
    
    }, [page]);

    useEffect(() => {
        if(route.params?.newTweetAdded){
            getAllTweetsRefreshed();
            flatListRef.current.scrollToOffset({
                offset: 0,
        });
    }
        
    }, [route.params?.newTweetAdded]);


     function getAllTweets(){

        axios.get(`tweets?page=${page}`)
            .then(response => {
              if(page ===1){
                  setData(response.data.data);
              }else{
                setData([...data, ...response.data.data]);
              }

              if(!response.data.next_page_url){
                setIsAtEndOfScrolling(true);
              }
              setIsLoading(false);
              setIsRefreshing(false);
            }).catch(error => {
                console.log(error);
                setIsLoading(false);
                setIsRefreshing(false);
        })
    }
    
    function getAllTweetsRefreshed(){
        setPage(1);
        setIsAtEndOfScrolling(false);
        setIsRefreshing(false);

        axios.get(`tweets`)
           .then(response => {
             setData(response.data.data);
             setIsLoading(false);
             setIsRefreshing(false);
           }).catch(error => {
               console.log(error);
               setIsLoading(false);
               setIsRefreshing(false);
       })
   }

    function handleRefresh(){
      setPage(1);
      setIsAtEndOfScrolling(false);
      setIsRefreshing(true);
      getAllTweets();
    }

    function handleEnd(){
        setPage(page +1);
    }

    function goToProfile(){
        navigation.navigate('Profile Screen');
    }

    function goToSingleTweet(tweetId){
        navigation.navigate('Tweet Screen',{
            tweetId: tweetId,
        });
    }

    function goToNewTweet(){
        navigation.navigate('New Tweet Screen');
    }
    const renderTweet = ({item:tweet}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={()=>{goToProfile()}}>
                <Image 
                    style={styles.avatar}
                    source={{
                        uri: tweet.user.avatar
                    }} />
            </TouchableOpacity>
            <View style={{flex:1}}>
                <TouchableOpacity  onPress={()=>{goToProfile()}} style={styles.flexRow}>
                    <Text numberOfLines={1} style={styles.username}>{tweet.user.name}</Text>
                    <Text numberOfLines={1} style={styles.userHandle}>@{tweet.user.username}</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.publishDate}>{formatDistanceToNowStrict(new Date(tweet.created_at))}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={()=>goToSingleTweet(tweet.id)}>
                    <Text style={styles.tweetContent}>{tweet.body}</Text>
                </TouchableOpacity>
                <View style={[styles.tweetEngagement, styles.spaceAround]}>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                    <EvilIcons name="comment" size={22} color='gray' style={{marginRight: 3}} />
                        <Text style={styles.textGray}>435</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                    <EvilIcons name="retweet" size={22} color='gray' style={{marginRight: 3}} />
                        <Text style={styles.textGray}>45</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                    <EvilIcons name="heart" size={22} color='gray' style={{marginRight: 3}} />
                        <Text style={styles.textGray}>1,245</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                    <EvilIcons name={Platform.OS == 'ios' ? 'share-apple' : 'share-google'} size={22} color='gray' style={{marginRight: 3}} />
                    </TouchableOpacity>
                    
                </View>
            </View>
    
        </View>
    );
    return (
      <View style={styles.container}>
        {isLoading ?
        (<ActivityIndicator style={{marginTop:8}} size="large" color="gray"/>)
        :
        (
          <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderTweet}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=> <View style={styles.tweetSeparator}></View>}
                ListHeaderComponent={HeaderComponent}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                onEndReached={handleEnd}
                onEndReachedThreshold={0}
                ListFooterComponent={()=> !isAtEndOfScrolling && (<ActivityIndicator size="large" color="gray"/>)}
            />
        )}
      </View>
    );
}