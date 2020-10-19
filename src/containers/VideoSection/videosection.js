import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './videosection.css';

class VideoSection extends Component {
    render() {
        return (
            <div className="video-section">
                <Link to="#" className="tech-videos-btn">tech videos</Link>
                <div className="parent">
                    <div className="first-half">
                        <video controls poster={require("../../water gate assets/WhatsApp Image -2.png")}>
                                <source src={require("../../water gate assets/videos/Felix Navidad.mp4")} type="video/mp4" />
                                <source src={require("../../water gate assets/videos/Felix Navidad.mp4")} type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                    </div>
                    <div className="second-part">
                        <div className="text">
                                <h1>predictive analysis in agriculture</h1>
                                <h5>To block the update, you need to disable the update services. Press win+R and type (msconfig). Go to the services tab and uncheck (adobe acrobat update) service, Click Ok and restart PC.</h5>
                            <h3>share this video</h3>
                        </div>
                        <div className="small-videos">
                            <video controls poster={require("../../water gate assets/research-analysis-ideas-strategy-information-concept.png")}>
                                <source src={require("../../water gate assets/videos/Felix Navidad.mp4")} type="video/mp4" />
                                    <source src={require("../../water gate assets/videos/Felix Navidad.mp4")} type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video>
                            <video controls poster={require("../../water gate assets/knowledge-technology-concept.png")}>
                                <source src={require("../../water gate assets/videos/Felix Navidad.mp4")} type="video/mp4" />
                                    <source src={require("../../water gate assets/videos/Felix Navidad.mp4")} type="video/ogg" />
                                    Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default VideoSection
