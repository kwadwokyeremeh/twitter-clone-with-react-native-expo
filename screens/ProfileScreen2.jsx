import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet,Linking,SafeAreaView, ActivityIndicator} from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import RenderTweetsList from "../components/RenderTweets";
import styleSheet from '../css/styleSheet';
import axios from '../axios';
import {format} from 'date-fns';

export default function ProfileScreen({route, navigation, user}){
const [profile, setProfile] = useState(null);
const [isLoading, setIsLoading] = useState(true);
let userId = user ? user.id :  route.params.userId;

    useEffect(()=>{

        getUserProfile();
    },[])

    function getUserProfile() {
        axios.get(`profile/${userId}`)
            .then(response=>{
                setProfile(response.data);
                setIsLoading(false);
            })
            .catch(error=>{
                console.log(error);
                setIsLoading(false);
            })
    }

    function goToNewTweet(){
        navigation.navigate('New Tweet Screen');
    }


    const ProfileHeader = () => (
    <>
        {isLoading ? 
            (<ActivityIndicator style={{marginTop:8}} size="large" color="gray"/>)
            :
            (
            
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
                        uri: profile.avatar
                    }} />
                <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followButtonLabel}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileHandle}>@{profile.username}</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.profileContainerText}>
                    {profile.profile}
                </Text>
            </View>

            <View style={styles.locationContainer}>
                <EvilIcons name="location" size={24} color='gray'/>
                <Text style={styles.textColor}>{profile.location}</Text>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    style={styleSheet.flexRow}
                    onPress={()=>Linking.openURL(profile.link)}
                    >
                        <EvilIcons name="link" size={24} color="gray"/>
                        <Text style={styles.linkColor}>{profile.linkText}</Text>
                    </TouchableOpacity>
                    <View style={[styleSheet.flexRow, styleSheet.ml4]}>
                        <EvilIcons name="calendar" size={24} color="gray"/>
                        <Text style={styles.textColor}>Joined {format(new Date(profile.created_at),'MMM yyyy')}</Text>
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
        )}
    </>
    );


    return (
        <SafeAreaView style={styleSheet.container}>
            <RenderTweetsList HeaderComponent={ProfileHeader} route={route} navigation={navigation} uri={`profile/${userId}/tweets`}/>
            <TouchableOpacity
                style={styleSheet.floatingButton}
                onPress={()=> goToNewTweet()}>
                    <AntDesign name="plus" size={26} color="white" />
                </TouchableOpacity>
        </SafeAreaView>
    );
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
