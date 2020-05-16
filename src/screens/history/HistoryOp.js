import React from 'react';
import {View, Text ,TouchableOpacity, StyleSheet} from 'react-native';

const Items = ({type,onClick}) => {
    return (
        <View style={Styles.blockItem}>
            <TouchableOpacity onPress={onClick}>
                <View style={Styles.item}>
                    <Text >Room {type[0]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClick}>
                <View style={Styles.item}>
                    <Text>Room {type[1]}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default function HistoryOp({navigation}){
    return (
        <View style={Styles.listContainer}>
            <Text style={Styles.title}>List Room</Text>
            <Items type={[1,2]} onClick={()=>navigation.navigate('Room')}></Items>
            <Items type={[3,4]} onClick={()=>navigation.navigate('Room')}></Items>
            <Items type={[5,6]} onClick={()=>navigation.navigate('Room')}></Items>
            <Items type={[7,8]} onClick={()=>navigation.navigate('Room')}></Items>
        </View>
    );
}

const Styles = StyleSheet.create({
    listContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title: {
        margin: 'auto',
        flex:1,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 30,
        alignItems: 'center',
    },
    item:{
        width: 100,
        height: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    blockItem:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})
