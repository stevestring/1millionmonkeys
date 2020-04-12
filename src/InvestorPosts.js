import React from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';

import './App.css';

class  InvestorPosts extends React.Component{

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
            );
        }
        else if (this.state.userData.trades==null)
        {
            return (<br/>); //No trades (probably invalide user)
        }
        else
        {
            return (  
                <Table responsive striped>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Ticker</th>
                        <th>Long/Short</th>
                        <th>Title</th>
                        <th>1Day</th>
                        <th>2Day</th>
                        <th>7Day</th>
                        <th>30Day</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.userData.trades.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{moment(data.created).format("M/D/YYYY") }</td>
                                    <td>{data.ticker}</td>
                                    <td>{data.longShort}</td>
                                    <td><a href={'https://www.reddit.com/r/wallstreetbets/comments/'+
                                        data.commentId}>{data.title}</a></td>
                                    <td>{this.round(data.performance[0].performance,2)}</td>
                                    <td>{this.round(data.performance[1].performance,2)}</td>
                                    <td>{this.round(data.performance[2].performance,2)}</td>
                                    <td>{this.round(data.performance[3].performance,2)}</td>
                                </tr>
                            )
                    })}      
                    </tbody>
                    </Table>
            );
        }
    }
}

export default InvestorPosts;