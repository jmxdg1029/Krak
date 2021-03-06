import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';


class NavTool extends React.Component{

  state={
    bg:'transparent'
  };

  listenScrollEvent = e => {
    if(window.scrollY > 50){
      this.setState({bg:'dark'});
    }else{
      this.setState({bg: 'transparent'})
    }
  }

  componentDidMount(){
    window.addEventListener("scroll",this.listenScrollEvent);
  }
        render() {
        return (    
                <Navbar sticky='top' expand='lg' bg={this.state.bg}>
                  <Navbar.Brand className='text-white'>KRAKEN</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Link className="text-white" href="#">Studios</Nav.Link>
                      <Nav.Link className="text-white" href="#">Products</Nav.Link>
                      <Nav.Link className="text-white" href="#">Categories</Nav.Link>
                      <Nav.Link className="text-white" href="#">Accessories</Nav.Link>
                      <Button className="ml-4 mr-2" variant="outline-info">Sign in</Button>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>  
        );
    };
}
 
export default NavTool;

