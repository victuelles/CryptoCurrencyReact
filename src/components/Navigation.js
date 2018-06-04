import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import AuthUserContext from './AuthUserContext'
import * as routes from '../constants/routes'
import SignOutButton from './SignOut';
import logo from "../images/logo.png";
import { stack as Menu } from 'react-burger-menu'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const Navigation = () =>
    <AuthUserContext.Consumer> 
            {authUser=>authUser? <NavigationAuth1/>:<NavigationNonAuth/>}
    </AuthUserContext.Consumer>

const NavigationAuth=()=>
<nav className="navbar navbar-expand-sm navbar-dark navbar-custom fixed-top">
<div className="container">
  <a className="navbar-brand" href="/"> <img src={logo} className="logo" alt="logo" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link className="nav-link"  activeClassName="active" to={routes.LANDING}> Home</Link></li>
        <li className="nav-item"><Link className="nav-link" activeClassName="active" to={routes.JOIN_TOKEN_SALE}> Token Sale</Link></li>
        <li className="nav-item"><Link className="nav-link" activeClassName="active" to={routes.ACCOUNT}> Account</Link></li>
        <li className="nav-item"><SignOutButton/></li>
        </ul>
        </div>
      </div>
    </nav>

class NavigationAuth1 extends Component {
    constructor(props) {
       super(props);
   
       this.toggle = this.toggle.bind(this);
       this.state = {
         isOpen: false
       };
     }
     toggle() {
       this.setState({
         isOpen: !this.state.isOpen
       });
     }
       render() { 
         return  (
           <div>
           <Navbar color="dark" dark expand="md">
             <NavbarBrand href="/"><img src={logo} className="navbar-brand logo" alt="logo" /></NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
               <NavItem>
                   <NavLink href={routes.LANDING}>Home</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href={routes.JOIN_TOKEN_SALE}>Join Token Sale</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href={routes.ACCOUNT}>Account</NavLink>
                 </NavItem>                 
                 <NavItem><SignOutButton/>
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         )
       }
   }
    

class NavigationNonAuth extends Component {
 constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() { 
      return  (
        <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src={logo} className="navbar-brand logo" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={routes.JOIN_TOKEN_SALE}>Join Token Sale</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={routes.SIGN_IN}>Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      )
    }
}
 


export default Navigation