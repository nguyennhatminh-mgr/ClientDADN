import React, { Component } from 'react';
import {View,Text,StyleSheet,Switch,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

class ItemInListDevice extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isSwitch: false,
            lightLevel: 0
        }
    }

    toggleSwitch = () => {
        this.setState({
            isSwitch: ! this.state.isSwitch
        });
    }

    showIcons = () => {
        if(this.state.isSwitch){
            return (
                <Icons size={42} name="lightbulb-on" color="#DFD616"/>
            );
        }
        else{
            return (
                <Icons size={42} name="lightbulb" color="#DFD616"/>
            );
        }
        // return (
        //     <Icons size={42} name="lightbulb-on" color="#DFD616"/>
        // );
    }

    showText = () => {
        if(this.state.isSwitch){
            return "ON";
        }
        else{
            return "OFF";
        }
    }
    
    componentDidMount() {
        const {value} = this.props;
        if(value <= 0){
            this.setState({
                isSwitch: false
            });
        }
        else{
            this.setState({
                isSwitch: true
            });
        }
    }

    isChangeLightLevel =(lightLevel) => {
        this.setState({
            lightLevel: lightLevel
        });
    }

    render(){
        const {device_id,room_id,value,room_name} = this.props;
        return (
            <TouchableOpacity style={styles.container}
            onPress={() => {
                this.props.navigation.navigate("ControlLight",{device_id: device_id, value: this.props.value,room_id: room_id,room_name:room_name})
            }}>
                <View style={styles.inner_container}>
                    {
                        this.showIcons()
                    }
                    <View>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>{device_id}</Text>
                        <Text style={{textAlign:"center"}}>Value: {value}</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.toggleSwitch}
                        value={this.state.isSwitch}
                        disabled
                    />
                    {/* <FontAwesome name="baseball-ball" size={18} color="#1aaa1a"/> */}
                </View>
                {/* <Text>{new Date(this.props.received_time).toISOString()}</Text> */}
                {/* <TextInput onChangeText={(lightLevel) => {this.isChangeLightLevel(lightLevel)}} placeholder="Light level"/> */}
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
        paddingHorizontal: 8,
        paddingVertical: 12        
    },
    inner_container: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    }
});

export default ItemInListDevice;