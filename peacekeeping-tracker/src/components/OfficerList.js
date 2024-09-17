// src/components/OfficerList.js
import React from 'react';

const OfficerList = ({ officers }) => {
  return (
    <div>
      <h2>Deployed Officers</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Country</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {officers.length > 0 ? (
            officers.map((officer, index) => (
              <tr key={index}>
                <td>{officer.name}</td>
                <td>{officer.rank}</td>
                <td>{officer.country}</td>
                <td>{officer.startDate}</td>
                <td>{officer.endDate || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No officers deployed</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OfficerList;
