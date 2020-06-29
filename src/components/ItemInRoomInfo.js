import React, { Component } from 'react';
import * as Constant from '../constant/Constant';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';


export default class ItemInRoomInfo extends Component{  
    render(){
        let urlIcon = (this.props.type == "Sensor" ||this.props.type == "sensor"||this.props.type == "SENSOR")? require('../assets/images/iconSensor_1.png') : require('../assets/images/icon_light.png');
        return(
            <View style ={styles.container}>
                <View style={styles.container1}>
                    <Image style={styles.image}
                            source ={urlIcon} ></Image>
                </View>
                <View style ={styles.container3}>
                    <Text style ={styles.decription}>Device ID: {this.props.id}</Text>
                    <Text style ={styles.decription}>Type: {this.props.type}</Text>
                    <Text style ={styles.decription}>Value: {this.props.value}</Text>
                    <Text style ={styles.decription}>Received time: {this.props.time}</Text>
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    decription:{
        fontSize: 15*Constant.screenHeight/748,
        color: '#1aaa1a',
    },
    container:{
        width: Constant.screenWidth, 
        height: 120*Constant.screenHeight/748, 
        flexDirection: "row", 
        backgroundColor: 'white', 
        padding: 10*Constant.screenHeight/748
    },
    container1:{
        flex: 2, 
        alignItems: 'center', 
        justifyContent: 'center'},
    container3:{
        flex: 8, 
        alignItems: 'flex-start', 
        justifyContent: 'center'},
    image:{
        height : 45*Constant.screenHeight/748, 
        width:45*Constant.screenHeight/748, 
        backgroundColor:'transparent'}
});
