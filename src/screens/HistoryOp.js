import React from 'react';
import {View, Text ,TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Items = ({type,onClick}) => {
    return (
        <View style={Styles.blockItem}>
            <TouchableOpacity onPress={onClick(type[0])}>
                <View style={Styles.item}>
                    <Text >{type[0]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClick(type[1])}>
                <View style={Styles.item}>
                    <Text>{type[1]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClick(type[2])}>
                <View style={Styles.item}>
                    <Text>{type[2]}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClick(type[3])}>
                <View style={Styles.item}>
                    <Text>{type[3]}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default function HistoryOp({navigation}){
    return (
        <View style={Styles.listContainer}>
            <Text style={Styles.title}>List Room</Text>
            <Items type={[1,2,3,4]} onClick={(room)=>navigation.navigate('ViewRoom')}></Items>
            <Items type={[5,6,7,8]} onClick={(room)=>navigation.navigate('ViewRoom')}></Items>
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
        width:80,
        height:80,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    blockItem:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})
