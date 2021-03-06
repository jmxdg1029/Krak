import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../components/WelcomeSection.css';
import '../App.css';
import Fade from 'react-bootstrap/Fade';
import logo from '../logo.svg';

function WelcomeSection() {
    const[open,setOpen] = useState(false);
    return ( 
        <div className="welcome-section">
            <img src={logo} className="App-logo mt-5" alt="logo" />
            <h1 className="text-white">SHARE YOUR PROJECTS</h1>
            <p className="h3 text-white m-4">What are you waiting for?</p>
            <div className="mt-4 mx-auto">
                <Button onClick={() => setOpen(!open)} aria-controls="get-started-text" aria-expanded={open} variant="outline-primary" size="lg">
                    GET STARTED
                </Button>
                <Fade in={open}>
                    <div id="get-started-text" className="m-5">
                        <p className="h4 w-75 mx-auto text-white info">Start sharing your project to millions of people in the world. Save your project on to our site and have your own portfolio here in Krak</p>
                        <Button className="mt-2" variant="success">Create Account</Button>
                    </div>
                </Fade>
            </div>
        </div>
     );
  
}
 
export default WelcomeSection;