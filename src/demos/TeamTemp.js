import React, { useState } from 'react';
import user from "../images/user 2.png";
import "./TeamTemp.css"

const teamData = {
    projectManagers: [
      { name: 'Alice', job: 'Project Manager', study: 'MBA', image: user },
      { name: 'Bob', job: 'Project Manager', study: 'MSc', image: user },
      { name: 'Charlie', job: 'Project Manager', study: 'BTech', image: user },
      { name: 'David', job: 'Project Manager', study: 'MBA', image: user },
      { name: 'Eve', job: 'Project Manager', study: 'MSc', image: user },
      { name: 'Frank', job: 'Project Manager', study: 'BTech', image: user },
          { name: 'Frank', job: 'Project Manager', study: 'BTech', image: user },
    ],
    qualityControl: [
      { name: 'Grace', job: 'Quality Control Specialist', study: 'BSc', image: user },
      { name: 'Heidi', job: 'Quality Control Specialist', study: 'BSc', image: user },
     
      { name: 'Judy', job: 'Quality Control Specialist', study: 'MBA', image: user },
      { name: 'Karl', job: 'Quality Control Specialist', study: 'MSc', image: user },
      { name: 'Leo', job: 'Quality Control Specialist', study: 'BSc', image: user },
      { name: 'Mallory', job: 'Quality Control Specialist', study: 'BSc', image: user },
      { name: 'Niaj', job: 'Quality Control Specialist', study: 'MBA', image: user },
      { name: 'Olivia', job: 'Quality Control Specialist', study: 'MSc', image: user },
      { name: 'Karl', job: 'Quality Control Specialist', study: 'MSc', image: user },
      { name: 'Leo', job: 'Quality Control Specialist', study: 'BSc', image: user },
      { name: 'Mallory', job: 'Quality Control Specialist', study: 'BSc', image: user },
      { name: 'Niaj', job: 'Quality Control Specialist', study: 'MBA', image: user },
      { name: 'Olivia', job: 'Quality Control Specialist', study: 'MSc', image: user },
    ],
    quantitySurveyors: [
      { name: 'Peggy', job: 'Quantity Surveyor', study: 'MBA', image: user },
      { name: 'Sybil', job: 'Quantity Surveyor', study: 'MSc', image: user },
      { name: 'Trent', job: 'Quantity Surveyor', study: 'BTech', image: user },
      { name: 'Walter', job: 'Quantity Surveyor', study: 'MBA', image: user },
      { name: 'Alice', job: 'Quantity Surveyor', study: 'MSc', image: user },
      { name: 'Bob', job: 'Quantity Surveyor', study: 'BTech', image: user },
      { name: 'Bob', job: 'Quantity Surveyor', study: 'BTech', image: user }
    ],
    structuralEngineers: [
      { name: 'Charlie', job: 'Structural Engineer', study: 'BEng', image: user },
      { name: 'David', job: 'Structural Engineer', study: 'MSc', image: user },
      { name: 'Eve', job: 'Structural Engineer', study: 'MBA', image: user },
      { name: 'Frank', job: 'Structural Engineer', study: 'BSc', image: user },
      { name: 'Grace', job: 'Structural Engineer', study: 'BSc', image: user },
      { name: 'Heidi', job: 'Structural Engineer', study: 'MSc', image: user },
    ],
    highwayEngineers: [
      { name: 'Ivan', job: 'Highway Engineer', study: 'MEng', image: user },
      { name: 'Judy', job: 'Highway Engineer', study: 'BSc', image: user },
      { name: 'Karl', job: 'Highway Engineer', study: 'MBA', image: user },
      { name: 'Leo', job: 'Highway Engineer', study: 'MSc', image: user },
      { name: 'Mallory', job: 'Highway Engineer', study: 'BSc', image: user },
      { name: 'Niaj', job: 'Highway Engineer', study: 'BTech', image: user },
      { name: 'Olivia', job: 'Highway Engineer', study: 'MSc', image: user },
      { name: 'Peggy', job: 'Highway Engineer', study: 'MBA', image: user },
      { name: 'Ivan', job: 'Highway Engineer', study: 'MEng', image: user },
      { name: 'Judy', job: 'Highway Engineer', study: 'BSc', image: user },
      { name: 'Karl', job: 'Highway Engineer', study: 'MBA', image: user },
      { name: 'Leo', job: 'Highway Engineer', study: 'MSc', image: user },
      { name: 'Mallory', job: 'Highway Engineer', study: 'BSc', image: user },
      { name: 'Niaj', job: 'Highway Engineer', study: 'BTech', image: user },
      { name: 'Olivia', job: 'Highway Engineer', study: 'MSc', image: user },
      { name: 'Peggy', job: 'Highway Engineer', study: 'MBA', image: user },
    ],
    safetyEngineers: [
      { name: 'Sybil', job: 'Safety Engineer', study: 'MSc', image: user },
      { name: 'Trent', job: 'Safety Engineer', study: 'BTech', image: user },
      { name: 'Walter', job: 'Safety Engineer', study: 'MBA', image: user },
      { name: 'Alice', job: 'Safety Engineer', study: 'MSc', image: user },
      { name: 'Bob', job: 'Safety Engineer', study: 'BSc', image: user },
      { name: 'Charlie', job: 'Safety Engineer', study: 'MSc', image: user },
    ],
    generalEngineers: [
      { name: 'David', job: 'General Engineer', study: 'BSc', image: user },
      { name: 'Eve', job: 'General Engineer', study: 'MBA', image: user },
      { name: 'Frank', job: 'General Engineer', study: 'MSc', image: user },
      { name: 'Grace', job: 'General Engineer', study: 'BTech', image: user },
      { name: 'Heidi', job: 'General Engineer', study: 'BSc', image: user },
      { name: 'Ivan', job: 'General Engineer', study: 'MSc', image: user },
      { name: 'Judy', job: 'General Engineer', study: 'MBA', image: user },
      { name: 'Ivan', job: 'Highway Engineer', study: 'MEng', image: user },
      { name: 'Judy', job: 'Highway Engineer', study: 'BSc', image: user },
      { name: 'Karl', job: 'Highway Engineer', study: 'MBA', image: user },
      { name: 'Leo', job: 'Highway Engineer', study: 'MSc', image: user },
      { name: 'Mallory', job: 'Highway Engineer', study: 'BSc', image: user },
      { name: 'Niaj', job: 'Highway Engineer', study: 'BTech', image: user },
      { name: 'Olivia', job: 'Highway Engineer', study: 'MSc', image: user },
      { name: 'Peggy', job: 'Highway Engineer', study: 'MBA', image: user },
      { name: 'Karl', job: 'General Engineer', study: 'BSc', image: user },
    ],
  };
const TeamMembers = () => {
  const [selectedRole, setSelectedRole] = useState('projectManagers');

  const renderTeamMembers = (role) => {
    return teamData[role].map((employee, index) => (
      <div
        key={index}
        className="team-member"
      >
        <img
          src={employee.image}
          alt={employee.name}
          className="team-member-image"
        />
        <h3 className="team-member-name">{employee.name}</h3>
        <p className="team-member-job"><strong>Job:</strong> {employee.job}</p>
        <p className="team-member-study"><strong>Education:</strong> {employee.study}</p>
      </div>
    ));
  };

  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>

      {/* Tabs for roles */}
      <div className="tabs-container">
        {Object.keys(teamData).map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`tab-button ${role === selectedRole ? 'active' : ''}`}
          >
            {role
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())} {/* Capitalize and add space */}
          </button>
        ))}
      </div>

      {/* Employee details */}
      <div className="team-members">
        {renderTeamMembers(selectedRole)}
      </div>
    </div>
  );
};

export default TeamMembers;
