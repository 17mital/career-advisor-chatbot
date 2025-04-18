import React from 'react';

function Sidebar({ user, onLogout }) {
  if (!user) return null; // Or return a loading spinner, or placeholder

  return (
    <div id="sidebar" className="sidebar">
      

      <h2>Career Advisor</h2>
      <div className="user-info">
        <div>
          <h3>{user.name}</h3>
          <p className="email">{user.email}</p>
        </div>
      </div>
      <ul>
        <li><a href="/scholarship">Scholarships</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><button className="logout-button" onClick={onLogout}>Logout</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
