import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <div className="logo">Acme Subscription Manager</div>
                <nav className="nav">
                    <a href="#" className="nav-link">About Us</a>
                    <a href="#" className="nav-link">Sign In</a>
                    <button className="start-free-btn">Start Free</button>
                </nav>
            </header>
            <section className="hero">
                <div className="hero-content">
                    <h1>Take Control of Your Digital Subscriptions</h1>
                    <p>Track, manage, and optimize all your subscriptions in one place. Save money and never miss a payment again.</p>
                    <div className="hero-buttons">
                        <button className="cta-btn">Get Started Free</button>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                    <p className="trial-text">No credit card required • Free 14-day trial</p>
                </div>
                <div className="subscriptions-summary">


                    <div className="somebox">
                        <p>Active Subscriptions </p> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <p className="green">$84.00/month </p>
                    </div>
                    




                    <p className="monthly-spending">Netflix</p>
                    <p className="monthly-spending">Spotify</p>
                    <p className="monthly-spending">Amazon Prime</p>
                    <ul className="subscription-list">
                        <li><span className="subscription-name">Netflix</span> <span className="subscription-amount">$12.00</span></li>
                        <li><span className="subscription-name">Spotify</span> <span className="subscription-amount">$9.99</span></li>
                        <li><span className="subscription-name">Amazon Prime</span> <span className="subscription-amount">$139.00</span></li>
                    </ul>
                </div>
            </section>
            <section className="features">
                <h2>Why Choose Our Platform?</h2>
                <p className="features-subtitle">Everything you need to manage subscriptions effectively</p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <div className="icon">📊</div>
                        <h3>Analytics Dashboard</h3>
                        <p>Get detailed insights into your spending patterns and subscription usage.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">🔔</div>
                        <h3>Smart Reminders</h3>
                        <p>Never miss a payment with automated notifications and renewal reminders.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon">💸</div>
                        <h3>Cost Optimization</h3>
                        <p>Get recommendations to reduce costs and identify unused subscriptions.</p>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h2>Trusted by Thousands</h2>
                <p>Join over 50,000 users who have taken control of their subscriptions</p>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <div className="avatar">SJ</div>
                        <p>"This app has saved me hundreds of dollars by identifying subscriptions I forgot about. The interface is intuitive and the reminders are super helpful."</p>
                        <h4>Sarah Johnson</h4>
                        <p className="role">Small Business Owner</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="avatar">MR</div>
                        <p>"The analytics dashboard is amazing! I can see exactly where my money is going and make informed decisions about my subscriptions."</p>
                        <h4>Michael Rodriguez</h4>
                        <p className="role">Freelance Designer</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="avatar">EP</div>
                        <p>"Perfect for keeping track of all my family's subscriptions. The cost optimization features have helped us budget better."</p>
                        <h4>Emily Parker</h4>
                        <p className="role">Family Manager</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;



