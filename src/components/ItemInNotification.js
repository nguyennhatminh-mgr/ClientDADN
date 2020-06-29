import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const ItemInNotification = props => {
    const {value} = props;
    let date = new Date(value.createdAt);
    let bgColor = "#fff";
    if(value.status === 0){
        bgColor="#BBD9E7";
    }
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5}>
            <View style={{
                flexDirection: "row",
                backgroundColor: bgColor,
                paddingHorizontal: 8,
                paddingVertical: 12,
                borderRadius: 4  }}>
                <Icons size={30} name="bell" color="#D79B10" style={styles.icon_style}/>
                <View style={styles.wrap_content}>
                    <Text style={{fontSize: 15}}>{value.content}</Text>
                    <Text>{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 6,
        marginVertical: 4,
        backgroundColor: "#fff",
        shadowColor:'#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width:2, height:2},
        elevation: 6,
        borderRadius: 4
    },
    icon_style: {
        margin: 4
    },
    wrap_content: {
        paddingHorizontal: 4
    }
});

export default ItemInNotification;