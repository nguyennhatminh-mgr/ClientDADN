import React from 'react';
import {View, Text ,TouchableOpacity, StyleSheet, ImageBackground,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import lightSensor from '../assets/images/lightSensor.png';
import light from '../assets/images/light.png';
import room from '../assets/images/room.png';
import building from '../assets/images/building.png';

const Items = ({icon, type, onClick, imageSrc}) => {
    return (
            <TouchableOpacity onPress={onClick} style={Styles.Items}>
                    <ImageBackground source={imageSrc} style={Styles.image} imageStyle={{ borderRadius: 10}}> 
                        <FontAwesome name={icon} size={30}/>
                        <Text style={Styles.Text}>Add {type}</Text>
                        <FontAwesome name="angle-right" size={30}/>
                    </ImageBackground>     
            </TouchableOpacity>
    );
}

export default function AddObjectScreen({navigation}){
    return (
        <View style={Styles.listContainer}>

            <View style={Styles.header}>
                <FontAwesome name="plus-circle" size={height/4} color={"#231903"}/>
            </View>

            <View style={Styles.listItem}>
                <Items icon="rss-square" type="Sensor" onClick={()=>navigation.navigate('AddSensor')} imageSrc={lightSensor}/>
                <Items icon="lightbulb-o" type="Light" onClick={()=>navigation.navigate('AddLight')} imageSrc={light}/>
                <Items icon="home" type="Room" onClick={()=>navigation.navigate('AddRoom')} imageSrc={room}/>
                {/* <Items icon="building" type="Building" imageSrc={building}/> */}
            </View> 
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
    header: {
        flex: 3,
        backgroundColor: "#1aaa1a",
        alignItems:"center",
        justifyContent:"center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        flexDirection:"row",
        backgroundColor:"#f7f7f7",
        alignItems:"center",
        justifyContent:"center",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        height:"100%",
        width:"100%",
        borderRadius:20,
      },
    header_icon: {
    },
    listItem:{
        flex:6,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-evenly"

    },
    Items:{
        height:"20%",
        borderRadius:20,
        width:"80%", 
    },
    Text:{
        borderRadius:20,
        paddingLeft:5,
        fontSize: height/30,
        width:"80%"
    },
})
