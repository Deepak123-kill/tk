import React, { useState } from 'react';
import api from '../services/api';
import './CreateTicket.css';

function CreateTicket() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tickets', {title,description});
      setMessage('✅ Ticket created successfully!');
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('❌ Error creating ticket:', err.response?.data || err.message);
      setMessage('❌ Failed to create ticket. Make sure you are logged in.');
    }
  };

  return (
    <div className="create-container">
      <h2>Create New Ticket</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />

        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          rows="5" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />

        <button type="submit">Submit Ticket</button>
      </form>
      {message && <p style={{ marginTop: '15px', color: 'lightgreen' }}>{message}</p>}
    </div>
  );
}

export default CreateTicket;
