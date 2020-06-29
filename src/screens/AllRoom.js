import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import * as Constant from '../constant/Constant';
import ItemInListRoomInfo from '../components/ItemInListRoomInfo';
export default class AllRoom extends React.Component{
    dataSource = [];
    constructor(props){
        super(props);
        this.state={
            dataSource : [],
            userID: this.props.route.params.id_user,
            
        }
    }
    componentDidMount(){
        this.getData();
    }
    async getData(){
       await fetch(`${Constant.IP_URL}${Constant.LIST_ROOM_INFO}/${this.state.userID}`)
       .then((response)=> response.json())
       .then((responseJson)=>{
           this.setState({
               dataSource: responseJson
           });
       })
       .catch(err=>console.log(err))
    }
    render(){
            const {navigation} = this.props;
            return(
                <View >
                {
                    true && !this.state.dataSource ?
                    (<View style={styles.container}>
                        <ActivityIndicator size="large" color="#0000ff"/>
                    </View>) :
                    (  
                            <ScrollView>
                                {
                                    this.state.dataSource.map((value,index) => {
                                        return (
                                            <ItemInListRoomInfo userID = {value.id} roomName ={value.name} key ={index} userName = {value.realname} navigation ={navigation}/>

                                        );
                                    })
                                }
                            </ScrollView>
                    )
                }
            </View>
            );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
});
