import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavHeader from './NavHeader';
import InvestorStats from './InvestorStats';
import InvestorPosts from './InvestorPosts';
import Spinner from 'react-bootstrap/Spinner';


import './App.css';

class  Investor extends React.Component{

    constructor(props) {
        super(props);    
        this.state = {
          loaded: false,
          user: "-",
          userData:{}     
        };     
    }

    round(x, precision) {
        let multiplier = Math.pow(10, precision)
        if (x==null)
        {
            return '-';
        }
        else
        {
        return Math.round((x + Number.EPSILON) * multiplier) / multiplier
        }
    }

    componentDidMount() {
        this.setState( {user: this.props.user});
        // this.setState ({regionDisplay:this.getDisplayNameForState(this.props.region)})
        fetch('https://8icas63m6j.execute-api.us-east-1.amazonaws.com/default/1mm-user-lambda?user='+this.props.user)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
        //   var filtered = data.filter(a=>a["Country/Region"] === "US"
        //     && a["Province/State"].search(",") === -1 );
          //alert(JSON.stringify(data));
          this.setState( {userData: data});
          this.setState( {loaded: true});
          

        });
    }
    render()
    {
        if (!this.state.loaded)
        {
            return (
                <Container>
                <NavHeader/>  
                <br/>
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
                </Container>
            )
        }
        else if (this.state.userData.errorMessage != null)
        {
          return (          
            <Container>
              <NavHeader/>  
              <br/>
                <h1>{this.props.user} (wallstreetbets)</h1> 
              <br/> 
              <h1>{this.state.userData.errorMessage}</h1> 
            </Container>
          );
        }
        else
        {
          return (          
            <Container>
              <NavHeader/>  
              <br/>
                <h1>{this.props.user} (wallstreetbets)</h1> 
              <br/> 
              <Row>
              <Col sm={3}>    
              <InvestorStats userData={this.state.userData}/>   
              </Col>
              <Col sm={1}></Col>
              <Col>  
              <InvestorPosts userData={this.state.userData}/>    
              </Col>
              </Row>
            </Container>
          );
        }
    }
}

export default Investor;