import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscriptions.css';
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";

const Subscriptions = () => {
    const navigate = useNavigate();
    
    const [activeSubscriptions, setActiveSubscriptions] = useState([
        { id: 1, service: 'Netflix', amount: 12.00, period: 'Monthly', nextBilling: 'Nov 1, 2024', status: 'Active', payment: '****1234' },
        { id: 2, service: 'Amazon Prime', amount: 24.00, period: 'Annual', nextBilling: 'Jun 1, 2025', status: 'Active', payment: '****5678' },
        { id: 3, service: 'YouTube Premium', amount: 48.00, period: 'Annual', nextBilling: 'Dec 1, 2024', status: 'Active', payment: '****9012' },
    ]);

    const [inactiveSubscriptions, setInactiveSubscriptions] = useState([
        { id: 1, service: 'Google Cloud', lastAmount: 12.00, period: 'Monthly', endDate: 'Oct 15, 2024', status: 'Inactive', payment: '****1234' },
    ]);

    const [isEditing, setIsEditing] = useState(false);
    const [editSubscription, setEditSubscription] = useState(null);
    const [newSubscription, setNewSubscription] = useState({
        id: null,
        service: '',
        amount: '',
        period: '',
        nextBilling: '',
        status: 'Active',
        payment: '',
    });

    const [monthlySpending, setMonthlySpending] = useState(0);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    // Calculate total monthly spending for all subscriptions
    useEffect(() => {
        const total = activeSubscriptions.reduce((sum, subscription) => {
            return sum + subscription.amount;
        }, 0);
        setMonthlySpending(total);
    }, [activeSubscriptions]);

    // Delete function for active subscriptions
    const handleDelete = (id) => {
        setActiveSubscriptions(activeSubscriptions.filter(subscription => subscription.id !== id));
    };

    // Toggle subscription status between Active and Inactive
    const toggleStatus = (subscription) => {
        if (subscription.status === 'Active') {
            setActiveSubscriptions(activeSubscriptions.filter(item => item.id !== subscription.id));
            setInactiveSubscriptions([
                ...inactiveSubscriptions,
                { ...subscription, status: 'Inactive', lastAmount: subscription.amount },
            ]);
        } else {
            setInactiveSubscriptions(inactiveSubscriptions.filter(item => item.id !== subscription.id));
            setActiveSubscriptions([
                ...activeSubscriptions,
                { ...subscription, status: 'Active', amount: subscription.lastAmount || 0 },
            ]);
        }
    };

    // Open form for editing a subscription
    const handleEdit = (subscription) => {
        setIsEditing(true);
        setEditSubscription(subscription);
        setNewSubscription(subscription);
    };

    // Save edited subscription
    const handleSave = () => {
        setActiveSubscriptions(activeSubscriptions.map(sub => (sub.id === newSubscription.id ? newSubscription : sub)));
        setIsEditing(false);
        setEditSubscription(null);
        setNewSubscription({ id: null, service: '', amount: '', period: '', nextBilling: '', status: 'Active', payment: '' });
    };

    // Handle form inputs for adding or editing a subscription
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSubscription({ ...newSubscription, [name]: value });
    };

    // Navigate to the Add Subscription page
    const handleAddSubscription = () => {
        navigate('/AddSubscription');
    };

    // Navigate to the Home page
    const handleSignOut = () => {
        navigate('/');
    };

    // Navigate to the About Us page
    const handleAboutUs = () => {
        navigate('/AboutUs');
    };

    // Toggle search visibility
    const handleSearchClick = () => {
        setIsSearchVisible(!isSearchVisible);
        setSearchTerm('');
    };

    // Toggle sidebar visibility
    const handleBellClick = () => {
        setIsSidebarVisible(true);
    };

    // Close sidebar
    const closeSidebar = () => {
        setIsSidebarVisible(false);
    };

    // Filter active subscriptions based on search term
    const filteredActiveSubscriptions = activeSubscriptions.filter(subscription =>
        subscription.service.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="subscriptions-page">
            <header className="header">
                <div className="logo">Acme Subscription Manager</div>
                <nav className="nav">
                    <a href="#" className="nav-link">Subscriptions</a>
                    <a href="#" className="nav-link" onClick={handleSignOut}>Sign Out</a>
                    <a href="#" className="nav-link" onClick={handleAboutUs}>About Us</a>
                    <div className="icons">
                        <button className="icon-btn" onClick={handleSearchClick}> <CiSearch /> </button>
                        <button className="icon-btn" onClick={handleBellClick}> <GoBell /> </button>
                    </div>
                </nav>
            </header>

            {/* Sidebar for notifications */}
            {isSidebarVisible && (
                <div className="sidebar">
                    <button className="close-btn" onClick={closeSidebar}>X</button>
                    <p>You have no new notifications</p>
                </div>
            )}

            {/* Display search input if search is visible */}
            {isSearchVisible && (
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search subscriptions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}

            {/* Rest of the component remains unchanged */}
            <section className="summary-section">
                <div className="summary-card">
                    <p>Active Subscriptions</p>
                    <h3>{activeSubscriptions.length}</h3>
                </div>
                <div className="summary-card">
                    <p>Monthly Spending</p>
                    <h3>${monthlySpending.toFixed(2)}</h3>
                </div>
                <div className="summary-card">
                    <p>Next Payment</p>
                    <h3>Nov 1</h3>
                </div>
            </section>

            <section className="subscriptions-table">
                <h2>Active subscriptions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>Amount</th>
                            <th>Period</th>
                            <th>Next Billing</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredActiveSubscriptions.map((subscription, index) => (
                            <tr key={subscription.id}>
                                <td>{index + 1}</td>
                                <td>{subscription.service}</td>
                                <td>${subscription.amount.toFixed(2)}</td>
                                <td>{subscription.period}</td>
                                <td>{subscription.nextBilling}</td>
                                <td><span className="status active">{subscription.status}</span></td>
                                <td>{subscription.payment}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => handleEdit(subscription)}>Edit</button>
                                    <button className="delete-btn" onClick={() => handleDelete(subscription.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2>Inactive subscriptions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>Last Amount</th>
                            <th>Period</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inactiveSubscriptions.map((subscription, index) => (
                            <tr key={subscription.id}>
                                <td>{index + 1}</td>
                                <td>{subscription.service}</td>
                                <td>${subscription.lastAmount.toFixed(2)}</td>
                                <td>{subscription.period}</td>
                                <td>{subscription.endDate}</td>
                                <td><span className="status inactive">{subscription.status}</span></td>
                                <td>{subscription.payment}</td>
                                <td>
                                    <button className="reactivate-btn" onClick={() => toggleStatus(subscription)}>Reactivate</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="total-summary">
                <p>Total Active Subscriptions: <strong>{activeSubscriptions.length}</strong></p>
                <p>Monthly Spending: <strong>${monthlySpending.toFixed(2)}</strong></p>
                <p>Annual Spending: <strong>$1,008.00</strong></p>
                <button className="export-btn">Export CSV</button>
                <button className="add-subscription-btn" onClick={handleAddSubscription}>+ Add Subscription</button>
            </section>

            {isEditing && (
                <div className="edit-form">
                    <h3>Edit Subscription</h3>
                    <input type="text" name="service" value={newSubscription.service} onChange={handleInputChange} placeholder="Service" />
                    <input type="number" name="amount" value={newSubscription.amount} onChange={handleInputChange} placeholder="Amount" />
                    <input type="text" name="period" value={newSubscription.period} onChange={handleInputChange} placeholder="Period" />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
};

export default Subscriptions;













