import React from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';
import './App.css';

class  InvestorStats extends React.Component{

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
        this.setState( {userData: this.props.userData});
        this.setState( {loaded: true});
    }
    render()
    {
        if (!this.state.loaded)
        {
            return (
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            )
        }
        // else if (this.state.userData.stats==null)
        // {
        //     return (<br/>); //No trades (probably invalide user)
        // }
        else
        {

        return (
                
    <Card 
      bg={'success'}
      text={'white'}
      style={{ width: '18rem' }}
    >
      <Card.Body>
        <Card.Title>Investor Stats</Card.Title>
        <Card.Text>
                <div>Active since: {moment(this.state.userData.firstPost).format("M/D/YYYY")}</div>
                <div>Total posts: {this.state.userData.postCount}</div>
                <div>Posts interpreted as trades: {this.state.userData.tradeCount}</div>

                <hr/>
                <div>Avg 1 day return: {this.round(this.state.userData.meanPerformance[0].mean,2)}</div>
                <div>Avg 2 day return: {this.round(this.state.userData.meanPerformance[1].mean,2)} </div>
                <div>Avg 7 day return: {this.round(this.state.userData.meanPerformance[2].mean,2)}</div>
                <div>Avg 30 day return: {this.round(this.state.userData.meanPerformance[3].mean,2)} </div>
        </Card.Text>
      </Card.Body>
    </Card>

        );
        }
    }
}

export default InvestorStats;