import React, { useState } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ItemChooseRoom({name_room,id_room,getRoomChosen,isChosen}) {

    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}
        onPress={() => {
            getRoomChosen(id_room);
        }}>
            <Icons name="home" size={40} color="#1aaa1a" style={styles.icon_style}/>
            <View style={styles.wrap_name_icon}>
                <Text style={styles.name_of_room}>{name_room}</Text>
                {
                    true && isChosen ? 
                    <Icons name="check" size={30} color="#1aaa1a" style={styles.icon_style}/>
                    : null
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems:"center",
        backgroundColor: "#fff",
        shadowColor:'#333',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        marginHorizontal: 4,
        borderRadius: 4,
        marginBottom: 4
    },
    wrap_name_icon: {
        flexDirection: "row",
        alignItems:"center",
        flex: 8
    },
    icon_style: {
        margin: 8,
        flex: 1
    },
    name_of_room: {
        marginLeft: 8,
        flex: 7 
    }
});

export default ItemChooseRoom;