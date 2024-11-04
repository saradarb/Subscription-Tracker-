import React from 'react';
import './AboutUs.css';
import { TiPlus } from "react-icons/ti";
import { CiDollar } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="header">
                <div className="logo">Acme Subscription Manager</div>
                <div className="nav-buttons">
                    <button className="sign-in">Sign In</button>
                    <button className="sign-up">Sign Up</button>
                </div>
            </header>

            <section className="hero-section">
                <h1>Simplify Your Digital Life</h1>
                <p>We help you take control of your subscriptions, save money, and never miss a payment.</p>
            </section>

            <section className="features">
                <div className="feature">
                    <div className="icon"> <TiPlus /> </div>
                    <h3>Track Everything</h3>
                    <p>Monitor all your subscriptions in one place. Never lose track of what you're paying for.</p>
                </div>
                <div className="feature">
                    <div className="icon"> <CiDollar /> </div>
                    <h3>Save Money</h3>
                    <p>Identify unused subscriptions and optimize your spending with smart recommendations.</p>
                </div>
                <div className="feature">
                    <div className="icon"> <CiBellOn /> </div>
                    <h3>Never Miss a Payment</h3>
                    <p>Get timely reminders before payments are due and track renewal dates effortlessly.</p>
                </div>
            </section>

            <section className="statistics">
                <div className="stat">
                    <h2>50K+</h2>
                    <p>Active Users</p>
                </div>
                <div className="stat">
                    <h2>$2M+</h2>
                    <p>Saved by Users</p>
                </div>
                <div className="stat">
                    <h2>100K+</h2>
                    <p>Subscriptions Managed</p>
                </div>
            </section>

            
            <section className="team">
    <h2>Meet Our Team</h2>
    <div className="onlyteam"> {/* Correct className */}
        <div className="team-member">
            <div className="avatar">JS</div>
            <h3>John Smith</h3>
            <p>CEO & Founder</p>
        </div>
        <div className="team-member">
            <div className="avatar">SD</div>
            <h3>Sarah Davis</h3>
            <p>Head of Product</p>
        </div>
        <div className="team-member">
            <div className="avatar">MR</div>
            <h3>Mike Roberts</h3>
            <p>Lead Developer</p>
        </div>
    </div>
</section>

            {/* Call to Action Section */}
            <section className="cta">
                <h2>Ready to Take Control?</h2>
                <p>Join thousands of users who have simplified their subscription management and saved money.</p>
                <button className="cta-button">Get Started for Free</button>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Product</h4>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
                <p className="copyright">
                    © 2024 Acme Subscription Manager. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default AboutUs;
