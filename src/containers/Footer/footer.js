import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer-section">
            <section className="subscribe">
                <h1>to get latest news and futher updates</h1>
                <h2>subscribe to our newsletter</h2>
                <Link to="#" className="button">subscribe</Link>
            </section>
            <div className="information">
                <div className="logo">
                    <Link to="#"><img src={require("../../water gate assets/ewater.png")} alt="" /></Link>
                </div>
                <div className="info-1">
                    <h4><Link to="#">community</Link></h4>
                    
                    <li><Link to="#">create account</Link></li>
                    <li><Link to="#">go to premium</Link></li>
                    <li><Link to="#">prefer a friend</Link></li>
                    <li><Link to="#">get coupon code</Link></li>
                </div>
                <div className="info-2">
                    <h4><Link to="#">support</Link></h4>
                    
                    <li><Link to="#">terms & condition</Link></li>
                    <li><Link to="#">privacy & policy</Link></li>
                    <li><Link to="#">copyright issue</Link></li>
                    <li><Link to="#">get help</Link></li>
                </div>
                <div className="info-3">
                    <h4><Link to="#">join us</Link></h4>
                    
                    <li><Link to="#">become a member</Link></li>
                    <li><Link to="#">join agrilink</Link></li>
                    <li><Link to="#">build your farm software</Link></li>
                    <li><Link to="#">partnership</Link></li>
                </div>
                <div className="info-4">
                    <h4>download app</h4>
                    <li className="first-btn">
                        <Link to="#"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="img-1" alt=""/></Link>
                    </li>
                    <li className="second-btn">
                        <Link to="#"><img src="https://p7.hiclipart.com/preview/422/842/453/app-store-android-google-play-get-started-now-button.jpg" className="img-2" alt=""/></Link>
                    </li>
                </div>
            </div>

            <footer>
                <div>
                    copyright &copy; 2020 agrilink team
                </div>
                <div>
                    go to top <a href="#header"><i className="fa fa-arrow-up"></i></a>
                </div>
            </footer>
        </div>
    )
}
