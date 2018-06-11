import React from 'react';
import Background from '../images/icon_join_hands.jpg';
import People from '../images/icon_people_circle.png';

import Feature1 from '../images/feature_hourglass.png';
import Feature2 from '../images/feature_exchange.png';
import Feature3 from '../images/feature_rewards.png';
import Feature4 from '../images/feature_purchase.png';
import TechLogo from '../images/icon_deep_technology.png'
import * as routes from '../constants/routes'
import './Landing.css';

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
    <div className="features" style={{paddingTop:'380px'}}>
    <section className="content-section bg-primary text-white text-center" id="services">
      <div className="container">
        <div className="content-section-heading">
          
          <h2 className="mb-5">What Content Ether Features</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
            <img src={Feature1} alt='feature1' />
            </span>
            <h4>
              <strong>Analytics</strong>
            </h4>
            <p className="text-faded mb-0">Measure & track media consumption via Tokens</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
            <img src={Feature2} alt='feature2' />
            </span>
            <h4>
              <strong>Syndication</strong>
            </h4>
            <p className="text-faded mb-0">Smart contracts for Media syndication and exchange</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
            <img src={Feature3} alt='feature3' />
            </span>
            <h4>
              <strong>Rewards</strong>
            </h4>
            <p className="text-faded mb-0">Reward for sharing via Tokens</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
            <img src={Feature4} alt='feature' />
            </span>
            <h4>
              <strong>Buy Token</strong>
            </h4>
            <p className="text-faded mb-0">Purchase Media via Tokens</p>
          </div>
        </div>
      </div>
    </section>
    </div>

    <section className="callout">
      <div className="container text-center">
          <div className="row">
          <div className="col-lg-6 col-md-6 mb-5 mb-lg-0" >
           <div className="image">
            <img src={TechLogo} alt='TechLogo' />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-5 mb-lg-0">
          <h2 className="mx-auto mb-5">Deep Technology</h2>
          <p class="lead mb-5">
          <div className="row" style={{padding:'10px'}}>
            The platform was designed by seasoned entrepreneurial and technical team of Industry veterans.
           </div>
            <div className="row">
            <div className="col-1 col-sm-3 col-lg-2 " style={{textAlign:"center"}} > 
                 <i className="fa fa-3 fa-gears " ></i>
               </div>
               <div className="col-11 col-sm-9 col-lg-8 " >
                  Built on top of Etherum Blockchain
               </div>
            </div>  
            <div className="row">
            <div className="col-1 col-sm-3 col-lg-2 " style={{textAlign:"center"}} > 
                 <i className="fa fa-3 fa-id-card-o " ></i>
               </div>
               <div className="col-11 col-sm-9 col-lg-8 " >
                  Deep learning of audience clusters
               </div>
            </div> 
            <div className="row">
            <div className="col-1 col-sm-3 col-lg-2 " style={{textAlign:"center"}} > 
                 <i className="fa fa-3 fa-money " ></i>
               </div>
               <div className="col-11 col-sm-9 col-lg-8 " >
                  Powerful Media monetization
               </div>
            </div> 
            <div className="row">
              <div className="col-1 col-sm-3 col-lg-2 " style={{textAlign:"center"}} > 
                 <i className="fa fa-3 fa-users " ></i>
               </div>
               <div className="col-11 col-sm-9 col-lg-8 " >
                  Tracking viral propagation of media
               </div>
            </div>  
          </p>
           </div>
        </div>
      </div>
    </section>
  </div>

 
export default Landing;