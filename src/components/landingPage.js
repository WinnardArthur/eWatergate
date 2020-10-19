import React, { Component } from 'react';
import Header from '../containers/Header/header';
import Hero from '../containers/Hero/hero';
import IconBoxes from '../containers/IconBoxes/iconboxes';
import Features from '../containers/Features/features'
import './landingPage.css'
import ContactUsSection from '../containers/ContactUsSection/contactussection';
import Polygons from '../containers/Polygons/polygon';
import Stats from '../containers/Stats/stats';
import Testimonials from '../containers/Testimonials/testimonials';
import Footer from '../containers/Footer/footer';
import VideoSection from '../containers/VideoSection/videosection';
import SignUp from '../containers/SignUpForm/signup';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div><Header/></div>
                <div><Hero/></div>
                <div><IconBoxes/></div>
                <div><Features/></div>
                <div><ContactUsSection/></div>
                <div className="landing-page-polygon-section"><Polygons/></div>
                <div><Stats/></div>
                <div><Testimonials/></div>
                <div><SignUp/></div>
                <div><VideoSection/></div>
                <div><Footer/></div>
            </div>
        )
    }
}

export default LandingPage
