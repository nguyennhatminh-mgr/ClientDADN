import React from 'react';
import {ScrollView} from 'react-native';
import roomList from '../data/sample'
import RoomInfo from '../components/RoomInfo';

export default class AllRoom extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (   
            <ScrollView horizontal = {true} pagingEnabled ={true}>
                {
                    roomList.map(
                        (item, index)=> (<RoomInfo key ={index} roomID = {item.roomID} owner ={item.owner} lightOn ={item.lightOn} numOfLight ={item.numOfLight} brightness = {item.brightness}/>
                    ))
                }
                
            </ScrollView>
        );
    }
}
