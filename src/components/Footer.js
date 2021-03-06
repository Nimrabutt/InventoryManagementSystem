import React, { Component } from 'react';
import '../App.css';
import '../css/Footer.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Footer extends Component{
  render(){
    return (
      <div className="footer-background">
       {/* <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 384 512"><path d="M360 464H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H360C373.3 512 384 501.3 384 488S373.3 464 360 464zM345.1 32h-308C17 32 0 49 0 70v139.4C0 218.8 4 227.5 11 233.6L48 265.8c0 8.885 .0504 17.64 .0504 26.46c0 39.32-1.001 79.96-11.93 139.8h49C94.95 374.3 96.11 333.3 96.11 285.5C96.11 270.7 96 255.1 96 238.2L48 196.5V80h64V128H160V80h64V128h48V80h64v116.5L288 238.2c0 16.77-.1124 32.25-.1124 47.1c0 47.79 1.164 89.15 10.99 146.7h49c-10.92-59.83-11.93-100.6-11.93-139.9C335.9 283.3 336 274.6 336 265.8l37-32.13C380 227.5 384 218.8 384 209.4V70C384 49 367 32 345.1 32zM192 224C174.4 224 160 238.4 160 256v64h64V256C224 238.4 209.6 224 192 224z"/></svg> */}
      <Container>
       <Row>
        <Col>
        <div className='services'>
          <h4>Services</h4>
          <p>Our grocery inventory management system offers you free access to maintaing an inventory for your products. 
            you can categorize your grocery products from a list of the offered categories.</p>
        </div>
        </Col>
        <Col>
        <div className='follow'>
          <h4>Follow Us</h4>
            <ul>
              <li>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                www.google/ims.com</a>
              </li>
              <li>
                <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                </svg>
                www.youtube/ims.com</a>
              </li>
            </ul>
        </div>
        </Col>
        </Row>
        <div className='copyright'>
        IMS ?? 2022
        </div>
        </Container>
      </div>
      
    );
  }
}
export default Footer;