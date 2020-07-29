import React, { Component } from 'react';
import {View,Text,StyleSheet,Switch,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

class ItemRemoveListDevice extends Component{
    constructor(props) {
        super(props);
    }
    showIcons = (device_type) => {
        if(device_type == 'light'){
            return (
                <Icons size={42} name="lightbulb" color="#DFD616"/>
            );
        }
        else{
            return (
                <FontAwesome size={42} name="rss-square" color="#DFD616"/>
            );
        }
    }
    
    render(){
        const {device_id,device_type,removeFunc} = this.props;
        return (
            <TouchableOpacity style={styles.container}
            onPress={() => {
                removeFunc(device_id)
            }}>
                <View style={styles.inner_container}>
                    {
                        this.showIcons(device_type)
                    }
                    <View>
                        <Text style={{fontSize: 20, fontWeight: "600"}}>{device_id}</Text>
                    </View>
                    
                    <FontAwesome name="trash" size={28} color="#1aaa1a"/> 
                </View>
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

export default ItemRemoveListDevice;