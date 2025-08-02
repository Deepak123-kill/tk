import React from 'react';

function TicketList({ tickets }) {
  return (
    <div>
      <h2>Tickets</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>{ticket}</li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
