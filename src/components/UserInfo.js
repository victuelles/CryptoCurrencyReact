import React, { Component } from 'react';
import withAuthorization from './withAuthorization'
import {firebase,db,auth} from '../firebase'
//TO DO
class UserInfo extends Component {
    constructor(props){
        super(props)
      
       
    }
    componentDidMount() {
     
    }
    render() { 
      //  console.log(this.props.userId)
        return ( 
            <div>
            <h1>User Info</h1>
            <p> This page is accessible to all signed in user.</p>
           
        </div>
         )
    }
}


const authCondition =(authUser)=>!!authUser;
export default withAuthorization(authCondition)(UserInfo);