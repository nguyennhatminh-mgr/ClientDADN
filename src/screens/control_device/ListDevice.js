import React, { Component } from 'react';
import {View,Text,ScrollView} from 'react-native';
import ItemInListDevice from '../../components/ItemInListDevice';
let listDevice = ["1","2","3","4"];

class ListDevice extends Component{
    render(){
        return (
            <ScrollView>
                {
                    listDevice.map((value,index) => {
                        return (
                            <ItemInListDevice key={index} device_name={value}/>
                        );
                    })
                }
            </ScrollView>
        );
    }
}

export default ListDevice;