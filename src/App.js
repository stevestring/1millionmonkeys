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
  
  constructor(props) {
    super(props);    
    this.state = {
      loaded: false,
      username:null
    };     
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    
    if ( this.state.username != null)
    {
      //alert("You are submitting " + this.state.username);
      window.location.replace('/Investor/'+this.state.username);
    }
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value.trim()});
  }

  render()
  {
  return (
    <Container>
      <NavHeader/>
     
     
     <Jumbotron><Row><Col md={6}>
       <h1>
     Check the Track Record of Social Network Investors</h1>
           <br/>
     
     
           <Form inline onSubmit={this.mySubmitHandler}>
            <FormControl as="select" className="mr-sm-2 d-none d-md-block" value ="hello" disabled>
            <option>r/wallstreetbets</option>
            </FormControl>
            <FormControl type="text" placeholder="username" className="mr-sm-2" onChange={this.myChangeHandler}/>
            <Button type="submit" >Search</Button>
          </Form></Col>
          <Col  class="d-none d-md-block"  md={6}><img class='img-fluid d-none d-md-block' src={process.env.PUBLIC_URL + '/Chimpanzee_seated_at_typewriter.jpg'} /></Col>
          </Row>
          </Jumbotron>
       
        <Row>
        <Col Col lg={6}  >
          
        <h2>Investing Insight on Social Media?</h2>
        <p>           
          Platforms like Reddit and Twitter have given rise to a new subcultures of investing enthusiasts who bravely put their investment ideas out there for the world to see.
          Could any of these stock prognosticators be the next Warren Buffet?
        </p> 
        <p>
          1 Million Monkeys attempts to answer this question by parsing actionable investment ideas from public social media posts and calculates the performance of each idea over various time intervals.  
          With millions of amateur investors to choose from, we are searching for the proverbial diamond in the rough - 
          somebody with a proven track record who deserves your attention.
        </p> 
        <p>
            
        </p> 
        </Col> 
        <Col lg={6}>
        <h2>Methodology</h2>

        <p>
          We currently parse the titles of <a href="https://www.reddit.com/r/wallstreetbets/">r/wallstreetbets </a> posts and look for patterns that most likley indicate a BUY or SELL intent with a ticker from our database of roughly 300 popular stocks and ETFs. 
          If this proof of concept is successfull, we will be looking to add other subreddits and hopefully other platforms like Twitter.
        </p> 
        <p>
        <strong>Our methodology is a work in progress</strong>, but it's a start. We are looking at ways to improve this in the future.
        </p> 
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
