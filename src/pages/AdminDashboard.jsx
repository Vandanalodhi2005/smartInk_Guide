import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/pages.css';

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Redirect if not admin
  if (!isAdmin) {
    navigate('/');
    return null;
  }

  const stats = [
    { label: 'Total Orders', value: '1,234', change: '+12%', icon: '📦' },
    { label: 'Total Revenue', value: '$45,678', change: '+8%', icon: '💰' },
    { label: 'Products', value: '156', change: '+5', icon: '🖨️' },
    { label: 'Customers', value: '892', change: '+23', icon: '👥' }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', product: 'HP LaserJet Pro', amount: '$539', status: 'Completed' },
    { id: '#1235', customer: 'Jane Smith', product: 'Canon PIXMA', amount: '$199', status: 'Processing' },
    { id: '#1236', customer: 'Bob Johnson', product: 'Epson EcoTank', amount: '$179', status: 'Shipped' }
  ];

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <p>Welcome back, {user?.name || 'Admin'}!</p>
          </div>

          <div className="admin-tabs">
            <button
              className={`admin-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`admin-tab ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              className={`admin-tab ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </button>
            <button
              className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              Users
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="admin-content">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-info">
                      <div className="stat-label">{stat.label}</div>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-change positive">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-sections">
                <div className="dashboard-card">
                  <h2>Recent Orders</h2>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.customer}</td>
                          <td>{order.product}</td>
                          <td>{order.amount}</td>
                          <td>
                            <span className={`status-badge ${order.status.toLowerCase()}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="admin-content">
              <div className="admin-actions">
                <button className="btn-primary">Add New Product</button>
                <button className="btn-secondary">Import Products</button>
              </div>
              <div className="dashboard-card">
                <h2>Product Management</h2>
                <p>Product management features will be available here.</p>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="admin-content">
              <div className="dashboard-card">
                <h2>All Orders</h2>
                <p>Order management features will be available here.</p>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="admin-content">
              <div className="dashboard-card">
                <h2>User Management</h2>
                <p>User management features will be available here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;

