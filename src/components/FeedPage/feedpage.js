import React, { Component } from 'react';
import './feedpage.css';
import FeedpageLeftSidebar from '../../containers/FeedPageLeftSidebar/feedpage_leftsidebar'
import FeedsHeader from '../../containers/FeedsHeader/feeds_header'
import FeedpageRightSidebar from '../../containers/FeedpageRightSidebar/feedpage_rightsidebar';
import Polygons from '../../containers/Polygons/polygon'
import StartPost from '../../containers/StartPost/start_post';
import FeedsMedia from '../../containers/FeedsMedia/feedsmedia'

class FeedPage extends Component {

    toggleSidebar = event => {
        const sidebar = document.querySelector('.column-1')
        const sidebar2 = document.querySelector('.column-3')
        if (sidebar.style.display === "block"){
            sidebar.style.display = "none"
        } else{
            sidebar.style.display = "block"
        }
        if(sidebar2.style.display === "block"){
            sidebar2.style.display = "none"
        } else{
            sidebar2.style.display = "block"
        }
    }

    render(){
        return (
            <div className="feedpage">
                <div className="feedpage-header">
                    <FeedsHeader/>
                </div>
                <h3 style={{color: "#003366", textDecoration: "underline", textAlign: "center"}}>This section is reserved for banner ads banner ads will be passing it will be nice to have banner ads passing here</h3>
            <div className="content">
                <div className="column-1">
                    <FeedpageLeftSidebar/>
                </div>
                <div className="column-2">
                    <div><Polygons/></div>
                    <div><StartPost/></div>
                    <div><FeedsMedia/></div>
                </div>
                <div className="column-3">
                    <FeedpageRightSidebar/>
                </div>
                <div className="toggle-btn" onClick={e => this.toggleSidebar(e)}>
                    <i className="fa fa-chevron-right" style={{fontSize: "1.2rem", color: "white"}}></i>
                </div>
            </div>
            </div>
        )
    }
}

export default FeedPage