import React from 'react';
import {View, Text ,TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Items = ({icon, type, onClick}) => {
    return (
        <TouchableOpacity onPress={onClick}>     
            <View style={Styles.itemContainer}>
                <View style={Styles.iconBorder}>
                    <FontAwesome name={icon} size={20}/>
                </View>
                <Text style={Styles.Text}>them {type}</Text>
                <FontAwesome name="angle-right" size={26}/>
            </View>
        </TouchableOpacity>
    );
}

export default function AddObjectScreen({navigation}){
    return (
        <View style={Styles.listContainer}>
            <Items icon="rss-square" type="cam bien" onClick={()=>navigation.navigate('AddSensor')}/>
            <Items icon="lightbulb-o" type="den"/>
            <Items icon="building" type="phong"/>
            <Items icon="building" type="toa nha"/>
        </View>       
    );
}

const Styles = StyleSheet.create({
    listContainer:{
        backgroundColor:"#f0f8ff",
        opacity:50,
        height:"100%",
        flex:1,
        justifyContent:"center"
    },
    itemContainer:{
        backgroundColor:"#FFF",
        borderRadius:25,
        height:40,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"black",
        // ShadowRoot:"",
        marginBottom:30,
        marginHorizontal:"30%",
        width:"50%"
    },
    Text:{
        paddingLeft:5,
        fontSize:20,
        width:"70%"
    },
    iconBorder:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"#000",
        height: 10,
        width: 10,
        borderRadius: 10,  
    }

})
