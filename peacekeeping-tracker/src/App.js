// src/App.js
import React, { useState } from 'react';
import OfficerForm from './components/OfficerForm';
import OfficerList from './components/OfficerList';

const App = () => {
  const [officers, setOfficers] = useState([]);

  // Function to add a new officer to the list
  const addOfficer = (newOfficer) => {
    setOfficers([...officers, newOfficer]);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">UN Peacekeeping Mission Tracker</h1>
      <OfficerForm addOfficer={addOfficer} />
      <OfficerList officers={officers} />
    </div>
  );
};

export default App;

