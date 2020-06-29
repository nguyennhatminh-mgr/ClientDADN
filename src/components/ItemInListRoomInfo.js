import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ItemInListRoomInfo extends Component{
    handleClick = (navigation, userID, owner, roomid)=>
    {
        navigation.navigate("RoomInfo", {userID: userID, owner: owner, roomID: roomid});
    }
    render(){
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.container}
            onPress ={()=>this.handleClick(this.props.navigation, this.props.userID, this.props.userName, this.props.roomName)}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    {/* <Icons name="home" size={40} color="#1aaa1a" style={{marginRight: 12}}/>
                    <Text>Room: {roomName}</Text> */}
                    <View style ={{flex: 3}}>
                        <Icons name="home" size={40} color="#1aaa1a" style={{marginRight: 12}}/>
                    </View>
                    <View style ={{flex: 5}}>
                <Text>Room ID: {this.props.roomName}</Text>
                        <Text>Owner: {this.props.userName}</Text>
                    </View>
                </View>
                <AntDesign name="arrowright" color="#8BC27C" size={28}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 4,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4,
        paddingHorizontal: 15,
        paddingVertical: 30,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center"
    }
});
