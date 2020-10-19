import React, { Component } from 'react';
import './polygon.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css'


class Polygons extends Component{

    state = {
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            },
            800: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    }

    render(){
        return (
            <div className="polygons-section">
                <div className="polygons-wrapper">
                    <div className="polygons">
                        <OwlCarousel className="owl-theme items"
                            items="5"
                            autoplay
                            loop 
                            margin={5}
                            responsive = {this.state.responsive}
                            dots = {false}
                        >
                            <div className="item type1">
                                <img src={require("../../water gate assets/Training.png")} alt="polygon"/>
                            </div>
                            <div className="item type2">
                                <img src={require("../../water gate assets/anaya-katlego-CXKk-2.png")} alt="polygon"/>
                            </div>
                            <div className="item type2">
                                <img src={require("../../water gate assets/WhatsApp Image -2.png")} alt="polygon"/>
                            </div>
                            <div className="item type2">
                                <img src={require("../../water gate assets/serious-businesswoman-in-headphones-studying.png")} alt="polygon"/>
                            </div>
                            <div className="item type3">
                                <img src={require("../../water gate assets/anaya-katlego-CXKk-13.png")} alt="polygon"/>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        )
    }
}



export default Polygons 