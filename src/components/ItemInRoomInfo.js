import React, { Component } from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';


export default class ItemInRoomInfo extends Component{  
    render(){
        let urlIcon = (this.props.type == "Sensor")? require('../assets/images/iconSensor.png') : require('../assets/images/icon_light.png');
        return(
            <View style ={styles.container}>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{height : 40, 
                            width:40, 
                            backgroundColor:'transparent'}}
                            source ={urlIcon} ></Image>
                </View>
                <View style ={{flex: 8, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Text style ={styles.decription}>Device ID: {this.props.id}</Text>
                    <Text style ={styles.decription}>Type: {this.props.type}</Text>
                    <Text style ={styles.decription}>Value: {this.props.value}</Text>
                    <Text style ={styles.decription}>Received time: {this.props.time}</Text>
                </View>
            </View>
        );
    }
    
}
const screenWidth =  Dimensions.get("window").width;
const screenHeight =  Dimensions.get("window").height;
const styles = StyleSheet.create({
    decription:{
        fontSize: 15,
        color: '#1aaa1a',
    },
    container:{width: screenWidth, height: 120, flexDirection: "row", backgroundColor: 'white'}
});
