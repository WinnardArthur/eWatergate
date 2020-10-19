import React, { Component } from 'react';
import './hero.css';


class Hero extends Component {
    render() {
        return (
            <div className="hero-section">
                <div className="hero">
                    <div className="text">
                        <h2>e-Water for sustainable water solutions</h2>
                        <p>We believe that even the smallest ripple can make a big splash.</p>
                    </div>
                    <div className="btns">
                        <button className="register">Register</button>
                        <button className="app">20% off via APP</button>
                    </div>
                </div>
                <div className="info">
                    <div className="blue-bg">
                        <p>E-WATER changing lives</p>
                    </div>
                    <div className="white-bg">
                        <img src={require("../../water gate assets/icon E.png")} alt="icon E" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit, facere inventore adipisci minima
                            suscipit doloremque necessitatibus. Dolores repellat placeat itaque ad suscipit molestiae beatae veritatis commodi vitae.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero
