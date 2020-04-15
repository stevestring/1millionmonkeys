import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {withRouter, BrowserRouter } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';



class  NavHeader extends React.Component{

  constructor(props) {
    super(props);    
    this.state = {
      loaded: false,
      username:null
    };     
  }

mySubmitHandler = (event) => {
  event.preventDefault();
  if ( this.state.username!= null)
  {
    window.location.replace('/Investor/'+this.state.username);
  }
}
myChangeHandler = (event) => {
  this.setState({username: event.target.value.trim()});
}

render()
{
    return (
      <Navbar 
     
      >
        <Navbar.Brand href="/">      
        <img
        src={process.env.PUBLIC_URL + '/monkey.png'}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"/></Navbar.Brand><Navbar.Brand href="/">
         1 Million Monkeys</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          <Form inline onSubmit={this.mySubmitHandler}>
            <FormControl type="text" placeholder="username" className="mr-sm-2" onChange={this.myChangeHandler}/>
            <Button type="submit" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}
}

export default NavHeader;