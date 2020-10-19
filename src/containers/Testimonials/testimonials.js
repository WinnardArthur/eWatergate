import React, { Component } from 'react';
import './testimonials.css';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

export class Testimonials extends Component {
    
    render() {
        return (
            <div className="testimonials">
                <div className="cards"> 
                    <Paper className="card">
                        <Avatar src={require("../../water gate assets/serious-businesswoman-in-headphones-studying.png")} className="round-image"/>
                        <div className="stars">
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                        </div>
                        <p>Boss what do you have to say about the AgriLink app? has it been useful to you 
                            as an agricultural state holder and what is its future of we have to keep using it.
                        </p>
                        <div className="card-footer">
                            <h5>Fabrice A</h5>
                            <h5>Researcher</h5>
                        </div>
                    </Paper>

                    <Paper className="card">
                        <Avatar src={require("../../water gate assets/serious-businesswoman-in-headphones-studying.png")} className="round-image"/>
                        <div className="stars">
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                        </div>
                        <p>Boss what do you have to say about the AgriLink app? has it been useful to you 
                            as an agricultural state holder and what is its future of we have to keep using it.
                        </p>
                        <div className="card-footer">
                            <h5>Fabrice A</h5>
                            <h5>Researcher</h5>
                        </div>
                    </Paper>

                    <Paper className="card">
                        <Avatar src={require("../../water gate assets/serious-businesswoman-in-headphones-studying.png")} className="round-image"/>
                        <div className="stars">
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                            <img src={require("../../water gate assets/star.png")} alt=""/>
                        </div>
                        <p>Boss what do you have to say about the AgriLink app? has it been useful to you 
                            as an agricultural state holder and what is its future of we have to keep using it.
                        </p>
                        <div className="card-footer">
                            <h5>Fabrice A</h5>
                            <h5>Researcher</h5>
                        </div>
                    </Paper>     
                </div>
            </div>
        )
    }
}

export default Testimonials
