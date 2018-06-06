import React, { Component } from 'react';
import withAuthorization from './withAuthorization'
import {firebase,db} from '../firebase'

import { Container,Row,Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//TO DO
class UserInfo extends Component {
 
    state={user:null}

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser=>{
            //retrieve from database the users/uid
            db.getUser(authUser.uid).then(snapshot=>this.setState(()=>({user:snapshot.val()})))
        });
     }
    
    renderUser(){
        if(!this.state.user){
            return null;
        }
        const user= this.state.user;
        return (
     <Form> 
         <br/>
         <h4>Personal Info</h4>
         <hr/>
        <FormGroup row>
          <Label for="name" sm={2}>Full Name</Label>
          <Col sm={6}>
            <Input type="text" defaultValue={user.username} name="name" id="name"   required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={6}>
            <Input type="email" disabled value={user.email} name="email" id="email" required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bday" sm={2}>Birthday</Label>
          <Col sm={6}>
          <Input type="date" name="bday" id="bday" placeholder="date placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phone" sm={2}>Phone</Label>
          <Col sm={6}>
            <Input type="tel"  name="phone" id="phone" placeholder="(###)###-##-##" required />
          </Col>
        </FormGroup>

        <br/>
        <h4>Address</h4>
        <hr/>
        <FormGroup row>
          <Label for="country" sm={2}>Country</Label>
          <Col sm={6}>
            <Input type="text" placeholder="Enter country" name="country" id="country"   required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="city" sm={2}>City</Label>
          <Col sm={6}>
            <Input type="text" placeholder="Enter city/town name" name="city" id="city" required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="street" sm={2}>Street</Label>
          <Col sm={6}>
          <Input type="text" name="street" id="street" placeholder="Street address" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="zipcode" sm={2}>ZIP/Postal Code</Label>
          <Col sm={6}>
            <Input type="text"  name="zipcode" id="zipcode"  placeholder="Zip code"  />
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
                <Row>
                    <Button outline size="md" color="primary">Save</Button>
                </Row>
          
        </Container>
        
         )
    }
}



const authCondition =(authUser)=>!!authUser;
export default withAuthorization(authCondition)(UserInfo);