import React from 'react';
import {View, Text ,TextInput,TouchableOpacity, StyleSheet, Button, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Items extends React.Component {

    render(){
        return (<View style={Styles.rowInfo}>
            <Text style={Styles.row_1_Info}>{this.props.type}</Text>
            {
                (this.props.type === "ID" || this.props.type === "Name")?
                    <TextInput 
                        style={Styles.row_2_Info} 
                        placeholder={this.props.placeholder} 
                        onChangeText={textParam => this.props.setText(textParam, this.props.type)}
                        placeholderTextColor="#D5E3E8" 
                        fontSize={height / 30}
                    >
                    </TextInput>
                :
                <Text style={Styles.roomInfo}>{this.props.room_id}</Text>
            }
        </View>);
    };
}

const Styles = StyleSheet.create({
    rowInfo:{
        marginHorizontal:"3%",
        marginVertical:"2%",
        height:"25%",
        marginBottom: 32
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
    },
    roomInfo:{
        color:"#000",
        fontSize:height / 25,
        borderBottomWidth:1,
        borderBottomColor:"#d8c593"
    },
    row_2_Info:{
        borderBottomWidth:1,
        borderBottomColor:"#d8c593",
        marginBottom: 16
    }
})



