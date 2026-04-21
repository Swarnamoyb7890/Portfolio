import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const links = [
    { name: 'Home', hash: '#home' },
    { name: 'Skills', hash: '#skills' },
    { name: 'About', hash: '#about' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Contact', hash: '#contact' },
  ];

  return (
    <header className="site-header">
      <div className="container nav-container">
        <a href="#home" className="brand" onClick={() => setActiveHash('#home')}>
          <img src="/logo.png" alt="SB Logo" className="logo-img" />
          Swarnamoy
        </a>
        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className={activeHash === link.hash ? 'active' : ''}
              onClick={() => setActiveHash(link.hash)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
