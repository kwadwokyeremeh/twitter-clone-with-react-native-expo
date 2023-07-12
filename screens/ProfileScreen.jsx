import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet,Linking,SafeAreaView,FlatList, Button} from 'react-native';
import styleSheet from '../css/styleSheet';
import { EvilIcons, AntDesign } from "@expo/vector-icons";

export default function ProfileScreen({navigation}){
    function goToProfile(){
        navigation.navigate('Profile Screen');
    }

    function goToSingleTweet(){
        navigation.navigate('Tweet Screen');
    }

    function goToNewTweet(){
        navigation.navigate('New Tweet Screen');
    }
    const ProfileHeader = () => (
        <View style={[styleSheet.container]}>
            <Image 
                    style={styleSheet.backgroundImage}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1688025950970-2ffb840b8f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
                    }} />
            <View style={styles.avatarContainer}>
            <Image 
                    style={styles.profileAvatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }} />
                <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followButtonLabel}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.profileName}>Kwadwo Kyeremeh</Text>
                <Text style={styles.profileHandle}>@kwadwokyeremeh</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.profileContainerText}>
                    CEO, Team Lead,
                </Text>
            </View>

            <View style={styles.locationContainer}>
                <EvilIcons name="location" size={24} color='gray'/>
                <Text style={styles.textColor}>Kumasi, Ghana</Text>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    style={styleSheet.flexRow}
                    onPress={()=>Linking.openURL('https://google.com')}
                    >
                        <EvilIcons name="link" size={24} color="gray"/>
                        <Text style={styles.linkColor}>google.com</Text>
                    </TouchableOpacity>
                    <View style={[styleSheet.flexRow, styleSheet.ml4]}>
                        <EvilIcons name="calendar" size={24} color="gray"/>
                        <Text style={styles.textColor}>Joined March 2009</Text>
                    </View>
            </View>

            <View style={[styles.followContainer, styleSheet.tweetSeparator]}>
                <View style={styleSheet.flexRow}>
                    <Text style={styles.followItemNumber}>5,309</Text>
                    <Text style={styleSheet.ml4}>Following</Text>
                </View>
                <View style={[styleSheet.flexRow,styleSheet.ml4]}>
                    <Text style={styles.followItemNumber}>250,157</Text>
                    <Text style={styleSheet.ml4}>Followers</Text>
                </View>
            </View>
         </View>
    );
    const renderTweet = ({item}) => (
        <View style={styleSheet.tweetContainer}>
            <TouchableOpacity onPress={()=>{goToProfile()}}>
                <Image 
                    style={styleSheet.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }} />
            </TouchableOpacity>
            <View style={{flex:1}}>
                <TouchableOpacity  onPress={()=>{goToProfile()}} style={styleSheet.flexRow}>
                    <Text numberOfLines={1} style={styleSheet.username}>{item.title}</Text>
                    <Text numberOfLines={1} style={styleSheet.userHandle}>@user handle</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styleSheet.publishDate}>11m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleSheet.tweetContentContainer} onPress={()=>goToSingleTweet()}>
                    <Text style={styleSheet.tweetContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed accusamus facilis doloremque molestias officiis quidem delectus excepturi eos temporibus, id quae! Non reprehenderit itaque fugiat labore ducimus totam repudiandae.</Text>
                </TouchableOpacity>
                <View style={[styleSheet.tweetEngagement, styleSheet.spaceAround]}>
                    <TouchableOpacity style={[styleSheet.flexRow, styleSheet.ml4]}>
                    <EvilIcons name="comment" size={22} color='gray' style={{marginRight: 3}} />
                        <Text style={styleSheet.textGray}>435</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styleSheet.flexRow, styleSheet.ml4]}>
                    <EvilIcons name="retweet" size={22} color='gray' style={{marginRight: 3}} />
                        <Text style={styleSheet.textGray}>45</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styleSheet.flexRow, styleSheet.ml4]}>
                    <EvilIcons name="heart" size={22} color='gray' style={{marginRight: 3}} />
                        <Text style={styleSheet.textGray}>1,245</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styleSheet.flexRow, styleSheet.ml4]}>
                    <EvilIcons name={Platform.OS == 'ios' ? 'share-apple' : 'share-google'} size={22} color='gray' style={{marginRight: 3}} />
                    </TouchableOpacity>
                    
                </View>
            </View>

        </View>
    );



    return (
        
         <SafeAreaView style={styleSheet.container}>
         <FlatList
             data={DATA}
             renderItem={renderTweet}
             keyExtractor={item => item.id}
             ItemSeparatorComponent={()=> <View style={styleSheet.tweetSeparator}></View>}
             ListHeaderComponent={ProfileHeader()}
         />
         <TouchableOpacity
             style={styleSheet.floatingButton}
             onPress={()=> goToNewTweet()}>
                 <AntDesign name="plus" size={26} color="white" />
             </TouchableOpacity>
     </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    avatarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal:10,
        marginTop: -34
    },
    profileAvatar: {
        width: 80,
        height: 80,
        marginRight: 8,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: 'white'
    },
    followButton: {
        backgroundColor: '#0f1418',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24
    },
    followButtonLabel: {
        color: 'white',
        fontWeight: 'bold'
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222222'
    },
    profileHandle:{
        marginTop: 1,
        color: 'gray'
    },
    profileContainerText: {
        lineHeight:22
    },
    nameContainer:{
        paddingHorizontal:10,
        paddingVertical:2
    },
    profileContainer:{
        paddingHorizontal:10,
        marginTop:8
    },
    locationContainer:{
        flexDirection:'row',
        paddingHorizontal:10,
        marginTop:12,
    },
    linkContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 4
    },
    textColor:{
        color:'gray'
    },
    linkColor:{
        color: '#1d9bf1',
    },
    linkItem: {
        
    },
    followContainer:{
        flexDirection:'row',
        paddingHorizontal:10,
        marginTop:12,
    },
    followItemNumber: {
        fontWeight: 'bold',
    },
    
})

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