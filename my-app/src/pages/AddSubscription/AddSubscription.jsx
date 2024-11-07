import React from 'react';
import './AddSubscription.css';

const AddSubscription = () => {
    return (
        <div>
            <header className="page-header">
                <h2>Add New Subscription</h2>
            </header>



        <div className="add-subscription-page">
            <div className="form-container">
                <form className="subscription-form">
                    <div className="form-group">
                        <label htmlFor="service">Service</label>
                        <input type="text" id="service" placeholder="Enter service name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" placeholder="$ 0.00" />
                    </div>







                    <div className="form-group">
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="last-digits">Last 4 Digits</label>
                        <input type="text" id="last-digits" placeholder="Enter last 4 digits" />
                    </div>

                    <div className="form-buttons">
                        <button type="submit" className="submit-btn">Add Subscription</button>
                        <button type="button" className="cancel-btn">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddSubscription;

