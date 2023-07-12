import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: { 
        flex:1,
         backgroundColor: 'white',
    },
    tweetContainer: {
        flexDirection:'row',
        paddingHorizontal:12,
        paddingVertical:12
    },
    tweetSeparator:{
        borderBottomWidth:1,
        borderBottomColor: '#e5e7eb'
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21
    },
    profileAvatar: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 25
    },
    backgroundImage: {
        width:800,
        height: 120,
    },
    flexRow: {
        flexDirection: 'row'
    },
    username:{
        fontWeight: 'bold',
        color: '#222222'
    },
    userHandle:{
        marginHorizontal: 8,
        color: 'gray'
    },
    publishDate: {
        marginHorizontal: 8,
        color: 'gray'
    },
    tweetContent:{
        lineHeight:21,
        alignItems: 'center'
    },
    tweetContentContainer:{
        marginTop:4
    },
    singleTweetContentContainer:{
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    singleTweetContent:{
        lineHeight:30,
        fontSize: 20,
        marginLeft:12,
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    tweetEngagementStats: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomColor: '#e5e7eb',

    },
    tweetEngagementNumber:{
        fontWeight: 'bold'
    },
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 6
    },
    spaceAround: {
        justifyContent: 'space-around',
    },
    textGray: {
        color: 'gray'
    },
    ml4: {
        marginLeft: 16
    },
    floatingButton: {
        width:60,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d9bf1',
        position: 'absolute',
        bottom: 20,
        right: 12,
        borderRadius: 30
    },
    profileContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10
    }
})

