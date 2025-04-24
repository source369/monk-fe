import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const linkStyle = {
    display: 'block',
    padding: '10px 15px',
    textDecoration: 'none',
    color: '#333'
  };

  return (
    <div style={{
      width: '200px',
      height: '100vh',
      padding: '1rem',
      backgroundColor: '#f4f4f4',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <h3>SLArama</h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { ...linkStyle, fontWeight: 'bold', color: '#007bff' }
                  : linkStyle
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              style={({ isActive }) =>
                isActive
                  ? { ...linkStyle, fontWeight: 'bold', color: '#007bff' }
                  : linkStyle
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stay-request"
              style={({ isActive }) =>
                isActive
                  ? { ...linkStyle, fontWeight: 'bold', color: '#007bff' }
                  : linkStyle
              }
            >
              Stay Request
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}