import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    
    state = {
        name: "",
        password: "",
        passwordConfirmation: ""
    }
    
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="signup-form">
                <form>
                    <div className="form-header">
                        <h1>Sign up</h1>
                        <Link to="#" className="log-in">or log in</Link>
                    </div>
                    <div className="form-body">
                        <div className="username">
                            <label htmlFor="name">Username or email</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                value={this.state.name}
                                onChange={e => this.handleChange(e)}
                                required
                            />
                        </div>
                        <div className="password">
                            <div className="password-labels">
                                <label htmlFor="password">Password</label>
                                <button>Generate secure password</button>
                            </div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                value={this.state.password}
                                onChange={e => this.handleChange(e)}
                                required 
                            />
                            <label>Confirm Password</label>
                            <input 
                                type="password" 
                                name="passwordConfirmation" 
                                id="passwordConfirmation"
                                value={this.state.passwordConfirmation}
                                onChange={e => this.handleChange(e)}
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-footer">
                        <div className="checks">
                            <h4>Show password</h4>
                            <div>
                                <input type="checkbox"/>
                            </div>
                        </div>
                        <div className="checks">
                            <h4>Keep me logged in</h4>
                            <div>
                                <input type="checkbox"/>
                            </div>
                        </div>
                        <div className="checks">
                            <h4>Subscribe to weekly newsletter</h4>
                            <div>
                                <input type="checkbox"/>
                            </div>
                        </div>
                        <button onClick={e => this.submitForm(e)}>Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
