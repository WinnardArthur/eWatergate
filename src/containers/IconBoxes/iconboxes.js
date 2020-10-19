import React from 'react';
import './iconboxes.css';
import { Link } from 'react-router-dom';


export default function IconBoxes() {
    return (
        <div>
            <div className="icon-boxes">
                <Link to="#" className="box">
                    <img class="plus" src={require("../../water gate assets/iconfinder_website_103800.png")} alt=""/>
                    <p>agrilink</p>
                </Link>
                <Link to="#" className="box">
                    <img class="plus" src={require("../../water gate assets/iconfinder_Cabinet_858716.png")} alt=""/>
                    <p>e-market</p>
                </Link>
                <Link to="#" className="box">
                    <img class="plus" src={require("../../water gate assets/technology-machine-electronic-device-06-512.png")} alt=""/>
                    <p>technologies</p>
                </Link>
                <Link to="#" className="box">
                    <img className="plus" src={require("../../water gate assets/technology-machine-electronic-device-02-512.png")} alt=""/>
                    <p>services</p>
                </Link>
                <Link to="#" className="box active">
                    <p class="plus">+</p>
                    <p>view other</p>
                </Link>
            </div>
        </div>
    )
}
