import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import ItemInListRoom from '../../components/ItemInListRoom';
let listRoom = ["1","2","3","4"];

class ListRoom extends Component{
    render(){
        const {navigation} = this.props;
        return (
            <ScrollView>
                {
                    listRoom.map((value,index) => {
                        return (
                            <ItemInListRoom navigation={navigation} key={index} room_name={value}/>
                        );
                    })
                }
            </ScrollView>
        );
    }
}
export default ListRoom;