import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Swarnamoy Banerjee</p>
      </div>
    </footer>
  );
}

export default Footer;
