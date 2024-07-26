import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('toggleMenu called');
    setIsMenuOpen(!isMenuOpen);
  };
  
console.log(isMenuOpen,"isMenuOpen")
  return (
    <>
      <header className="header">
        <div className="user">
          <img src="developer2.png" alt="" />
          <h3>Jashoda Hothi</h3>
          <p>Web developer</p>
        </div>

        <nav className="navbar">
          <Link to="/" onClick={toggleMenu}>home</Link>
          <Link to="/about" onClick={toggleMenu}>about</Link>
          <Link to="/project" onClick={toggleMenu}>project</Link>
          <Link to="/education" onClick={toggleMenu}>education</Link>
          <Link to="/contact" onClick={toggleMenu}>contact</Link>
        </nav>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isMenuOpen ? 'show' : ''}`}>
        <div className="sidebar-content">
          <div className="user">
            <img src="developer2.png" alt="" />
            <h3>Jashoda Hothi</h3>
            <p>Web developer</p>
          </div>

          <nav className="navbar">
            <Link to="/" onClick={toggleMenu}>home</Link>
            <Link to="/about" onClick={toggleMenu}>about</Link>
            <Link to="/project" onClick={toggleMenu}>project</Link>
            <Link to="/education" onClick={toggleMenu}>education</Link>
            <Link to="/contact" onClick={toggleMenu}>contact</Link>
          </nav>
        </div>
      </div>

      {/* Hamburger menu icon */}
      <div 
  id="menu-btn" 
  className={`fas fa-bars ${isMenuOpen ? 'open' : ''}`}
  onClick={() => {
    console.log('Hamburger menu clicked');
    toggleMenu();
  }}
></div>


      {/* <div id="theme-toggler" className="fas fa-moon"></div> */}
    </>
  );
}
