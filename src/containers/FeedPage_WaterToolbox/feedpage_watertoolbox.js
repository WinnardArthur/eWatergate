import React, { Component } from 'react';
import './feedpage_watertoolbox.css';
import { Link } from 'react-router-dom';

export class FeedpageWaterToolbox extends Component {
    render() {
        return (
            <div className="feedpage-watertoolbox">
                <div className="watertoolbox-card">
                    <div className="bg-colored"><h3>water toolbox</h3></div>
                    <div className="card-body">
                        <Link to="#" className="link">
                            <div className="round-div"></div>
                            <h5>water media</h5>
                        </Link>
                        <Link to="#" className="link">
                                <div className="round-div"></div>
                                <h5>water media</h5>
                        </Link>
                        <Link to="#" className="link">
                                <div className="round-div"></div>
                                <h5>water media</h5>
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default FeedpageWaterToolbox
