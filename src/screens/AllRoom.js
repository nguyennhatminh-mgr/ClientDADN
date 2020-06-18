import React from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import RoomInfo from '../components/RoomInfo';
import * as Constant from '../constant/Constant';
export default class AllRoom extends React.Component{
    _isMounted = false;
    dataSource = [];
    constructor(props){
        super(props);
        this.state={
            dataSource : [],
            userID: this.props.route.params.id_user,
            
        }
        this.getData();
    }
    async getData(){
       await fetch(`http://192.168.1.102:3000/viewroom/${this.state.userID}`)
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
                <RoomInfo data = {this.state.dataSource} navigation = {navigation} userID = {this.state.userID}/>
            )
        }
    }
