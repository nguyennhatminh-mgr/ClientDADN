import React from 'react';
import {ScrollView} from 'react-native';
import RoomInfo from '../components/RoomInfo';

export default class AllRoom extends React.Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state={
            dataSource : [],
            userID: this.props.route.params.id_user
        }
    }
    componentDidMount(){
        this._isMounted = true;
        fetch(`http://192.168.1.102:3000/viewroom/${this.state.userID}`)
        .then((response)=> response.json())
        .then((responseJson)=>{
            if(this._isMounted){
                this.setState({
                    dataSource : responseJson
                });
            }
        })
        .catch((err)=>console.log(err))
        
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
    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        return (   
            <ScrollView horizontal = {true} pagingEnabled ={true}>
                {
                    this.state.dataSource.map(
                        (item, index)=> (<RoomInfo key ={index} roomID = {item.name} owner ={item.realname} deviceID ={item.id}  brightness = {item.value} time ={this.convertDate(item.received_time)} />
                    ))
                }                
            </ScrollView>
        );
    }
}
