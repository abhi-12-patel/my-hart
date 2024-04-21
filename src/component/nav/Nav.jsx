import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let toggleMenu = () => {
    console.log('toggleMenu called');
    setIsMenuOpen(prevState => !prevState);
  };
  
  console.log(isMenuOpen, "isMenuOpen");

  return (
    <>
      <header className="header">
        <div className="user">
          <img src="developer1.png" alt="" />
          <h3>Jashoda Vasava</h3>
          <p>Web developer</p>
        </div>

        <nav className="navbar">
          <Link to="/" onClick={toggleMenu}>home</Link>
          <Link to="/about" onClick={toggleMenu}>about</Link>
          <Link to="/education" onClick={toggleMenu}>education</Link>
          <a href="#contact">contact</a>
        </nav>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isMenuOpen ? 'show' : ''}`}>
        <div className="sidebar-content">
          <div className="user">
            <img src="developer1.png" alt="" />
            <h3>Jashoda Vasava</h3>
            <p>Web developer</p>
          </div>

          <nav className="navbar">
            <Link to="/" onClick={toggleMenu}>home</Link>
            <Link to="/about" onClick={toggleMenu}>about</Link>
            <Link to="/education" onClick={toggleMenu}>education</Link>
            <a href="#contact" onClick={toggleMenu}>contact</a>
          </nav>
        </div>
      </div>

      {/* Hamburger menu icon */}
      <div 
        id="menu-btn" 
        className={`fas fa-bars ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      ></div>

      <div id="theme-toggler" className="fas fa-moon"></div>
    </>
  );
}
