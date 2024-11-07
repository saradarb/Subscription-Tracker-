import React from 'react';
import './SignIn.css';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const SignIn = () => {
    return (
        <div className="sign-in-page">
            <header className="header">
                <div className="logo">Acme Subscription Manager</div>
                <nav className="nav">
                    <a href="#" className="nav-link">About Us</a>
                    <a href="#" className="nav-link">Sign In</a>
                    <button className="start-free-btn">Start Free</button>
                </nav>
            </header>
            <div className="sign-in-container">
                <form className="sign-in-form">
                    <h2>Sign in to your account</h2>
                    <p className="subtitle">Manage all your subscriptions in one place</p>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>
                    <div className="form-options">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-btn">Sign In</button>
                    <p className="sign-up-link">
                        Don’t have an account? <a href="#">Sign up</a>
                    </p>
                </form>
                <div className="or-continue">Or continue with</div>
                <div className="social-login">
                    <button className="social-btn google-btn"> <FcGoogle /> Google</button>
                    <button className="social-btn github-btn"> <FaGithub /> GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
