import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import RoomInfo from '../components/RoomInfo';
import * as Constant from '../constant/Constant';
import ItemInListRoomInfo from '../components/ItemInListRoomInfo';
export default class AllRoom extends React.Component{
    _isMounted = false;
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
       await fetch(`http://192.168.1.102:3000/listroominfo/${this.state.userID}`)
       .then((response)=> response.json())
       .then((responseJson)=>{
           this.setState({
               dataSource: responseJson
           });
       })
       .catch(err=>console.log(err))
    }
    convertDate =(dateTime)=>
     {
        let time = new Date(dateTime);
        let timeString = time.getDate() + "/"
         + (time.getMonth()+1)  + "/" 
         + time.getFullYear() + " , "  
         + time.getHours() + ":"  
         + time.getMinutes() + ":" 
         + time.getSeconds();
        return timeString;
     }   
    handleViewDetail = (navigation, userID)=>
    {
      navigation.navigate('Control', {screen: 'ListDevice', params: {userID: userID}});
    }
    render(){
            const {navigation} = this.props;
            return(
                <View style={{marginTop: 30}}>
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
                                            <ItemInListRoomInfo userID = {value.userID} roomName ={value.id_room} key ={index} userName = {value.realname} navigation ={navigation}/>

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
