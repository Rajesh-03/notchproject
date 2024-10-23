import React, { useState } from 'react';
import user from "../../images/user 2.png"

// Sample employee data with images
const teamData = {
  projectManagers: [
    { name: 'Alice', job: 'Project Manager', study: 'MBA', image:user },
    { name: 'Alice', job: 'Project Manager', study: 'MBA', image:user },
    { name: 'Alice', job: 'Project Manager', study: 'MBA', image:user },
    { name: 'Alice', job: 'Project Manager', study: 'MBA', image:user },
    { name: 'Alice', job: 'Project Manager', study: 'MBA', image:user },
    { name: 'Alice', job: 'Project Manager', study: 'MBA', image:user },
    
  ],
  qualityControl: [
    { name: 'Charlie', job: 'Quality Control Specialist', study: 'B.Tech', image: 'https://via.placeholder.com/150' },
    { name: 'Dave', job: 'Quality Control Specialist', study: 'B.Sc', image: 'https://via.placeholder.com/150' },
    { name: 'Emma', job: 'Quality Control Specialist', study: 'B.Sc', image: 'https://via.placeholder.com/150' },
    { name: 'Fred', job: 'Quality Control Specialist', study: 'B.Sc', image: 'https://via.placeholder.com/150' },
    { name: 'Gina', job: 'Quality Control Specialist', study: 'B.Sc', image: 'https://via.placeholder.com/150' },
    { name: 'Hank', job: 'Quality Control Specialist', study: 'B.Sc', image: 'https://via.placeholder.com/150' },
  ],
  quantitySurveyors: [
    { name: 'Eve', job: 'Quantity Surveyor', study: 'B.Sc', image: 'https://via.placeholder.com/150' },
  ],
  structuralEngineers: [
    { name: 'Frank', job: 'Structural Engineer', study: 'B.Tech', image: 'https://via.placeholder.com/150' },
  ],
  highwayEngineers: [
    { name: 'Grace', job: 'Highway Engineer', study: 'M.Tech', image: 'https://via.placeholder.com/150' },
  ],
  safetyEngineers: [
    { name: 'Heidi', job: 'Safety Engineer', study: 'B.Sc', image: 'https://via.placeholder.com/150' },
  ],
  generalEngineers: [
    { name: 'Ivan', job: 'General Engineer', study: 'B.Tech', image: 'https://via.placeholder.com/150' },
  ],
};

const TeamMembers = () => {
  const [selectedRole, setSelectedRole] = useState('projectManagers');

  const renderTeamMembers = (role) => {
    return teamData[role].map((employee, index) => (
      <div
        key={index}
        style={{
          textAlign: 'center', // Center align the content
          marginBottom: '30px',
          flex: '0 1 calc(16.66% - 20px)', // Fit 6 items per row
          boxSizing: 'border-box',
        }}
      >
        <img
          src={employee.image}
          alt={employee.name}
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            marginBottom: '15px',
            objectFit: 'cover',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <h3 style={{ fontSize: '20px', margin: '10px 0 5px 0' }}>{employee.name}</h3>
        <p style={{ fontSize: '16px', margin: '5px 0' }}><strong>Job:</strong> {employee.job}</p>
        <p style={{ fontSize: '16px', margin: '5px 0' }}><strong>Education:</strong> {employee.study}</p>
      </div>
    ));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f8fc', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Team</h1>

      {/* Tabs for roles */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        {Object.keys(teamData).map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            style={{
              padding: '10px 20px',
              margin: '0 10px',
              backgroundColor: selectedRole === role ? '#007BFF' : '#ccc',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            {role
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())} {/* Capitalize and add space */}
          </button>
        ))}
      </div>

      {/* Employee details directly */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {renderTeamMembers(selectedRole)}
      </div>
    </div>
  );
};

export default TeamMembers;
