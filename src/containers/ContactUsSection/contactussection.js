import React from 'react';
import './contactussection.css';
import { Link } from 'react-router-dom';


export default function ContactUsSection() {
    return (
        <div className="contact-section">
            <div className="text">
                <h5>watch our video</h5>
                <h1>get better solutions for <span>water</span></h1>
                <p>Agrisuit is generating ultimate and lasting solutions that improve farm yield and generates income for its users, be it large or small</p>
                <Link to="#">contact us</Link>
            </div>
        </div>
    )
}
