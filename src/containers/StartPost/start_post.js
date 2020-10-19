import React, { Component } from 'react';
import './start_post.css';


class StartPost extends Component {
    render() {
        return (
            <div className="start-post">
                <div className="row-1">
                    <button>
                        <i className="fa fa-edit"></i>
                        <h6>Start a post</h6>
                    </button>
                </div>
                <div className="buttons">
                    <button>
                        <i className="fa fa-camera"></i>
                        Photo
                    </button>
                    <button>
                        <i className="fa fa-camera"></i>
                        Video
                    </button>
                    <button>
                        <i className="fa fa-edit"></i>
                        Write article
                    </button>
                </div>
            </div>
        )
    }
}

export default StartPost
