import React, { useState } from 'react';

function TicketForm({ createTicket }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTicket(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter ticket description"
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
}

export default TicketForm;
