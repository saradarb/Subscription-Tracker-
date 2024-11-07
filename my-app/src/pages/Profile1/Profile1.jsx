import React from 'react';
import './Profile1.css';

const Profile1 = () => {
    return (
        <div className="profile-page">
            <header className="profile-header">
                <h2>Profile</h2>
                <nav className="header-nav">
                    <a href="#" className="header-link">Subscriptions</a>
                    <a href="#" className="header-link">Sign Out</a>
                </nav>
            </header>
            <div className="profile-container">
                <div className="profile-summary">
                    <div className="user-info">
                        <div className="avatar">JD</div>
                        <div>
                            <h3>John Doe</h3>
                            <p>john.doe@example.com</p>
                        </div>
                        <button className="edit-profile-btn">Edit Profile</button>
                    </div>
                    <div className="stats">
                        <div className="stat-box">
                            <p>Total Subscriptions</p>
                            <h4>6</h4>
                            <span className="status-label">3 Active</span>
                            <span className="status-label inactive">3 Inactive</span>
                        </div>
                        <div className="stat-box">
                            <p>Oldest Subscription</p>
                            <h4>Netflix</h4>
                            <p>Started on Jun 1, 2022</p>
                        </div>
                        <div className="stat-box">
                            <p>Latest Subscription</p>
                            <h4>YouTube</h4>
                            <p>Started on Oct 15, 2023</p>
                        </div>
                    </div>
                </div>
                <div className="subscription-summary"> {/*parent */}

                    <div ClassName="right-side">
                    <h3>Subscription Summary</h3>
                    <div className="active-subscriptions">
                        <p className="section-title" >Active Subscriptions</p>
                        <ul>
                            <li>Netflix&ensp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;    $12.00/mo</li>
                            <li>Amazon Prime  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;    $24.00/mo</li> 
                            <li>YouTube&ensp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;     $8.00/mo</li> 
                        </ul>
                    </div>
                    </div> {/* This is the end of the right side */}

                    <div ClassName="left-side">


                    </div>
                    <div className="monthly-spending">
                        <p className="section-title">Monthly Spending</p>
                        <p>Total Active Subscriptions &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; $84.00/mo</p>
                  
                        <div className="spending-bar-container">
                            <div className="spending-bar">
                            <p> 75% of your monthly budget</p>
                                <div className="spending-bar-fill"></div>
                                
                            </div>
                            
                           
                        </div> {/* This is the end of the right side */}
                  
                    
                    </div>{/* This is the end of the right side */}
                </div>
            </div>
        </div>
    );
};

export default Profile1;

