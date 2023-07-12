import {View, SafeAreaView, FlatList, Text, Button, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import styles from '../css/styleSheet';

export default function RenderTweets({HeaderComponent,navigation}){
    function goToProfile(){
        navigation.navigate('Profile Screen');
    }

    function goToSingleTweet(){
        navigation.navigate('Tweet Screen');
    }

    function goToNewTweet(){
        navigation.navigate('New Tweet Screen');
    }
    const renderTweet = ({item}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={()=>{goToProfile()}}>
                <Image 
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }} />
            </TouchableOpacity>
            <View style={{flex:1}}>
                <TouchableOpacity  onPress={()=>{goToProfile()}} style={styles.flexRow}>
                    <Text numberOfLines={1} style={styles.username}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.userHandle}>@user handle</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.publishDate}>11m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={()=>goToSingleTweet()}>
                    <Text style={styles.tweetContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed accusamus facilis doloremque molestias officiis quidem delectus excepturi eos temporibus, id quae! Non reprehenderit itaque fugiat labore ducimus totam repudiandae.</Text>
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
        <FlatList
                data={DATA}
                renderItem={renderTweet}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=> <View style={styles.tweetSeparator}></View>}
                ListHeaderComponent={HeaderComponent}
            />
    );
}


const DATA = [
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