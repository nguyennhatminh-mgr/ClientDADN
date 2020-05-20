import React, { Component } from 'react';
import {View,Text,StyleSheet,Switch} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

class ItemInListDevice extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isSwitch: false
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
    }

    showText = () => {
        if(this.state.isSwitch){
            return "ON";
        }
        else{
            return "OFF";
        }
    }
    
    render(){
        const {device_name} = this.props;
        return (
            <View style={styles.container}>
                {
                    this.showIcons()
                }
                <Text>Light {device_name}: {this.showText()}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.toggleSwitch}
                    value={this.state.isSwitch}
                />
            </View>
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
        paddingVertical: 12,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    }
});

export default ItemInListDevice;