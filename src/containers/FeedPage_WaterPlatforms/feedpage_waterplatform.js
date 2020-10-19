import React, { Component } from 'react';
import './feedpage_waterplatform.css';
import { Link } from 'react-router-dom';

export class FeedpageWaterPlatform extends Component {
    render() {
        return (
            <div className="feedpage-waterplatform">
                <div className="bg-colored"><h3>water platforms</h3></div>
                <div className="card-body">
                    <Link to="#" className="water-link"><i className="fa fa-tv"></i>water media</Link>
                    <Link to="#" className="water-link"><i className="fa fa-tv"></i>water tv</Link>
                    <Link to="#" className="water-link"><i className="fa fa-tv"></i>water answers</Link>
                    <Link to="#" className="water-link"><i className="fa fa-circle"></i>water digital</Link>
                    <Link to="#" className="water-link"><i className="fa fa-circle"></i>water research</Link>
                    <Link to="#" className="water-link"><i className="fa fa-circle"></i>water answers</Link>
                    <Link to="#" className="water-link"><i className="fa fa-circle"></i>water digital</Link>
                </div>
            </div>
        )
    }
}

export default FeedpageWaterPlatform
