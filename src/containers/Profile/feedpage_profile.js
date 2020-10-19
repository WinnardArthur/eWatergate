import React, { Component } from 'react';
import './feedpage_profile.css';
import { Link } from 'react-router-dom';


export class FeedpageProfile extends Component {
    render() {
        return (
            <div className="feedpage-profile">
                <div className="bg-colored"></div>
                <div className="info">
                    <img src={require("../../water gate assets/serious-businesswoman-in-headphones-studying.png")} alt="profile"/>
                    <Link to="#" className="username">david ndam</Link>
                    <p>Hydraulic Engineer @Abunde Sustainable Engineering Group</p>
                </div>
                <div className="stats">
                    <div className="stat">
                        <p>water index</p>
                        <p>23</p>
                    </div>
                    <div className="stat">
                        <p>connections</p>
                        <p>5</p>
                    </div>
                    <div className="stat">
                        <p>water groups</p>
                        <p>2</p>
                    </div>
                    <div className="stat">
                        <p>water pages</p>
                        <p>4</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedpageProfile
