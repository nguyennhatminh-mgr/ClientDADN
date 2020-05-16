import React from 'react';
import {View} from 'react-native';
import RoomInfo from '../components/RoomInfo';
import roomList from '../data/sample';

export default class MyRoom extends React.Component{
    constructor(props){
        super(props);
    }
    render (){
        let myRoomID = this.props.roomID;
        let myRoom = {};
        myRoom = roomList.find((item)=> item.roomID == myRoomID );
        return(
            <View>
                <RoomInfo roomID = {myRoom.roomID} owner ={myRoom.owner} lightOn ={myRoom.lightOn} numOfLight ={myRoom.numOfLight} brightness = {myRoom.brightness}/>
            </View>
        );
    }
}
