import React, { Component } from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';

export default class ItemInHome extends Component{
    render(){
        const {image,title,screen} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.5} style={styles.container}
            onPress={() => {
                this.props.navigation.navigate(screen);
            }}>
                <View style={styles.rowinhomeitem}>
                    <Image style={styles.rowinhomeitemimg} source={image}/>
                    <Text>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4
    },
    rowinhomeitem: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    rowinhomeitemimg: {
        width: 60,
        height: 60
    }
});