import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export class Header extends Component {

    state={
        name: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: [e.target.value]})
    }


    handleHamburger = event => {
        // event.target.classList.toggle("change")
        const dropdown = document.querySelector('.links')
        if(dropdown.style.display === "block"){
            dropdown.style.display = "none"
        } else{
            dropdown.style.display="block"
        }
    }


    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <Link to="/" className="default-logo"><img src={require("../../water gate assets/logo/logo ewater.png")} alt="ewatergate logo"/></Link>
                        <Link to="/" className="small-logo"><img src={require("../../water gate assets/logo/icon E.png")} alt="ewatergate logo"/></Link>
                    </div>
                    <div>
                        <form>
                            <input 
                                type="text" 
                                name="name"  
                                placeholder="Search"
                                value={this.state.name}
                                onChange={e => this.handleChange(e)}
                                id="name"
                            />    
                        </form> 
                    </div>
                    <ul className="links">
                        <li><Link to="#" className="link">services</Link></li>
                        <li><Link to="#" className="link">technology</Link></li>
                        <li><Link to="#" className="link">agri-market</Link></li>
                        <li><Link to="#" className="link">agrilink</Link></li>
                        <li><Link to="#" className="link btn">sign in</Link></li>
                    </ul>
                    <div className="header-hamburger-icon" onClick={e => this.handleHamburger(e)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
