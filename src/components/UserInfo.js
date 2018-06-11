import React, { Component } from 'react';
import withAuthorization from './withAuthorization'
import {db,firebase} from '../firebase'
import * as routes from '../constants/routes'

import { Container,Row,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const UserPage = ({history}) => 
    <div>
        <UserInfo history={history}/>
    </div>

const INITIAL_STATE= {
  id:null,
  bday:'',
  city:'',
  country:"",
  email:"",
  phone:"",
  street:"",
  username:"",
  zipcode:"",
  error:null
}
const byPropKey =(propertyName,value)=>()=>({
  [propertyName]:value,
})

class UserInfo extends Component {
 
  constructor(props){
      super(props)
      this.state = {...INITIAL_STATE}
  }
    componentWillUnmount(){

    }
    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser=>{
            //retrieve from database the users/uid

            db.getUser(authUser.uid).then(snapshot=>this.setState(()=>(snapshot.val())))
        });
     }
     onSubmit=(event)=>{
      const {id,bday,city,country,
      phone,
      street,
      username,
      zipcode}=this.state;
     
      const {history}=this.props
            //Update a user record on database 
              db.updateUser(id,username,bday,phone,country,city,street,zipcode)
              .then(()=>{
                  this.setState(()=>({...INITIAL_STATE}))
                  //redirect to 
                  history.push(routes.USER_INFO)
              })
              .catch(error=>{
                  this.setState(byPropKey('error',error))
              })
      event.preventDefault() 
  }
    renderUser(){
        if(!this.state.id){
            return null;
        }
        const user= this.state;
        console.log("user=",user);
        
      
        return (
        <Form  onSubmit={this.onSubmit}>
         <br/>
         <h4>Personal Info</h4>
         <hr/>
         <FormGroup row>
          <Label for="uid" sm={2}>Id</Label>
          <Col sm={6}>
            <Input type="email" value={user.id} name="id" id="id" disabled />
          </Col>
        </FormGroup>        
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={6}>
            <Input type="email" disabled value={user.email} name="email" id="email" required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="username" sm={2}>Full Name</Label>
          <Col sm={6}>
            <Input type="text" defaultValue={user.username} name="username" id="username"  onChange={event=>this.setState(byPropKey('username',event.target.value))}
                              required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bday" sm={2}>Birthday</Label>
          <Col sm={6}>
          <Input type="text" defaultValue={user.bday} name="bday" id="bday" placeholder="date placeholder"  onChange={event=>this.setState(byPropKey('bday',event.target.value))} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phone" sm={2}>Phone</Label>
          <Col sm={6}>
            <Input type="tel" defaultValue={user.phone} name="phone" id="phone" placeholder="(###)###-##-##" onChange={event=>this.setState(byPropKey('phone',event.target.value))}  />
          </Col>
        </FormGroup>

        <br/>
        <h4>Address</h4>
        <hr/>
        <FormGroup row>
          <Label for="country" sm={2}>Country</Label>
          <Col sm={6}>
            <Input type="text" defaultValue={user.country} placeholder="Enter country" name="country" id="country"   onChange={event=>this.setState(byPropKey('country',event.target.value))}   />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="city" sm={2}>City</Label>
          <Col sm={6}>
            <Input type="text" defaultValue={user.city} placeholder="Enter city/town name" name="city" id="city" onChange={event=>this.setState(byPropKey('city',event.target.value))}   />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="street" sm={2}>Street</Label>
          <Col sm={6}>
          <Input type="text" defaultValue={user.street} name="street" id="street" placeholder="Street address" onChange={event=>this.setState(byPropKey('street',event.target.value))} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="zipcode" sm={2}>ZIP/Postal Code</Label>
          <Col sm={6}>
            <Input type="text"  defaultValue={user.zipcode} name="zipcode" id="zipcode"  placeholder="Zip code"  onChange={event=>this.setState(byPropKey('zipcode',event.target.value))} />
          </Col>
        </FormGroup>

       <br/>
        <h4>Identity documents</h4>
        <hr/>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>Identification</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Submit a personal identity document with photo: Passport, ID, Residence document (both sides)
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row style={{paddingTop:'20px'}}>
          <Label for="exampleFile" sm={2}>Bill/Document</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Utility bill or any other document with a date no later than 2 months before the presentation (this confirms the address)
            </FormText>
          </Col>
        </FormGroup>
          <Row>
                 <Button outline size="md" color="primary">Save</Button>
         </Row>
        
    </Form>
        )
    }

    render() { 
    
        return ( 
            <Container style={{marginTop:40+'px'}}>
                <Row>
                 <h2>Account</h2>
                </Row>
                {this.renderUser()}

          
        </Container>
        
         )
    }
}



const authCondition =(authUser)=>!!authUser;
export default withAuthorization(authCondition)(UserPage);