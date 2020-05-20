import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

class ItemInListRoom extends Component{
    render(){
        const {room_name,navigation} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.container}
            onPress={() => {
                navigation.push("ListDevice");
            }}>
                <Icons name="home" size={40} color="#1aaa1a" style={{marginRight: 12}}/>
                <Text>Room {room_name}</Text>
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
        paddingHorizontal: 6,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems:"center"
    }
});

export default ItemInListRoom;