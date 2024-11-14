import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const theSentThing = {
            username: formData.firstName + ' ' + formData.lastName,
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await fetch('https://zafrino-5e5b8bdb623d.herokuapp.com/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(theSentThing)
            });

            if (response.ok) {
                const data = await response.json();
                alert('Account created successfully!');
                console.log('User data:', data);
            } else {
                throw new Error('Failed to create account');
            }
        } catch (error) {
            alert('Failed to create account. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="sign-up-page">
            <header className="header">
                <div className="logo">Acme Subscription Manager</div>
                <nav className="nav">
                    <a href="#" className="nav-link" onClick={() => navigate('/AboutUs')}>About Us</a>
                    <a href="#" className="nav-link" onClick={() => navigate('/SignIn')}>Sign In</a>
                    <button className="start-free-btn" onClick={() => navigate('/SignUp')}>Start Free</button>
                </nav>
            </header>
            <div className="sign-up-container">
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <h2>Create Account</h2>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Create a password" value={formData.password} onChange={handleChange} />
                        <small>Password must be at least 8 characters</small>
                    </div>
                    <button type="submit" className="create-account-btn">Create Account</button>
                    <p className="sign-in-link">
                        Already have an account? <a href="#" onClick={() => navigate('/SignIn')}>Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
