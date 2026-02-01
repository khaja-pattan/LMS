import React, { useState } from 'react';
import { GraduationCap, Menu, X, Bell, Search } from 'lucide-react';

const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Basic styling objects
  const navStyle = {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    padding: '0 20px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'sans-serif'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#4b5563',
    fontWeight: '500',
    margin: '0 15px',
    fontSize: '14px',
    transition: 'color 0.3s'
  };

  return (
    <nav style={navStyle}>
      {/* 1. Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ backgroundColor: '#4f46e5', padding: '8px', borderRadius: '8px' }}>
          <GraduationCap color="white" size={24} />
        </div>
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>
          LMS Portal
        </span>
      </div>

      {/* 2. Desktop Links (Hidden on small screens) */}
      <div className="nav-links">
        <a href="#dashboard" style={linkStyle}>Dashboard</a>
        <a href="#courses" style={linkStyle}>My Courses</a>
        <a href="#tasks" style={linkStyle}>Tasks</a>
      </div>

      {/* 3. Icons Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={20} color="#6b7280" style={{ position: 'absolute', left: '10px' }} />
          <input 
            type="text" 
            placeholder="Search..." 
            style={{
              padding: '8px 8px 8px 35px',
              borderRadius: '20px',
              border: '1px solid #d1d5db',
              outline: 'none',
              backgroundColor: '#f9fafb'
            }}
          />
        </div>
        
        <Bell size={20} color="#6b7280" style={{ cursor: 'pointer' }} />
        
        <div style={{
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          backgroundColor: '#4f46e5',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          ST
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* 4. Simple Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px'
        }}>
          <a href="#dashboard" style={{ padding: '10px 0', textDecoration: 'none', color: '#374151' }}>Dashboard</a>
          <a href="#courses" style={{ padding: '10px 0', textDecoration: 'none', color: '#374151' }}>My Courses</a>
          <a href="#tasks" style={{ padding: '10px 0', textDecoration: 'none', color: '#374151' }}>Tasks</a>
        </div>
      )}

      {/* Simple CSS for responsiveness without needing Tailwind config */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
        }
        @media (min-width: 769px) {
          .nav-links { display: flex; }
          .mobile-toggle { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default SimpleNavbar;