import React, { useState } from 'react';

function GuestList() {
  const [guests, setGuests] = useState([]);

  const addGuest = (guest) => {
    setGuests([...guests, guest]);
  };

  const removeGuest = (index) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    setGuests(updatedGuests);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Guest Name" />
        <button>Add Guest</button>
      </form>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>
        
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList;
