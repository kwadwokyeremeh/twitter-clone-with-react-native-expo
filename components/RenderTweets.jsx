import {useEffect, useState} from "react";
import {View, SafeAreaView, FlatList, Text, Button, StyleSheet, Image, TouchableOpacity, Platform, ActivityIndicator} from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import styles from '../css/styleSheet';
import axios from '../axios'
import {formatDistanceToNowStrict} from 'date-fns'

export default function RenderTweets({HeaderComponent,navigation}){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    
    useEffect(() => {
        return async () => {
              await getAllTweets();
        };
    }, []);


    async function getAllTweets(){
        await axios.get('api/tweets')
            .then(response => {
                setData(response.data)
                setIsLoading(false);
                setIsRefreshing(false);
            }).catch(error => {
                console.log(error);
                setIsLoading(false);
                setIsRefreshing(false);
        })
    }
    function handleRefresh(){
      setIsRefreshing(true);
      getAllTweets();
    }

    function goToProfile(){
        navigation.navigate('Profile Screen');
    }

    function goToSingleTweet({id}){
        navigation.navigate('Tweet Screen');
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
        {isLoading?
        (<ActivityIndicator size="large" color="gray"/>)
        :
        (
          <FlatList
                data={data}
                renderItem={renderTweet}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=> <View style={styles.tweetSeparator}></View>}
                ListHeaderComponent={HeaderComponent}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        )}
      </View>
    );
}


const Data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53afbb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9w1aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1w45571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbv28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd9lv1aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694la0f-3da1-471f-bd96-145571e2w9d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbmea-c1b1-46c2-aed5-3ad5a3abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac6p8afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3daa1-471f-bd96-145571ge29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-c1bq1-46c2-aed5-3ad53abb2g8ba',
        title: 'First Item',
      },
      {
        id: '3ac68qafc-c605-48d3-a4f8-fbd91ara97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bdq96-145571e2h9d72',
        title: 'Third Item',
      },
  ];