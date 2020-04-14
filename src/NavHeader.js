import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {withRouter, BrowserRouter } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';



class  NavHeader extends React.Component{


mySubmitHandler = (event) => {
  event.preventDefault();
  //alert("You are submitting " + this.state.username);
  window.location.replace('/Investor/'+this.state.username);
}
myChangeHandler = (event) => {
  this.setState({username: event.target.value.trim()});
}

render()
{
    return (
      <Navbar 
      bg="dark" variant="dark" 
      >
        <Navbar.Brand href="/">1 Million Monkeys</Navbar.Brand>
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