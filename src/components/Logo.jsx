import React from 'react';
import blog from '../assets/blog.png';
// import './Logo.css'; // Import the CSS file for styling

function Logo({ width = '1000px', header = false }) {
  return (
    <div className={`logo-container ${header ? 'header-logo' : ''}`}>
      <img className='logo' src={blog} alt="Blog Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
