import React from 'react';
import './MyFooter.css';

const MyFooter = () => {
  return (
    <footer className='footer'>
      <div className="line1">
        <h1>GeekVisor</h1>
        <h2>Follow us:</h2>
      </div>
      <div className="line2">
        <p>This Website Provides You Free Web-Courses</p>
      </div>
      <div className="follow-us">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

export default MyFooter;
