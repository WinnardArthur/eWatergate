import React, { Component } from 'react';
import './start_post.css';


class StartPost extends Component {
    render() {
        return (
            <div className="start-post">
                <div className="row-1">
                    <button>
                        <img src={require("../../water gate assets/logo/Icon 6.jpg")} alt="write-post" />
                        <h6>Start a post</h6>
                    </button>
                </div>
                <div className="buttons">
                    <button>
                        <img src={require("../../water gate assets/logo/Icon 4.jpg")} alt="camera"/>
                        Photo
                    </button>
                    <button>
                    <img src={require("../../water gate assets/logo/Icon 5.jpg")} alt="video"/>
                        Video
                    </button>
                    <button>
                        <img src={require("../../water gate assets/logo/Icon 6.jpg")} alt="write-post" />
                        Write article
                    </button>
                </div>
            </div>
        )
    }
}

export default StartPost
