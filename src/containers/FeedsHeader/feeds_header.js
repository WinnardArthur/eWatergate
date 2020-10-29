import React, { Component } from 'react';
import './feeds_header.css'
import { Link } from 'react-router-dom';


const HeaderLinks = [
    {
        name: "Home",
        icon: "fa fa-home"
    },
    {
        name: "notifications",
        icon: "fa fa-bell"
    },
    {
        name: "messaging",
        icon: "fa fa-envelope"
    },
    {
        name: "water groups",
        icon: "fa fa-users"
    },
    {
        name: "water page",
        icon: "fa fa-sticky-note"
    },
    {
        name: "create",
        icon: "fa fa-user"
    },
    {
        name: "profile",
        icon: "fa fa-user"
    }
]

class FeedsHeader extends Component {
    
    handleHamburger = event => {
        const dropdown = document.querySelector('.links')
        if(dropdown.style.display === "block"){
            dropdown.style.display = "none"
        } else{
            dropdown.style.display = "block"
        }
    }

    render() {
        return (
            <div className="feeds-header">
                <div className="logo">
                    <Link to="/" className="default-logo"><img src={require("../../water gate assets/logo/logo ewater.png")} alt="ewatergate logo"/></Link>
                </div>
                <form>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                    />
                    <i className="fa fa-search"></i>
                </form>
                <ul className="links">
                    {HeaderLinks.map((link, i)=>(
                        <li key={i}>
                            <Link to="#" className="link">
                                <i className={`link-icon ${link.icon}`}></i>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="feeds-header-humburger-icon" onClick={e => this.handleHamburger(e)}>
                    <div className="feeds-bar1"></div>
                    <div className="feeds-bar2"></div>
                    <div className="feeds-bar3"></div>
                </div>
            </div>
        )
    }
}

export default FeedsHeader
