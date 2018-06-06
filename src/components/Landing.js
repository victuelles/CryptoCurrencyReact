import React from 'react';
import Background from '../images/icon_join_hands.jpg';
import People from '../images/icon_people_circle.png';
import * as routes from '../constants/routes'

let sectionStyleHeaderMasthead = {
  width: "100%",
  height: "300px",
  backgroundColor:'#000',
  backgroundImage: `url(${Background})`,
  backgroundPosition: "50%",
  backgroundRepeat  : 'no-repeat',
  backgroundSize: 'cover',
  textAlign:'center'
}

let sectionStyleOverlay = {
  width: "100%",
  height: "300px",
  backgroundColor:'rgba(75,81,95,0.5)',
  backgroundPosition: "50%",
  backgroundRepeat  : 'no-repeat',
  backgroundSize: 'cover',
  textAlign:'center'
}

const Landing = () => 
<div className="page">
    <div className="home-page">
       
        <header className=" text-center text-black">
        <div  style={sectionStyleHeaderMasthead}>
        <div  style={sectionStyleOverlay}>
          <div className="container" style={{paddingTop:'180px'}}>
            <img src={People} alt='people' />
            <h1 className="masthead-heading mb-0">Content Ether</h1>
            <p >Blockchain for Media Companies</p>

            <a href={routes.JOIN_TOKEN_SALE} className="btn btn-primary btn-xl rounded-pill mt-5">Join Token Sale</a>
          </div>
          </div>
        </div>
        </header>
       
    </div>
  </div>

 
export default Landing;