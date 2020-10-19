import React, { Component } from 'react';
import './feedpage_rightsidebar.css';
import FeedpageWaterToolbox from '../FeedPage_WaterToolbox/feedpage_watertoolbox';
import { Link } from 'react-router-dom';

export class FeedpageRightSidebar extends Component {
    render() {
        return (
            <div className="feedpage-rightsidebar">
                <div>
                    <FeedpageWaterToolbox />
                </div>
                <div className="adds-card">
                    <img className="img-1" src={require("../../water gate assets/WhatsApp Image -2.png")} alt="Wastewater Pumps" />
                    <img className="img-2" src={require("../../water gate assets/background.png")} alt="pump" />
                    <div className="adds-text">
                        <h6>Wastewater Pumps</h6>
                        <Link to="#" className="link">Flygt N-Technology Water & Wastewater Pumps</Link>
                    </div>
                </div>
                <div className="info-card">
                    <Link to="#" className="link">about us</Link>
                    <Link to="#" className="link">contact us</Link>
                    <Link to="#" className="link">privacy and terms</Link>
                    <Link to="#" className="link">Help</Link>
                </div>
            </div>
        )
    }
}

export default FeedpageRightSidebar
