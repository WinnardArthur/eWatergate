import React, { Component } from 'react'
import './feedsmedia.css';
import { Link } from 'react-router-dom';

class FeedsMedia extends Component {

    state = {
        comment: ""
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="feeds-media">
                <div className="category">
                    <p>Sort by: <span>Portable Water<i className="fa fa-caret-down"></i></span></p>
                </div>
                <div className="media-one">
                    <div className="water-category">
                        <h5>Portable water</h5>
                    </div>
                    <div className="heading">
                        <div className="left-info">
                            <div className="round-div"></div>
                            <div className="user-info">
                                <h5>Fabrice Abunde <span>2h</span></h5>
                                <p>Water Index 14</p>
                            </div>
                        </div>
                        <button className="ellipses">...</button>
                        
                    </div>
                    <p className="text">
                        Where is teh water sector in the digital race? Here are some of the insights discussed at the IWA World
                        Water Congress & Exhibition 2018 in Tokyo, Japan. The digitisation of water was a central theme at the IWA #WorldWaterCongress.
                        Keynotes, panelists, workshops and exhibitors all aligned in the contribution
                        to a common understanding of the digital water future. Listen to the IWA memebership and how it intends to contribute
                        to the topic. Learn more: <Link to="#" className="learn-more">www.worldwatercongress.org</Link>
                    </p>
                    <div className="media-video">
                        <video controls poster={require('../../water gate assets/knowledge-technology-concept.png')}>
                            <source src={require('../../water gate assets/videos/Felix Navidad.mp4')} />
                        </video>
                    </div>
                    <div className="media-stats">
                        <p><span>23</span> Likes</p>
                        <p><span>15</span> Comments</p>
                        <p><span>5</span> Shares</p>
                    </div>
                    <div className="options">
                        <div className="multiple-btns">
                            <button>
                                <i className="fa fa-thumbs-up"></i>
                                <h6>Like</h6>
                            </button>
                            <button>
                                <i className="fa fa-comment"></i>
                                <h6>Comment</h6>
                            </button>
                            <button>
                                <i className="fa fa-share"></i>
                                <h6>Share</h6>
                            </button>
                        </div>
                        <div className="message-btn">
                            <button>Message</button>
                        </div>
                    </div>
                    <div className="comment-area">
                        <div className="round-div"></div>
                        <div className="comment">
                            <h5>Fabrice Abunde <span>2h</span></h5>
                            <form>
                                <input 
                                    type="text" 
                                    name="comment" 
                                    id="comment"
                                    value={this.state.comment}
                                    onChange={e=>this.handleChange(e)}
                                    placeholder="Write a Comment" 
                                />
                                <div></div>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="media-one media-two">
                    <div className="water-category">
                        <h5>Storm water</h5>
                    </div>
                    <div className="heading">
                        <div className="left-info">
                            <div className="round-div"></div>
                            <div className="user-info">
                                <h5>Fabrice Abunde <span>2h</span></h5>
                                <p>Water Index 14</p>
                            </div>
                        </div>
                        <button className="ellipses">...</button>
                        
                    </div>
                    <p className="text">
                        Where is teh water sector in the digital race? Here are some of the insights discussed at the IWA World
                        Water Congress & Exhibition 2018 in Tokyo, Japan. The digitisation of water was a central theme at the IWA #WorldWaterCongress.
                        Keynotes, panelists, workshops and exhibitors all aligned in the contribution
                        to a common understanding of the digital water future. Listen to the IWA memebership and how it intends to contribute
                        to the topic. Learn more: <Link to="#" className="learn-more">www.worldwatercongress.org</Link>
                    </p>
                    <div className="media-video">
                        <video controls poster={require('../../water gate assets/knowledge-technology-concept.png')}>
                            <source src={require('../../water gate assets/videos/Felix Navidad.mp4')} />
                        </video>
                    </div>
                    <div className="media-stats">
                        <p><span>23</span> Likes</p>
                        <p><span>15</span> Comments</p>
                        <p><span>5</span> Shares</p>
                    </div>
                    <div className="options">
                        <div className="multiple-btns">
                            <button>
                                <i className="fa fa-thumbs-up"></i>
                                <h6>Like</h6>
                            </button>
                            <button>
                                <i className="fa fa-comment"></i>
                                <h6>Comment</h6>
                            </button>
                            <button>
                                <i className="fa fa-share"></i>
                                <h6>Share</h6>
                            </button>
                        </div>
                        <div className="message-btn">
                            <button>Message</button>
                        </div>
                    </div>
                    <div className="comments">
                        <div className="comment-row">
                            <div className="main-comment">
                                <div className="round-div"></div>
                                <div className="comment-info">
                                    <h5>Fabrice Abunde <span>2h</span></h5>
                                    <p>This is an interesting concept which I feel will solve the 
                                        problem of water and sanitation in the developing countries
                                    </p>
                                    <div className="like-comment">
                                        <button><i className="fa fa-thumbs-up"></i>Like</button>
                                        <button><i className="fa fa-comment"></i>Comment</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="comment-row">
                            <div className="main-comment">
                                <div className="round-div"></div>
                                <div className="comment-info">
                                    <h5>Fabrice Abunde <span>2h</span></h5>
                                    <p>This is an interesting concept which I feel will solve the 
                                        problem of water and sanitation in the developing countries
                                    </p>
                                    <div className="like-comment">
                                        <button><i className="fa fa-thumbs-up"></i>Like</button>
                                        <button><i className="fa fa-comment"></i>Comment</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="main-comment sub-comment">
                                    <div className="round-div"></div>
                                    <div className="comment-info">
                                        <h5>Fabrice Abunde <span>2h</span></h5>
                                        <p>This is an interesting concept which I feel will solve the 
                                            problem of water and sanitation in the developing countries
                                        </p>
                                        <div className="like-comment">
                                            <button><i className="fa fa-thumbs-up"></i>Like</button>
                                            <button><i className="fa fa-comment"></i>Comment</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-comment sub-comment">
                                    <div className="round-div"></div>
                                    <div className="comment-info">
                                        <h5>Fabrice Abunde <span>2h</span></h5>
                                        <p>This is an interesting concept which I feel will solve the 
                                            problem of water and sanitation in the developing countries
                                        </p>
                                        <div className="like-comment">
                                            <button><i className="fa fa-thumbs-up"></i>Like</button>
                                            <button><i className="fa fa-comment"></i>Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="comment-row">
                            <div className="main-comment">
                                <div className="round-div"></div>
                                <div className="comment-info">
                                    <h5>Fabrice Abunde <span>2h</span></h5>
                                    <p>This is an interesting concept which I feel will solve the 
                                        problem of water and sanitation in the developing countries
                                    </p>
                                    <div className="like-comment">
                                        <button><i className="fa fa-thumbs-up"></i>Like</button>
                                        <button><i className="fa fa-comment"></i>Comment</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="comment-area">
                        <div className="round-div"></div>
                        <div className="comment">
                            <h5>Fabrice Abunde <span>2h</span></h5>
                            <form>
                                <input 
                                    type="text" 
                                    name="comment" 
                                    id="comment"
                                    value={this.state.comment}
                                    onChange={e=>this.handleChange(e)}
                                    placeholder="Write a Comment" 
                                />
                                <div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedsMedia
