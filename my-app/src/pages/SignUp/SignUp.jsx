import React from 'react';
import './SignUp.css';


const SignUp = () => {
    return (
        <div className="sign-up-page">
            <header className="header">
                <div className="logo">Acme Subscription Manager</div>
                <nav className="nav">
                    <a href="#" className="nav-link">About Us</a>
                    <a href="#" className="nav-link">Sign In</a>
                    <button className="start-free-btn">Start Free</button>
                </nav>
            </header>
            <div className="sign-up-container">
                <form className="sign-up-form">
                    <h2>Create Account</h2>
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Enter your last name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Create a password" />
                        <small>Password must be at least 8 characters</small>
                    </div>
                    <button type="submit" className="create-account-btn">Create Account</button>
                    <p className="sign-in-link">
                        Already have an account? <a href="#">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
