import React, { Component } from 'react';
import './features.css'
import { Link } from 'react-router-dom';

const feature_cards = [
    {
        id: 1,
        img: "mixed-race-team-of-medical-doctors-having-a-video-conference.png",
        card_title: "e-wateracademy",
        card_text: "Soil Management Technology Helps you get an inadept view of your soil."
    },
    {
        id: 2,
        img: "research-analysis-ideas-strategy-information-concept-.png",
        card_title: "e-waterblog",
        card_text: "Soil Management Technology Helps you get an inadept view of your soil."
    },
    {
        id: 3,
        img: "serious-businesswoman-in-headphones-studying.png",
        card_title: "e-water media",
        card_text: "Soil Management Technology Helps you get an inadept view of your soil."
    },
    {
        id: 4,
        img: "WhatsApp Image -1.png",
        card_title: "e-watertech",
        card_text: "Soil Management Technology Helps you get an inadept view of your soil."
    },
    {
        id: 5,
        img: "data-analytics-technology-graphic-concept.png",
        card_title: "e-waternews",
        card_text: "Soil Management Technology Helps you get an inadept view of your soil."
    },
    {
        id: 6,
        img: "knowledge-technology-concept.png",
        card_title: "e-water media",
        card_text: "Soil Management Technology Helps you get an inadept view of your soil."
    }
]


class Features extends Component {
    render() {
        return (
            <div className="features">
                <div className="head">
                    <div className="left"><h2>Features</h2></div>
                    <div className="right"><Link to="#" className="head-btn">water technology</Link></div>
                </div>
                <hr />
                <img className="blue-pattern" src={require("../../water gate assets/logo/Water GRid.jpg")} alt="pattern" />
                <div className="sub-cards">
                    {feature_cards.map((items, key)=>{
                        return(
                        <div key={items.id} className="card">
                            <img src={require(`../../water gate assets/${items.img}`)} class="card-img-top" alt={items.card_title} />
                            <div className="card-body">
                                <h4 className="card-title">{items.card_title}</h4>
                                <div>
                                    <p className="card-text">{items.card_text}</p>
                                    <p className="card-text">{items.card_text}</p>
                                    <p className="card-text">{items.card_text}</p>
                                </div>
                                <div className="stats">
                                    <button>Sign Up</button>
                                </div>
                            </div>
                        </div> 
                        )
                    })}
                    
                </div>
                <hr class="bottom-hr" />

            </div>  
        )
    }
}

export default Features
