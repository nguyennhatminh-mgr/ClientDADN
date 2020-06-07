import React from 'react';
import {View, Text ,TextInput,TouchableOpacity, StyleSheet, Button, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Items extends React.Component {

    render(){
        return (<View style={Styles.rowInfo}>
            <Text style={Styles.row_1_Info}>{this.props.type}</Text>
            <TextInput 
                style={Styles.row_2_Info} 
                placeholder={this.props.placeholder} 
                onChangeText={textParam => this.props.setText(textParam, this.props.type)}
                placeholderTextColor="#000" 
                fontSize={height / 30}
            >
            </TextInput>
        </View>);
    };
}

const Styles = StyleSheet.create({
    rowInfo:{
        marginHorizontal:"3%",
        borderBottomWidth:1,
        borderBottomColor:"#d8c593",
        marginVertical:"2%",
        height:"25%"
    },
    row_1_Info:{
      height:"50%",
      fontSize:height / 40,
      color:"#708160",
      fontWeight:"100"
    },
    placeholder:{
      height:"50%",
      fontSize:height / 10,
      color:"#000",
    }
})



