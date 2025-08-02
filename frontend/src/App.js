import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import CreateTicket from './pages/CreateTicket';
import ViewTickets from './pages/ViewTickets';
import RegisterPage from './pages/RegisterPage'; // ✅ added this import
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<RegisterPage />} /> {/* ✅ register route added */}
        <Route path="/menu" element={isAuthenticated ? <MenuPage /> : <Navigate to="/" />} />
        <Route path="/create" element={isAuthenticated ? <CreateTicket /> : <Navigate to="/" />} />
        <Route path="/view" element={isAuthenticated ? <ViewTickets /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
