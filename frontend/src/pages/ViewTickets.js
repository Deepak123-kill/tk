import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './ViewTickets.css';

const ViewTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Get user role from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.role) {
      setUserRole(user.role);
    }

    // Fetch tickets from backend
    const fetchTickets = async () => {
      try {
        const res = await api.get('/tickets');
        setTickets(res.data);
      } catch (err) {
        console.error('Error fetching tickets:', err);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="view-tickets-container">
      <h2>View Tickets</h2>

      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        tickets.map((ticket) => (
          <div className="ticket" key={ticket._id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>

            {/* Show createdBy name only for admin users */}
            {userRole === 'admin' && ticket.createdBy?.name && (
              <p className="creator">
                Created by: <strong>{ticket.createdBy.name}</strong>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ViewTickets;
