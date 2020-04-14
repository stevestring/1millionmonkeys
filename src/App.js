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
import DropdownButton from 'react-bootstrap/DropdownButton';
import './App.css';

class App extends React.Component {
  
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
    <Container>
      <NavHeader/>
     
      <br/>
     <Jumbotron><h1>
     Check the Investment Performance of Social Network Investors</h1>
           <br/>
           <br/>
           
           <Form inline onSubmit={this.mySubmitHandler}>
            <FormControl as="select" className="mr-sm-2" value ="hello" disabled>
            <option>r/wallstreetbets</option>
            </FormControl>
            <FormControl type="text" placeholder="username" className="mr-sm-2" onChange={this.myChangeHandler}/>
            <Button type="submit" >Search User</Button>
          </Form>
          </Jumbotron>
       
<Row>
        <Col Col lg={6}  >
          
        <h2>Investing Insight on Social Media?</h2>
        <p>
           
          Platforms like Reddit and Twitter have given rise to a new subcultures of investing enthusiasts who bravely put their investment ideas out there for the world to see.
          Could any of these stock prognositcators be the next Warren Buffet?
        </p> 
        <p>
          1 Million Monkeys attempts to answer this question by parsing actionable investment ideas from public social media posts and calculates the performance of each idea over various time intervals.  
          With millions of amateur investors to choose from, we are searching for the proverbial diamond in the rough - somebody with a proven track record who posts content worth listening to.

        </p> 
        </Col> 
        <Col lg={6}>
        <img style={{class:'img-fluid'}} width= {500} src={process.env.PUBLIC_URL + '/Chimpanzee_seated_at_typewriter.jpg'} />
        </Col> 
        </Row>
      {/* <Row>
        <InvestorStats/> 
      </Row> */}
    </Container>
    );
    }
}

export default App;
