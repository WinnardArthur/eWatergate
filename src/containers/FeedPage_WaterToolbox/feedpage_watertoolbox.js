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
                            <div><img src={require("../../water gate assets/logo/WaterClock.png")} alt="water clock" /></div>
                            <h5>water clock</h5>
                        </Link>
                        <Link to="#" className="link">
                            <div><img src={require("../../water gate assets/logo/Warning Signal.png")} alt="warning signal" /></div>
                                <h5>warning signal</h5>
                        </Link>
                        <Link to="#" className="link">
                            <div><img src={require("../../water gate assets/logo/WaterAdWords.png")} alt="water adwords" /></div>
                                <h5>water Adwords</h5>
                        </Link>
                        <Link to="#" className="link">
                            <div><img src={require("../../water gate assets/logo/IrrigationPlanner2.png")} alt="irrigation planner" /></div>
                                <h5>irrigation Planner</h5>
                        </Link>
                        <Link to="#" className="link">
                            <div><img src={require("../../water gate assets/logo/WaterAudit.png")} alt="water audit" /></div>
                                <h5>water Audit</h5>
                        </Link>
                        <Link to="#" className="link">
                            <div><img src={require("../../water gate assets/logo/WaterBenchmark.png")} alt="water benchmark" /></div>
                                <h5>water Benchmark</h5>
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default FeedpageWaterToolbox
