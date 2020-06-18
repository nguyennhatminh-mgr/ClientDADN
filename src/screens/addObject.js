import React from 'react';
import {View, Text ,TouchableOpacity, StyleSheet, ImageBackground,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import lightSensor from '../assets/images/lightSensor.png';
import light from '../assets/images/light.png';
import room from '../assets/images/room.png';
import * as admin from '../constant/Constant';



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

export default class AddObjectScreen extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.route.params.id_user);
    }

    render(){
        return (
            <View style={Styles.listContainer}>

                <View style={Styles.header}>
                    <FontAwesome name="plus-circle" size={height/4} color={"#231903"}/>
                </View>
                <View style={Styles.listItem}>
                    <Items icon="rss-square" type="Sensor" 
                    onClick={()=>this.props.navigation.navigate('AddSensor', {id_user:this.props.route.params.id_user})} 
                    imageSrc={lightSensor}/>

                    <Items icon="lightbulb-o" type="Light" 
                    onClick={()=>this.props.navigation.navigate('AddLight', {id_user:this.props.route.params.id_user})} 
                     imageSrc={light}/>
                    {
                    this.props.route.params.id_user == admin.ID_ADMIN ?
                        <Items icon="home" type="Room"
                        onClick={()=>this.props.navigation.navigate('AddRoom', {id_user:this.props.route.params.id_user})} 
                        imageSrc={room}/>
                    : null
                    }
                </View> 
            </View>       
        );
    }
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
