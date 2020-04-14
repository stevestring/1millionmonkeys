import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavHeader from './NavHeader';
import InvestorStats from './InvestorStats';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './App.css';

function App() {
  return (
    <Container>
      <NavHeader/>
     

     <Jumbotron><h1>Is there investment talent on social media?</h1>
     Check the history of your facvorite social network contributors.
           <br></br>
           <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form></Jumbotron>
        {/*<Col Col lg={6}  >
          
         <h1>Investing Talent... </h1>
        <h1>on Social Media?</h1>
        {/* <p>
        "Let us imagine that a million monkeys have been trained to strike the keys of a typewriter at random, and that... these typist monkeys work eagerly ten hours a day on a million typewriters of various kinds.... And at the end of a year, these volumes turn out to contain the exact texts of the books of every sort and every language found in the world's richest libraries.”
        </p> 



        </Col> 
        <Col lg={6}>
        <img style={{class:'img-fluid'}} width= {500} src={process.env.PUBLIC_URL + '/Chimpanzee_seated_at_typewriter.jpg'} />
        </Col> */}

      {/* <Row>
        <InvestorStats/> 
      </Row> */}
    </Container>
  );
}

export default App;
