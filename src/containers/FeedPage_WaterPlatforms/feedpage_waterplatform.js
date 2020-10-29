import React, { Component } from 'react';
import './feedpage_waterplatform.css';
import { Link } from 'react-router-dom';

export class FeedpageWaterPlatform extends Component {
    render() {
        return (
            <div className="feedpage-waterplatform">
                <div className="bg-colored"><h3>water platforms</h3></div>
                <div className="card-body">
                    <Link to="#" className="water-link"><img src={require("../../water gate assets/logo/WaterMedia.png")} alt="water media"/>water media</Link>
                    <Link to="#" className="water-link"><img src={require("../../water gate assets/logo/WaterTV.png")} alt="water tv"/>water tv</Link>
                    <Link to="#" className="water-link"><img src={require("../../water gate assets/logo/WaterAnswers.jpg")} alt="water answers"/>water answers</Link>
                    <Link to="#" className="water-link"><img src={require("../../water gate assets/logo/WaterDigital2.png")} alt="water answers"/>water digital</Link>
                    <Link to="#" className="water-link"><img src={require("../../water gate assets/logo/WaterResearch.png")} alt="water answers"/>water research</Link>
                    <Link to="#" className="water-link"><img src={require("../../water gate assets/logo/WaterAnswers.jpg")} alt="water answers"/>water answers</Link>
                    <Link to="#" className="water-link"><img src={require("../../water gate assets/logo/WaterDigital2.png")} alt="water answers"/>water digital</Link>
                </div>
            </div>
        )
    }
}

export default FeedpageWaterPlatform
