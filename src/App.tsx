import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StayRequest from './pages/StayRequest';
import Sidebar from './components/Sidebar';
import UserHeader from './components/UserHeader';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '2rem', width: '100%' }}>
        <UserHeader />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stay-request" element={<StayRequest />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;