// src/components/OfficerForm.js
import React, { useState } from 'react';

const OfficerForm = ({ addOfficer }) => {
  const [formData, setFormData] = useState({
    name: '',
    rank: '',
    country: '',
    startDate: '',
    endDate: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addOfficer(formData);
    setFormData({ name: '', rank: '', country: '', startDate: '', endDate: '' });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Rank</label>
        <input
          type="text"
          className="form-control"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Country of Deployment</label>
        <input
          type="text"
          className="form-control"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          className="form-control"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          className="form-control"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Add Officer</button>
    </form>
  );
};

export default OfficerForm;
