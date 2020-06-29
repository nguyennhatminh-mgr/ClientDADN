import React, { Component } from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

class ItemInListRoom extends Component{
    render(){
        const {room_id,room_name,navigation} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.container}
            onPress={() => {
                navigation.navigate("ListDevice",{room_id: room_id,room_name: room_name});
            }}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Icons name="home" size={40} color="#1aaa1a" style={{marginRight: 12}}/>
                    <Text>Room {room_name}</Text>
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
        paddingHorizontal: 6,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    }
});

export default ItemInListRoom;