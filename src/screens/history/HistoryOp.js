import React from 'react';
import {View, Text ,TouchableOpacity,ScrollView, StyleSheet} from 'react-native';

const Items = ({name,id,owner,onClick}) => {
    return (
            <TouchableOpacity style={Styles.blockItem} onPress={onClick}>
                <View style={Styles.item}>
                    <Text> Room {name}</Text>
                    <Text> ID: {id}</Text>
                    <Text> User: {owner} </Text>
                </View>
            </TouchableOpacity>
    );
}

export default function HistoryOp({navigation}){
    return (
        <ScrollView style={Styles.listContainer}>
            <Text style={Styles.title}>List Room</Text>
            <View style={Styles.container}>
                <Items name={101} id={1} owner={'A'} onClick={()=>navigation.navigate('Room')}></Items>
                <Items name={102} id={2} owner={'B'} onClick={()=>navigation.navigate('Room')}></Items>
            </View>

            <View style={Styles.container}>
                <Items name={103} id={3} owner={'C'} onClick={()=>navigation.navigate('Room')}></Items>
                <Items name={104} id={4} owner={'D'} onClick={()=>navigation.navigate('Room')}></Items>
            </View>

            <View style={Styles.container}>
                <Items name={105} id={5} owner={'A'} onClick={()=>navigation.navigate('Room')}></Items>
                <Items name={106} id={6} owner={'B'} onClick={()=>navigation.navigate('Room')}></Items>
            </View>

            <View style={Styles.container}>
                <Items name={107} id={7} owner={'C'} onClick={()=>navigation.navigate('Room')}></Items>
                <Items name={108} id={8} owner={'D'} onClick={()=>navigation.navigate('Room')}></Items>
            </View>
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    listContainer: {
        flex:1,
    },
    title: {
        flex:1,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 30,
        textAlign:'center',
        alignItems: 'center',
        fontFamily:'Times New Roman'
    },
    
    blockItem:{
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        borderRadius: 4,
        justifyContent:'center',
    },

    container:{
        flex:1,
        flexDirection:'row',
    }
})
