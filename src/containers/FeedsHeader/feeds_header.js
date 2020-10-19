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

export class FeedsHeader extends Component {
    render() {
        return (
            <div className="feeds-header">
                <div className="logo">
                    <img src={require("../../water gate assets/e-watergate logo.png")} alt="ewatergate"/>
                </div>
                <form>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                    />
                    <i className="fa fa-search"></i>
                </form>
                <ul>
                    {HeaderLinks.map((link, i)=>(
                        <li key={i}>
                            <Link to="#" className="link">
                                <i className={`link-icon ${link.icon}`}></i>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default FeedsHeader
