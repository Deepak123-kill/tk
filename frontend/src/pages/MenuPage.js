// src/pages/MenuPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css';

function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <h2>Welcome to BlockSecure</h2>
      <div className="menu-buttons">
        <button onClick={() => navigate('/create')}>Create Ticket</button>
        <button onClick={() => navigate('/view')}>View Tickets</button>
      </div>
    </div>
  );
}

export default MenuPage;
